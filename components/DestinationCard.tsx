import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface DestinationProps {
  title: string;
  image: string;
  location: string;
  price: string;
  description: string;
}

export default function DestinationCard({ title, image, location, price, description }: DestinationProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            {price}
          </span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}