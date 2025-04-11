import { Coffee, Clock, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const menuItems = [
    { name: "Espresso", price: "$3.50", description: "Rich and bold single shot" },
    { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk foam" },
    { name: "Avocado Toast", price: "$8.50", description: "Sourdough with avocado, cherry tomatoes" },
    { name: "Blueberry Muffin", price: "$3.75", description: "Freshly baked daily" },
    { name: "Iced Matcha", price: "$5.00", description: "Premium ceremonial grade matcha" }
  ];

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&auto=format" 
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Brew & Bites</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Artisanal coffee and fresh pastries in the heart of the city
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-medium transition">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1517701550928-30a2a6f032a3?w=800&auto=format"
              alt="Coffee beans"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Story</h2>
            <p className="text-lg mb-6 text-gray-700">
              Founded in 2015, Brew & Bites started as a small coffee cart and has grown into a beloved neighborhood cafe. 
              We source our beans directly from sustainable farms and bake all our pastries in-house daily.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <Coffee className="text-amber-600" size={24} />
              <span className="text-gray-700">Specialty grade coffee</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-amber-600" size={24} />
              <span className="text-gray-700">Open 7 days a week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-amber-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-800">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{item.price}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-amber-800">Visit Us</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155734205!2d-73.987844924017!3d40.7484409713896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="text-amber-600" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-700">123 Coffee Street, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Clock className="text-amber-600" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Hours</h3>
                <p className="text-gray-700">Monday - Friday: 7am - 7pm</p>
                <p className="text-gray-700">Saturday - Sunday: 8am - 6pm</p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-amber-600 hover:text-amber-700">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-700">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-amber-600 hover:text-amber-700">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Brew & Bites</h2>
              <p className="text-amber-200">Artisanal coffee since 2015</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-300">Home</a>
              <a href="#" className="hover:text-amber-300">Menu</a>
              <a href="#" className="hover:text-amber-300">About</a>
              <a href="#" className="hover:text-amber-300">Contact</a>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}