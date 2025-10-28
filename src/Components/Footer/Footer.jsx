import { Facebook, Instagram, Twitter } from 'lucide-react';

const RestaurantFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative ">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-white">
        {/* Contact Us Section */}
        <div className="bg-gray-800 py-12 px-6 lg:py-16 max-w-7xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">CONTACT US</h2>
          <div className="space-y-2 text-lg lg:text-xl">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="bg-gray-900 py-12 px-6 lg:py-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Follow US</h2>
          <p className="text-lg lg:text-xl mb-8">Join us on social media</p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-white hover:text-blue-500 transition-colors duration-200"
            >
              <Facebook className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition-colors duration-200"
            >
              <Instagram className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <Twitter className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-950 py-6 px-4">
        <p className="text-white text-center text-sm lg:text-base">
          Copyright © {currentYear} CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default RestaurantFooter;