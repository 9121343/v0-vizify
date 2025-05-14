"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { AlertCircle, CheckCircle2, Shield, Smartphone, Key, LogOut, Clock, Lock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import TwoFactorSetup from "@/components/shop/account/two-factor-setup"

export default function SecuritySettings() {
  const [currentTab, setCurrentTab] = useState("general")
  const [showTwoFactorSetup, setShowTwoFactorSetup] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Security Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account security and authentication methods</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" />
            <span>Account Protected</span>
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="general" value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="two-factor">Two-Factor Auth</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password regularly to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Notifications</CardTitle>
              <CardDescription>Choose how you want to receive security alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive security alerts via email</p>
                </div>
                <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive security alerts via SMS</p>
                </div>
                <Switch id="sms-notifications" checked={smsNotifications} onCheckedChange={setSmsNotifications} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="two-factor" className="space-y-6">
          {showTwoFactorSetup ? (
            <TwoFactorSetup
              onComplete={() => {
                setShowTwoFactorSetup(false)
                setTwoFactorEnabled(true)
              }}
              onCancel={() => setShowTwoFactorSetup(false)}
            />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Two-Factor Authentication (2FA)</h3>
                    <p className="text-sm text-muted-foreground">
                      {twoFactorEnabled
                        ? "Your account is protected with two-factor authentication"
                        : "Protect your account with two-factor authentication"}
                    </p>
                  </div>
                  <div>
                    {twoFactorEnabled ? (
                      <Button variant="outline" onClick={() => setTwoFactorEnabled(false)}>
                        Disable
                      </Button>
                    ) : (
                      <Button onClick={() => setShowTwoFactorSetup(true)}>Enable</Button>
                    )}
                  </div>
                </div>

                {twoFactorEnabled && (
                  <Alert>
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertTitle>Two-factor authentication is enabled</AlertTitle>
                    <AlertDescription>Your account is protected with an additional layer of security.</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-4 mt-6">
                  <h3 className="font-medium">Available Methods</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <h4 className="font-medium">Authenticator App</h4>
                        <p className="text-sm text-muted-foreground">
                          Use an authenticator app like Google Authenticator or Authy
                        </p>
                      </div>
                      <Badge variant={twoFactorEnabled ? "default" : "outline"}>
                        {twoFactorEnabled ? "Active" : "Recommended"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <Key className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <h4 className="font-medium">Recovery Codes</h4>
                        <p className="text-sm text-muted-foreground">
                          Generate backup codes to use when you don't have your device
                        </p>
                      </div>
                      {twoFactorEnabled && (
                        <Button variant="outline" size="sm">
                          View Codes
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>Manage your active sessions across devices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Current Session</h3>
                      <p className="text-sm text-muted-foreground">Chrome on Windows • New York, USA</p>
                    </div>
                  </div>
                  <Badge>Current</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-muted p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">iPhone 13</h3>
                      <p className="text-sm text-muted-foreground">Safari on iOS • Los Angeles, USA • 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Review recent security events on your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <Lock className="h-4 w-4" />,
                    event: "Password changed",
                    time: "Today at 10:34 AM",
                    location: "New York, USA",
                  },
                  {
                    icon: <LogOut className="h-4 w-4" />,
                    event: "Signed out on iPhone",
                    time: "Yesterday at 8:12 PM",
                    location: "Los Angeles, USA",
                  },
                  {
                    icon: <AlertCircle className="h-4 w-4" />,
                    event: "Failed login attempt",
                    time: "May 12, 2023 at 3:45 PM",
                    location: "Unknown location",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="bg-muted p-2 rounded-full mt-0.5">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="font-medium">{activity.event}</h3>
                        <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1 sm:mt-0">
                          <Clock className="h-3.5 w-3.5" />
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
