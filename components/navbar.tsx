"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500 font-bold text-2xl tracking-tighter">
          FRIZBLEY
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/collection">Collection</NavLink>
        <NavLink href="/lookbook">Lookbook</NavLink>
        <NavLink href="/3d-model">3D Model</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Button
          variant="ghost"
          className="text-white hover:text-violet-400"
          asChild
        >
          <Link href="/auth/sign-in">Sign In</Link>
        </Button>
        <Button className="relative group overflow-hidden" asChild>
          <Link href="/collection">
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:opacity-90 transition-opacity"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity"></span>
            <span className="relative flex items-center">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </span>
          </Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-white/10 p-4 md:hidden z-50">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-violet-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/collection"
              className="text-white hover:text-violet-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collection
            </Link>
            <Link
              href="/lookbook"
              className="text-white hover:text-violet-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lookbook
            </Link>
            <Link
              href="/3d-model"
              className="text-white hover:text-violet-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              3D Model
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-violet-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-violet-400 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <Button
                variant="ghost"
                className="text-white hover:text-violet-400 justify-start"
                asChild
              >
                <Link
                  href="/shop/auth/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white w-full"
                asChild
              >
                <Link
                  href="/collection"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all group-hover:w-full" />
    </Link>
  );
}
