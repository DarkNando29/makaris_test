import { MessageCircle, Instagram, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
            <Image
              src="https://instagram.fsjo6-1.fna.fbcdn.net/v/t51.2885-19/465130206_1652741162338277_377287711370365234_n.jpg?_nc_ht=instagram.fsjo6-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2AF11ryGpHDNJ27UoY6RVDrxOFDS6UEF5n0NAfo30PJxzH_rw-5YeoB3Sicj7i2dCQ8&_nc_ohc=dCUrGWLB-64Q7kNvgHa8s2f&_nc_gid=6c82f4e3434a4bc3b39d5170cff1257b&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYApcTsaCjpVX__2oPBgWVIktiQYNB9zs09b4sei1XQe9Q&oe=6755AFFE&_nc_sid=7d3ac5"
              alt="Makaris Experiences"
              width={100}
              height={25}
          className="object-cover "
          priority
            />
            <span className="text-xl font-bold text-[#E31E24]">Makaris Experiences</span>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="#destinations" className="text-gray-600 hover:text-[#E31E24] transition-colors">
              Destinations
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-[#E31E24] transition-colors">
              About
            </Link>
            <div className="flex gap-3">
              <a
                href="https://wa.me/+50664785875"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/makaris_experiencesc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}
