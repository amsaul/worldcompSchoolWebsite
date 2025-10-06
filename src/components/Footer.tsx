import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, UserRound, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br bg-maroon p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Worldcomp Lenana Academy</h3>
                <p className="text-xs text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm">
              Nurturing young minds and shaping tomorrow's leaders through quality education and holistic development.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-maroon transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-maroon transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-maroon transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-maroon transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/ComingSoon" className="text-sm hover:text-maroon transition-colors">
                  Teachers Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-maroon flex-shrink-0 mt-0.5" />
                <span className="text-sm">Nairobi - Kenya, Lenana, P.O Box 7434 - 00200</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-maroon flex-shrink-0" />
                <span className="text-sm">+254 722 584 827</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-maroon flex-shrink-0" />
                <span className="text-sm">osbornbayo@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-white font-medium mb-2 text-sm">School Hours</h5>
              <p className="text-sm">Monday - Friday</p>
              <p className="text-sm">8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Worldcomp Lenana Academy. All rights reserved.
          </p>
        </div>
        <div className="fixed bottom-4 right-4 mr-10">
          {/* Online Support Icon (Headset SVG) */}
          <svg
            onClick={() => setShowPopup(true)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-maroon hover:text-orange-600 transition-transform transform hover:scale-110 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1C6.477 1 2 5.477 2 11v4a3 3 0 003 3h1v-6H5v-1a7 7 0 0114 0v1h-1v6h1a3 3 0 003-3v-4c0-5.523-4.477-10-10-10z" />
            <path d="M9 19a3 3 0 006 0h-6z" />
          </svg>

           {/* Popup Message */}
            {showPopup && (
              <div className="absolute bottom-14 right-0 bg-white border border-blue-200 rounded-lg shadow-lg p-4 w-64 animate-fade-in">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Online Support
                </h3>
                <p className="text-gray-700 text-sm">
                  Our online support system is currently under construction.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Close
                </button>
              </div>
            )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
