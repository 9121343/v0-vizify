"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, AlertCircle, CheckCircle2 } from "lucide-react"
import QRCode from "./qr-code"

interface TwoFactorSetupProps {
  onComplete: () => void
  onCancel: () => void
}

export default function TwoFactorSetup({ onComplete, onCancel }: TwoFactorSetupProps) {
  const [step, setStep] = useState<"setup" | "verify" | "backup">("setup")
  const [verificationCode, setVerificationCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationError, setVerificationError] = useState(false)
  const [backupCodes, setBackupCodes] = useState<string[]>([
    "ABCD-EFGH-IJKL",
    "MNOP-QRST-UVWX",
    "1234-5678-90AB",
    "CDEF-GHIJ-KLMN",
    "OPQR-STUV-WXYZ",
    "2468-1357-9ABC",
  ])
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

  // Mock secret key for QR code
  const secretKey = "JBSWY3DPEHPK3PXP"

  const handleVerifyCode = () => {
    setIsVerifying(true)
    setVerificationError(false)

    // Simulate verification delay
    setTimeout(() => {
      setIsVerifying(false)

      // For demo purposes, any 6-digit code is valid
      if (verificationCode.length === 6 && /^\d+$/.test(verificationCode)) {
        setStep("backup")
      } else {
        setVerificationError(true)
      }
    }, 1500)
  }

  const handleCopyBackupCodes = () => {
    navigator.clipboard.writeText(backupCodes.join("\n"))
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)
  }

  const handleComplete = () => {
    onComplete()
  }

  return (
    <Card className="border-2 border-primary/10">
      <CardHeader>
        <CardTitle>Set Up Two-Factor Authentication</CardTitle>
        <CardDescription>Protect your account with an additional layer of security</CardDescription>
      </CardHeader>
      <CardContent>
        {step === "setup" && (
          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h3 className="font-medium">Step 1: Scan QR Code</h3>
              <p className="text-sm text-muted-foreground">
                Scan this QR code with your authenticator app (like Google Authenticator, Authy, or Microsoft
                Authenticator)
              </p>

              <div className="flex justify-center py-4">
                <QRCode
                  value={`otpauth://totp/ShoeVista:user@example.com?secret=${secretKey}&issuer=ShoeVista`}
                  size={180}
                />
              </div>

              <div className="text-center">
                <p className="text-sm font-medium">Can't scan the QR code?</p>
                <p className="text-sm text-muted-foreground mt-1">Enter this code manually in your app:</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <code className="bg-background px-3 py-1 rounded border font-mono text-sm">{secretKey}</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      navigator.clipboard.writeText(secretKey)
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Step 2: Enter Verification Code</h3>
              <p className="text-sm text-muted-foreground">Enter the 6-digit code from your authenticator app</p>

              <div className="space-y-2">
                <Label htmlFor="verification-code">Verification Code</Label>
                <Input
                  id="verification-code"
                  placeholder="123456"
                  value={verificationCode}
                  onChange={(e) => {
                    setVerificationCode(e.target.value)
                    setVerificationError(false)
                  }}
                  maxLength={6}
                  className="font-mono text-center text-lg"
                />
              </div>

              {verificationError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Invalid verification code. Please try again.</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        )}

        {step === "backup" && (
          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h3 className="font-medium">Recovery Codes</h3>
              <p className="text-sm text-muted-foreground">
                Save these recovery codes in a secure place. You can use them to access your account if you lose your
                authenticator device.
              </p>

              <div className="grid grid-cols-2 gap-2 py-2">
                {backupCodes.map((code, index) => (
                  <div key={index} className="bg-background p-2 rounded border font-mono text-sm text-center">
                    {code}
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline" onClick={handleCopyBackupCodes} className="flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  {copiedToClipboard ? "Copied!" : "Copy All Codes"}
                </Button>
              </div>
            </div>

            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                Two-factor authentication has been successfully set up. You'll need to enter a verification code each
                time you sign in.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3">
        {step === "setup" ? (
          <>
            <Button variant="outline" onClick={onCancel} className="w-full sm:w-auto order-2 sm:order-1">
              Cancel
            </Button>
            <Button
              onClick={handleVerifyCode}
              disabled={verificationCode.length !== 6 || isVerifying}
              className="w-full sm:w-auto order-1 sm:order-2"
            >
              {isVerifying ? "Verifying..." : "Verify Code"}
            </Button>
          </>
        ) : (
          <Button onClick={handleComplete} className="w-full">
            Complete Setup
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
