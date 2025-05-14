"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Footprints,
  Briefcase,
  Coffee,
  HardDriveIcon as Boot,
  SirenIcon as Sandal,
  HeartPulse,
  Baby,
  ArrowRight,
} from "lucide-react"

const categories = [
  {
    id: "athletic",
    title: "Athletic / Sports Shoes",
    description: "Performance, comfort, and durability for physical activity.",
    icon: <Footprints className="h-10 w-10 text-purple-500" />,
    examples: [
      "Running Shoes – Nike Air Zoom Pegasus, Adidas Ultraboost",
      "Training Shoes – Reebok Nano X, Nike Metcon",
      "Basketball Shoes – Air Jordan 1, Nike LeBron",
      "Soccer Cleats – Adidas Predator, Nike Mercurial",
      "Tennis Shoes – Asics Gel-Resolution, Nike Court Air Zoom",
      "Skate Shoes – Vans Old Skool, Nike SB Dunk",
    ],
  },
  {
    id: "formal",
    title: "Formal Shoes",
    description: "Office, weddings, and professional settings.",
    icon: <Briefcase className="h-10 w-10 text-purple-500" />,
    examples: [
      "Oxfords – Clarks Tilden Cap, Allen Edmonds Park Avenue",
      "Derbies – Johnston & Murphy Melton",
      "Brogues – Ted Baker Brogue",
      "Loafers – Gucci Horsebit Loafer, Penny Loafers",
      "Monk Straps – Double Monk Strap by Magnanni",
    ],
  },
  {
    id: "casual",
    title: "Casual Shoes",
    description: "Everyday wear, comfort, and style.",
    icon: <Coffee className="h-10 w-10 text-purple-500" />,
    examples: [
      "Sneakers – Converse Chuck Taylor, Adidas Stan Smith",
      "Slip-ons – Vans Classic Slip-On, TOMS",
      "Espadrilles – Soludos Dali",
      "Moccasins – Minnetonka Moccasins",
      "Boat Shoes – Sperry Top-Sider",
    ],
  },
  {
    id: "boots",
    title: "Boots",
    description: "Outdoor use, rugged style, protection, and warmth.",
    icon: <Boot className="h-10 w-10 text-purple-500" />,
    examples: [
      "Chelsea Boots – Blundstone 500, Dr. Martens 2976",
      "Combat Boots – Timberland 6-Inch, Dr. Martens 1460",
      "Work Boots – Caterpillar, Red Wing Iron Ranger",
      "Hiking Boots – Merrell Moab, Salomon Quest",
      "Desert Boots – Clarks Originals",
    ],
  },
  {
    id: "sandals",
    title: "Sandals & Slippers",
    description: "Warm weather, casual outings, indoor wear.",
    icon: <Sandal className="h-10 w-10 text-purple-500" />,
    examples: [
      "Flip Flops – Havaianas, Reef",
      "Slides – Adidas Adilette, Nike Benassi",
      "Gladiator Sandals – Steve Madden",
      "Birkenstocks – Arizona Sandals",
      "House Slippers – UGG Scuff, Crocs",
    ],
  },
  {
    id: "fashion",
    title: "Dress / Fashion Shoes",
    description: "Fashion, parties, formal events.",
    icon: <HeartPulse className="h-10 w-10 text-purple-500" />,
    examples: [
      "Heels – Louboutin So Kate, Jimmy Choo Romy",
      "Pumps – Aldo, Nine West",
      "Ballet Flats – Tory Burch Minnie, Hush Puppies",
      "Wedges – Steve Madden Wedges",
      "Mules – Gucci Princetown",
    ],
  },
  {
    id: "kids",
    title: "Kids' Shoes",
    description: "Support growing feet with comfort and safety.",
    icon: <Baby className="h-10 w-10 text-purple-500" />,
    examples: [
      "Velcro Sneakers – Stride Rite, Nike Kids",
      "Light-up Shoes – Sketchers Twinkle Toes",
      "Mini Boots – UGG Kids",
      "Baby Booties – Robeez Soft Soles",
    ],
  },
]

export default function ShoeCategories() {
  return (
    <section className="py-10 px-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border border-purple-500/20 backdrop-blur-sm h-full hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <div className="mb-4">{category.icon}</div>
                  <CardTitle className="text-white text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-400">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-white font-medium mb-2">Popular Examples:</h4>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    {category.examples.map((example, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-purple-500 mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/customize-shoe" className="w-full">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Customize {category.title.split("/")[0].trim()}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
