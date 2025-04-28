import React from 'react';
import { GraduationCap, BookOpen, Users, Trophy, ChevronRight, MapPin } from 'lucide-react';

function Infrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#6B46C1] to-[#D53F8C]">
      {/* Hero Section */}
      <section id="infrastructure" className="pt-24 pb-12 bg-gradient-to-br from-[#2A1E5E] via-[#6B46C1] to-[#D53F8C]">
        <div className="container px-6 py-16 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:w-1/2 md:mb-0">
              <h1 className="mb-6 text-5xl font-extrabold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text">
                Infrastructure at Queens Academy
              </h1>
              <p className="mb-8 text-xl font-light leading-relaxed text-white">
                Experience world-class facilities designed to enhance your learning and research.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center px-8 py-3 text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] hover:from-[#D53F8C] hover:to-[#6B46C1] hover:scale-105">
                  Virtual Tour <ChevronRight className="ml-2" />
                </button>
                <button className="px-8 py-3 text-[#F472B6] transition duration-300 transform border-2 border-[#F472B6] rounded-full hover:bg-[#F472B6] hover:text-white hover:scale-105">
                  Campus Map
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Campus infrastructure"
                className="transition duration-500 transform shadow-2xl rounded-xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-gradient-to-t from-[#2A1E5E] to-[#6B46C1]/50">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Campus Facilities
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'State-of-the-Art Classrooms',
                desc: 'Equipped with smart boards and multimedia systems.',
                icon: GraduationCap,
              },
              {
                title: 'Modern Libraries',
                desc: 'Access to extensive digital and physical resources.',
                icon: BookOpen,
              },
              {
                title: 'Sports Complexes',
                desc: 'World-class facilities for indoor and outdoor sports.',
                icon: Trophy,
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-[#2A1E5E]/20 via-[#6B46C1]/10 to-[#D53F8C]/10 transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <facility.icon className="w-12 h-12 mb-4 text-[#F472B6]" />
                <h3 className="mb-2 text-xl font-semibold text-white">{facility.title}</h3>
                <p className="text-gray-200">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technological Resources */}
      <section className="py-16 bg-gradient-to-br from-[#2A1E5E]/50 via-[#6B46C1]/30 to-[#D53F8C]/20">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Technological Resources
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: 'Advanced Labs',
                desc: 'Cutting-edge labs for science, engineering, and IT research.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              },
              {
                title: 'High-Speed Wi-Fi',
                desc: 'Campus-wide connectivity for seamless learning.',
                image: 'https://images.unsplash.com/photo-1501854140801-50d038201746?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-[#4A2D7A] transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">{resource.title}</h3>
                  <p className="text-gray-200">{resource.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-16 bg-gradient-to-t from-[#2A1E5E] to-[#6B46C1]/50">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Sustainability Initiatives
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg text-gray-200">
              Queens Academy is committed to eco-friendly practices, including solar energy, water recycling, and green
              campus development.
            </p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2 text-[#F472B6]" />
                100% solar-powered main buildings.
              </li>
              <li className="flex items-center justify-center">
                <Users className="w-6 h-6 mr-2 text-[#F472B6]" />
                Community-driven recycling programs.
              </li>
              <li className="flex items-center justify-center">
                <Trophy className="w-6 h-6 mr-2 text-[#F472B6]" />
                Awarded for sustainable campus design in 2024.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#2A1E5E]/50 via-[#6B46C1]/30 to-[#D53F8C]/20">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text">
            Explore Our Campus
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Visit us to see our state-of-the-art infrastructure firsthand.
          </p>
          <button className="px-8 py-3 text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] hover:from-[#D53F8C] hover:to-[#6B46C1] hover:scale-105">
            Schedule a Visit <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Infrastructure;