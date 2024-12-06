import { Plane, Palmtree, MapPin } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import DestinationCard from '@/components/DestinationCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const destinations = [
  {
    title: "Manuel Antonio",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    location: "Puntarenas, Costa Rica",
    price: "$899",
    description: "Discover pristine beaches and diverse wildlife in Costa Rica's most popular national park."
  },
  {
    title: "Monteverde",
    image: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e",
    location: "Puntarenas, Costa Rica",
    price: "$849",
    description: "Explore the magical cloud forest and its unique ecosystem."
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2"
          alt="Costa Rica Paradise"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Discover Costa Rica
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Experience the magic of Pura Vida with our curated Costa Rican adventures
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <p className="text-gray-600">Costa Rica specialists with deep local knowledge</p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palmtree className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Adventures</h3>
              <p className="text-gray-600">Sustainable tourism supporting local communities</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hidden Gems</h3>
              <p className="text-gray-600">Access to exclusive locations and experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Destinations</h2>
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full"
            >
              <CarouselContent>
                {destinations.map((destination, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <DestinationCard {...destination} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Your Costa Rican Adventure?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Contact us now and lets plan your perfect tropical getaway
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://wa.me/+50664785875"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full flex items-center gap-2 transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://www.instagram.com/makaris_experiencesc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pura Vida Travel</h3>
              <p className="text-gray-400">Your gateway to Costa Rican adventures</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: info@puravidatravel.com</p>
              <p className="text-gray-400">Phone: +506 2222 3333</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <p className="text-gray-400">San José, Costa Rica</p>
              <p className="text-gray-400">Central Avenue, 10101</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pura Vida Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
