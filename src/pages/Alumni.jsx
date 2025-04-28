import React from 'react';
import { GraduationCap, Trophy, Users, ChevronRight, Mail } from 'lucide-react';

function Alumni() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#6B46C1] to-[#D53F8C]">
      {/* Hero Section */}
      <section id="alumni" className="pt-24 pb-12 bg-gradient-to-br from-[#2A1E5E] via-[#6B46C1] to-[#D53F8C]">
        <div className="container px-6 py-16 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:w-1/2 md:mb-0">
              <h1 className="mb-6 text-5xl font-extrabold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text">
                Alumni at Queens Academy
              </h1>
              <p className="mb-8 text-xl font-light leading-relaxed text-white">
                Join a global network of successful alumni shaping the world.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center px-8 py-3 text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] hover:from-[#D53F8C] hover:to-[#6B46C1] hover:scale-105">
                  Connect Now <ChevronRight className="ml-2" />
                </button>
                <button className="px-8 py-3 text-[#F472B6] transition duration-300 transform border-2 border-[#F472B6] rounded-full hover:bg-[#F472B6] hover:text-white hover:scale-105">
                  Register
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Alumni gathering"
                className="transition duration-500 transform shadow-2xl rounded-xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-16 bg-gradient-to-t from-[#2A1E5E] to-[#6B46C1]/50">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Alumni Achievements
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                name: 'Ravi Kumar',
                achievement: 'CEO of Tech Innovate, Forbes 30 Under 30, 2023',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              },
              {
                name: 'Sneha Desai',
                achievement: 'Award-winning Author, Published 5 Bestsellers',
                image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-[#4A2D7A] transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">{achievement.name}</h3>
                  <p className="text-[#F472B6]">{achievement.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-16 bg-gradient-to-br from-[#2A1E5E]/50 via-[#6B46C1]/30 to-[#D53F8C]/20">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Alumni Network Benefits
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Career Support',
                desc: 'Access to job opportunities and mentoring programs.',
                icon: GraduationCap,
              },
              {
                title: 'Networking Events',
                desc: 'Annual reunions and professional meetups.',
                icon: Users,
              },
              {
                title: 'Exclusive Updates',
                desc: 'Stay informed with alumni newsletters and achievements.',
                icon: Trophy,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-[#2A1E5E]/20 via-[#6B46C1]/10 to-[#D53F8C]/10 transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <benefit.icon className="w-12 h-12 mb-4 text-[#F472B6]" />
                <h3 className="mb-2 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events and Reunions */}
      <section className="py-16 bg-gradient-to-t from-[#2A1E5E] to-[#6B46C1]/50">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text text-center">
            Events & Reunions
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg text-gray-200">
              Join us for exciting alumni events and annual reunions to reconnect with your peers.
            </p>
            <ul className="space-y-4 text-gray-200">
              <li>
                <span className="font-semibold text-[#F472B6]">Annual Reunion 2025</span> - April 15, Madurai Campus
              </li>
              <li>
                <span className="font-semibold text-[#F472B6]">Virtual Networking</span> - Monthly webinars starting May
                2025
              </li>
              <li>
                <span className="font-semibold text-[#F472B6]">Alumni Awards</span> - Celebrating excellence, June 2025
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#2A1E5E]/50 via-[#6B46C1]/30 to-[#D53F8C]/20">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text">
            Stay Connected with Your Alma Mater
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Register today to join our alumni network and unlock exclusive benefits.
          </p>
          <button className="px-8 py-3 text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] hover:from-[#D53F8C] hover:to-[#6B46C1] hover:scale-105">
            Join Now <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Alumni;