"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AuthDebug() {
  const [cookies, setCookies] = useState<string>("")
  const [showDebug, setShowDebug] = useState(false)

  useEffect(() => {
    setCookies(document.cookie)
  }, [])

  return (
    <div className="mt-8 border-t pt-4">
      <Button variant="outline" onClick={() => setShowDebug(!showDebug)} className="mb-4">
        {showDebug ? "Hide Debug Info" : "Show Debug Info"}
      </Button>

      {showDebug && (
        <div className="space-y-4">
          <Alert>
            <AlertDescription>
              <h3 className="font-bold mb-2">Authentication Debug</h3>
              <p className="mb-2">This information helps troubleshoot authentication issues:</p>

              <div className="bg-gray-100 p-3 rounded text-sm font-mono overflow-x-auto">
                <p>
                  <strong>Cookies:</strong> {cookies || "No cookies found"}
                </p>
                <p>
                  <strong>Auth Cookie:</strong> {cookies.includes("auth-token") ? "Present" : "Not found"}
                </p>
                <p>
                  <strong>User Agent:</strong> {navigator.userAgent}
                </p>
                <p>
                  <strong>Current URL:</strong> {window.location.href}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600">For testing, you can use these credentials:</p>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Email: user@example.com</li>
                  <li>Password: password123</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  )
}
