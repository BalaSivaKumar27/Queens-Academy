import React from 'react';
import { GraduationCap, BookOpen, Users, Trophy, ChevronRight } from 'lucide-react';

function CareerGuidance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#6B46C1] to-[#D53F8C] mb-7 mt-14">
      {/* Hero Section */}
      <section id="careerguidance" className="pt-24 pb-12  bg-gradient-to-br from-[#2A1E5E] via-[#6B46C1] to-[#D53F8C]">
        <div className="container px-6 py-16 mx-auto">
          <div className="flex flex-col items-center md:flex-row ">
            <div className="mb-8 md:w-1/2 md:mb-0 ">
              <h1 className="mb-6 text-5xl font-extrabold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text ">
                Career Guidance at Queens Academy
              </h1>
              <p className="mb-8 text-xl font-light leading-relaxed text-white">
                Empower your future with expert career advice and resources.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center px-8 py-3 text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] hover:from-[#D53F8C] hover:to-[#6B46C1] hover:scale-105">
                  Get Started <ChevronRight className="ml-2" />
                </button>
                <button className="px-8 py-3 text-[#F472B6] transition duration-300 transform border-2 border-[#F472B6] rounded-full hover:bg-[#F472B6] hover:text-white hover:scale-105">
                  Schedule a Session
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1507680469671-7cac70a2fbaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Career counseling"
                className="transition duration-500 transform shadow-2xl rounded-xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-16 bg-gradient-to-t from-[#2A1E5E] to-[#6B46C1]/50">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Career Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Resume Building',
                desc: 'Personalized assistance to craft a standout resume.',
                icon: GraduationCap,
              },
              {
                title: 'Interview Prep',
                desc: 'Mock interviews and feedback from industry experts.',
                icon: BookOpen,
              },
              {
                title: 'Job Placement',
                desc: 'Direct connections to top employers and internships.',
                icon: Trophy,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-[#2A1E5E]/20 via-[#6B46C1]/10 to-[#D53F8C]/10 transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <service.icon className="w-12 h-12 mb-4 text-[#F472B6]" />
                <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-200">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops and Training */}
      <section className="py-16 bg-gradient-to-br from-[#2A1E5E]/50 via-[#6B46C1]/30 to-[#D53F8C]/20">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Workshops & Training
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: 'Leadership Skills',
                desc: 'Enhance your leadership abilities with interactive sessions.',
                date: 'March 2025',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              },
              {
                title: 'Tech Career Bootcamp',
                desc: 'Hands-on training for IT and software development careers.',
                date: 'April 2025',
                image: 'https://images.unsplash.com/photo-1501854140801-50d038201746?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              },
            ].map((workshop, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-[#4A2D7A] transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">{workshop.title}</h3>
                  <p className="mb-2 text-[#F472B6]">{workshop.date}</p>
                  <p className="text-gray-200">{workshop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gradient-to-t from-[#2A1E5E] to-[#6B46C1]/50">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Success Metrics
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg text-gray-200">
              Our career guidance has empowered hundreds of students to achieve their goals.
            </p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center justify-center">
                <Users className="w-6 h-6 mr-2 text-[#F472B6]" />
                95% of students placed within 6 months of graduation.
              </li>
              <li className="flex items-center justify-center">
                <Trophy className="w-6 h-6 mr-2 text-[#F472B6]" />
                200+ career counseling sessions conducted in 2024.
              </li>
              <li className="flex items-center justify-center">
                <BookOpen className="w-6 h-6 mr-2 text-[#F472B6]" />
                80% increase in internship opportunities.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#2A1E5E]/50 via-[#6B46C1]/30 to-[#D53F8C]/20">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text">
            Shape Your Career Today
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Book a session with our career advisors to kickstart your journey.
          </p>
          <button className="px-8 py-3 text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] hover:from-[#D53F8C] hover:to-[#6B46C1] hover:scale-105">
            Book Now <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default CareerGuidance;