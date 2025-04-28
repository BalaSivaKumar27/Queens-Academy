import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gradient-to-r from-[#1E1B4B] via-[#6B46C1] to-[#D53F8C]">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-[#F472B6]" />
              <span className="ml-2 text-2xl font-bold text-white">Queens Academy</span>
            </div>
            <p className="font-light text-gray-200">Empowering minds and shaping futures through excellence in education.</p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-200 transition-colors hover:text-[#F472B6]">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-200 transition-colors hover:text-[#F472B6]">Courses</Link></li>
              <li><Link to="/admission" className="text-gray-200 transition-colors hover:text-[#F472B6]">Admission</Link></li>
              <li><Link to="/contact" className="text-gray-200 transition-colors hover:text-[#F472B6]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/research" className="text-gray-200 transition-colors hover:text-[#F472B6]">Research</Link></li>
              <li><Link to="/infrastructure" className="text-gray-200 transition-colors hover:text-[#F472B6]">Library</Link></li>
              <li><Link to="/career-guidance" className="text-gray-200 transition-colors hover:text-[#F472B6]">Career Guidance</Link></li>
              <li><Link to="/alumni" className="text-gray-200 transition-colors hover:text-[#F472B6]">Alumni</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#F472B6]" />
                <span className="text-gray-200">45 Anna Nagar Main Road, Madurai</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#F472B6]" />
                <span className="text-gray-200">+91 452 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#F472B6]" />
                <span className="text-gray-200">admissions@queensacademy.edu</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 text-center border-t border-[#6B46C1]">
          <p className="text-gray-200">© 2025 Queens Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;