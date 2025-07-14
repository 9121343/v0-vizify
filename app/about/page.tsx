import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StarfieldBackground } from "@/components/starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Rocket,
  Target,
  Users,
  Award,
  Globe,
  Sparkles,
  Heart,
  Zap,
  Star,
} from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in footwear innovation",
    avatar: "👨‍💼",
  },
  {
    name: "Maya Rodriguez",
    role: "Head of Design",
    description: "Award-winning designer specializing in sustainable fashion",
    avatar: "👩‍🎨",
  },
  {
    name: "Dr. James Park",
    role: "Chief Technology Officer",
    description: "MIT graduate pioneering smart materials research",
    avatar: "👨‍🔬",
  },
  {
    name: "Sarah Johnson",
    role: "Sustainability Director",
    description: "Environmental scientist committed to eco-friendly production",
    avatar: "👩‍🌾",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Foundation",
    description: "FRIZBLEY was born from a vision to revolutionize footwear",
  },
  {
    year: "2020",
    title: "First Innovation",
    description: "Launched our breakthrough quantum-sole technology",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded to 15 countries with sustainable manufacturing",
  },
  {
    year: "2022",
    title: "Award Recognition",
    description: "Won 'Innovation of the Year' at Global Fashion Tech Awards",
  },
  {
    year: "2023",
    title: "Sustainability Goal",
    description: "Achieved carbon-neutral production across all facilities",
  },
  {
    year: "2024",
    title: "Future Vision",
    description: "Launching our most advanced collection yet",
  },
];

export default function AboutPage() {
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
              <Rocket className="w-8 h-8 text-violet-400 mr-3" />
              <Badge
                variant="outline"
                className="border-violet-500/50 text-violet-300 bg-violet-950/50"
              >
                Our Story
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              About FRIZBLEY
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're not just making shoes - we're crafting the future of
              footwear. From our cosmic-inspired designs to cutting-edge
              technology, every step with FRIZBLEY is a step into tomorrow.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <Card className="bg-black/40 border-white/10 group hover:border-violet-500/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To revolutionize the footwear industry by combining
                    cutting-edge technology, sustainable practices, and
                    cosmic-inspired design. We believe that every step should be
                    comfortable, stylish, and environmentally responsible.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-black/40 border-white/10 group hover:border-violet-500/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To become the world's leading sustainable footwear brand,
                    setting new standards for innovation, quality, and
                    environmental stewardship. We envision a future where
                    fashion and sustainability coexist in perfect harmony.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6 border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do, from design to delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Innovation
                </h3>
                <p className="text-gray-400">
                  Pushing boundaries with cutting-edge technology and
                  cosmic-inspired designs
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-400">
                  Committed to protecting our planet through responsible
                  manufacturing
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
                <p className="text-gray-400">
                  Every product meets our highest standards for durability and
                  performance
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-gray-400">
                  Building connections and empowering our global FRIZBLEY family
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind FRIZBLEY's cosmic innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-violet-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300">
                From startup to stellar success - the FRIZBLEY timeline
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
                        {milestone.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                  100K+
                </div>
                <p className="text-gray-400">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                  25
                </div>
                <p className="text-gray-400">Countries</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-gray-400">Shoe Models</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <p className="text-gray-400">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the FRIZBLEY Family
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the footwear revolution. Experience the future, one
              step at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
                asChild
              >
                <Link href="/shop">
                  <Zap className="w-5 h-5 mr-2" />
                  Shop Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
