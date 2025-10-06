import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, UserRound, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
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
        <div>
          <UserRound />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
