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
import {image1, image2, image3, image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30,image31,image32,image33} from '../assets';

const destinations = [
  {
    title: "Rio Celeste",
    image: image1,
    location: "Puntarenas, Costa Rica",
    description: "Tour"
  },
  {
    title: "Paddleboard in Arenal Lake",
    image: image2,
    description: "Activities"
  },
  {
    title: "Naturalist tour",
    image: image3,
    description: "Tour"
  },
  {
    title: "Hanging Bridges Mistico Park/Puestes colgantes",
    image: image4,
    description: "Tour"
  },
  {
    title: "Hiking/senderismo",
    image: image5,
    description: "Activities"
  },
  {
    title: "Bird Sightings",
    image: image6,
    description: "Some animals"
  },
  {
    title: "Canopy Tour",
    image: image7,
    description: "Activities"
  },
  {
    title: "Snakes",
    image: image8,
    description: "Some animals"
  },
  {
    title: "Snakes",
    image: image9,
    description: "Some animals"
  },
  {
    title: "Snakes",
    image: image10,
    description: "Some animals"
  },
  {
    title: "Monkeys Sightings",
    image: image11,
    description: "Activities"
  },
  {
    title: "atv tours",
    image: image12,
    description: "Activities"
  },
  {
    title: "Kayaking on Arenal Lake",
    image: image13,
    description: "Activities"
  },
  {
    title: "atv tours",
    image: image14,
    description: "Activities"
  },
  {
    title: "Slot tours",
    image: image15,
    description: "Activities"
  },
  {
    title: "Kayak arenal lake",
    image: image16,
    description: "Activities"
  },
  {
    title: "Tucans Sightings",
    image: image17,
    description: "Activities"
  },
  {
    title: "Fotos personalizadas",
    image: image18,
    description: "Service"
  },
  {
    title: "Arenal Lake",
    image: image19,
    description: "Place"
  },
  {
    title: "Private Transportation all over CR",
    image: image20,
    description: "Activities"
  },
  {
    title: "Hikes to the Arenal volcano",
    image: image21,
    description: "Activities"
  },
  {
    title: "Hikes to the Arenal volcano",
    image: image22,
    description: "Activities"
  },
  {
    title: "Ecologic Lake Park-Arenal Volcano",
    image: image23,
    description: "Activities"
  },
  {
    title: "Snakes tours",
    image: image24,
    description: "Activities"
  },
  {
    title: "Sloth tours",
    image: image25,
    description: "Activities"
  },
  {
    title: "Frogs tours",
    image: image26,
    description: "Activities"
  },
  {
    title: "Frogs tours",
    image: image27,
    description: "Activities"
  },
  {
    title: "Arenal Volcano",
    image: image28,
    description: "Activities"
  },
  {
    title: "Canopy",
    image: image29,
    description: "Activities"
  },
  {
    title: "Snakes tours",
    image: image30,
    description: "Activities"
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
          <h2 className="text-4xl font-bold text-center mb-16">Some of our journeys</h2>
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
