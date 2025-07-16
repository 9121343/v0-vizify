"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CSSStarfieldBackground } from "@/components/css-starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HeadphonesIcon,
  Globe,
  Users,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0">
        <StarfieldBackground />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-violet-400 mr-3" />
              <Badge
                variant="outline"
                className="border-violet-500/50 text-violet-300 bg-violet-950/50"
              >
                Get in Touch
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our cosmic footwear? Need support? Want to
              collaborate? We're here to help you reach for the stars.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Cards */}
                <Card className="bg-black/40 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Email Us
                        </h3>
                        <p className="text-gray-400">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-violet-400">hello@frizbley.com</p>
                      <p className="text-gray-400">General inquiries</p>
                      <p className="text-violet-400">support@frizbley.com</p>
                      <p className="text-gray-400">Customer support</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Call Us
                        </h3>
                        <p className="text-gray-400">Mon-Fri, 9AM-6PM PST</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-violet-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">US & Canada</p>
                      <p className="text-violet-400">+44 20 7123 4567</p>
                      <p className="text-gray-400">UK & Europe</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Visit Us
                        </h3>
                        <p className="text-gray-400">Come see our showroom</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      <p>123 Cosmic Avenue</p>
                      <p>Innovation District</p>
                      <p>San Francisco, CA 94105</p>
                      <p className="text-violet-400 mt-2">
                        By appointment only
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Business Hours
                        </h3>
                        <p className="text-gray-400">When we're available</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Monday - Friday</span>
                        <span className="text-white">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Saturday</span>
                        <span className="text-white">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sunday</span>
                        <span className="text-violet-400">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-black/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center">
                      <Send className="w-6 h-6 mr-3 text-violet-400" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="bg-black/20 border-white/20 text-white placeholder:text-gray-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="bg-black/20 border-white/20 text-white placeholder:text-gray-500"
                            required
                          />
                        </div>
                      </div>

                      {/* Category & Subject Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-white">
                            Category
                          </Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) =>
                              handleInputChange("category", value)
                            }
                          >
                            <SelectTrigger className="bg-black/20 border-white/20 text-white">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent className="bg-black border-white/20">
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="support">
                                Customer Support
                              </SelectItem>
                              <SelectItem value="partnership">
                                Partnership
                              </SelectItem>
                              <SelectItem value="media">
                                Media & Press
                              </SelectItem>
                              <SelectItem value="careers">Careers</SelectItem>
                              <SelectItem value="feedback">
                                Product Feedback
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-white">
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            type="text"
                            placeholder="Brief subject line"
                            value={formData.subject}
                            onChange={(e) =>
                              handleInputChange("subject", e.target.value)
                            }
                            className="bg-black/20 border-white/20 text-white placeholder:text-gray-500"
                            required
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className="bg-black/20 border-white/20 text-white placeholder:text-gray-500 min-h-32"
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-xs text-gray-400 text-center">
                        We typically respond within 24 hours during business
                        days
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Other Ways to Connect
              </h2>
              <p className="text-xl text-gray-300">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <HeadphonesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Live Chat
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get instant help from our support team
                  </p>
                  <Badge
                    variant="outline"
                    className="border-green-500/50 text-green-400"
                  >
                    Online Now
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Help Center
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Browse our comprehensive FAQ
                  </p>
                  <Badge
                    variant="outline"
                    className="border-violet-500/50 text-violet-400"
                  >
                    Self Service
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Community
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Connect with other FRIZBLEY fans
                  </p>
                  <Badge
                    variant="outline"
                    className="border-blue-500/50 text-blue-400"
                  >
                    Join Discord
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Partnerships
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Explore business opportunities
                  </p>
                  <Badge
                    variant="outline"
                    className="border-yellow-500/50 text-yellow-400"
                  >
                    B2B Inquiries
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
