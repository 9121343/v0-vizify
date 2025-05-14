"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Mock user database
const users = [
  {
    id: "1",
    email: "user@example.com",
    password: "password123", // In a real app, this would be hashed
    firstName: "John",
    lastName: "Doe",
  },
]

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const rememberMe = formData.get("rememberMe") === "on"

  // Validate inputs
  if (!email || !password) {
    return { success: false, message: "Email and password are required" }
  }

  // Find user (in a real app, you'd query your database)
  const user = users.find((u) => u.email === email)

  // Check if user exists and password matches
  if (!user || user.password !== password) {
    return { success: false, message: "Invalid email or password" }
  }

  // Set authentication cookie
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60, // 30 days or 24 hours
    path: "/",
  }

  cookies().set("auth-token", `user-${user.id}`, cookieOptions)

  return { success: true }
}

export async function createAccount(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const agreeTerms = formData.get("agreeTerms") === "on"

  // Validate inputs
  if (!email || !password || !firstName || !lastName) {
    return { success: false, message: "All fields are required" }
  }

  if (!agreeTerms) {
    return { success: false, message: "You must agree to the terms and conditions" }
  }

  // Check if user already exists
  if (users.some((u) => u.email === email)) {
    return { success: false, message: "Email already in use" }
  }

  // In a real app, you would hash the password and store the user in your database
  const newUser = {
    id: String(users.length + 1),
    email,
    password, // Would be hashed in a real app
    firstName,
    lastName,
  }

  users.push(newUser)

  // Set authentication cookie
  cookies().set("auth-token", `user-${newUser.id}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60, // 24 hours
    path: "/",
  })

  return { success: true }
}

export async function forgotPassword(formData: FormData) {
  const email = formData.get("email") as string

  // Validate input
  if (!email) {
    return { success: false, message: "Email is required" }
  }

  // Check if user exists
  const user = users.find((u) => u.email === email)

  if (!user) {
    // For security reasons, don't reveal that the email doesn't exist
    return { success: true, message: "If your email is in our system, you will receive a reset link shortly" }
  }

  // In a real app, you would generate a token, store it with an expiration,
  // and send an email with a link containing the token

  return { success: true, message: "If your email is in our system, you will receive a reset link shortly" }
}

export async function resetPassword(formData: FormData) {
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string
  const token = formData.get("token") as string

  // Validate inputs
  if (!password || !confirmPassword) {
    return { success: false, message: "All fields are required" }
  }

  if (password !== confirmPassword) {
    return { success: false, message: "Passwords don't match" }
  }

  if (password.length < 8) {
    return { success: false, message: "Password must be at least 8 characters long" }
  }

  // In a real app, you would validate the token, find the associated user,
  // and update their password in the database

  return { success: true }
}

export async function signOut() {
  cookies().delete("auth-token")
  redirect("/shop/auth/sign-in")
}
