import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Admission', path: '/admission' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Research', path: '/research' },
    { name: 'Placements', path: '/placements' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Career Guidance', path: '/career-guidance' },
  ];

  return (
    <nav className="fixed z-50 w-full shadow-lg bg-gradient-to-r from-[#1E1B4B]/90 to-[#6B46C1]/90 backdrop-blur-md">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GraduationCap className="w-8 h-8 text-white" />
            <span className="ml-2 text-2xl font-bold tracking-tight text-white">Queens Academy</span>
          </Link>
          <div className="hidden space-x-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium text-white transition-colors duration-300 hover:text-[#F472B6]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button className="px-6 py-2 font-semibold text-[#F472B6] transition duration-300 bg-white rounded-full shadow-md hover:bg-[#F472B6] hover:text-white">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;