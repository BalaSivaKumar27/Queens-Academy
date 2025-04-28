import React from 'react';
import { BookOpen, Users, Trophy, ChevronRight, Award } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container px-6 py-16 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:w-1/2 md:mb-0">
              <h1 className="mb-6 text-5xl font-extrabold text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text animate-fade-in">
                Empowering Minds, Shaping Futures
              </h1>
              <p className="mb-8 text-xl font-light leading-relaxed text-white">
                Join Queens Academy for world-class education and unlock your potential with our innovative learning programs.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center px-8 py-3 text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] hover:from-[#D53F8C] hover:to-[#6B46C1] hover:scale-105">
                  Get Started <ChevronRight className="ml-2" />
                </button>
                <button className="px-8 py-3 text-[#F472B6] transition duration-300 transform border-2 border-[#F472B6] rounded-full hover:bg-[#F472B6] hover:text-white hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Students studying" 
                className="transition duration-500 transform shadow-2xl rounded-xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Expert-Led Courses", desc: "Learn from industry professionals and experienced educators." },
              { icon: Users, title: "Small Class Sizes", desc: "Personalized attention and interactive learning environment." },
              { icon: Trophy, title: "Proven Success", desc: "High graduate employment rate and academic achievements." }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 transition duration-300 transform rounded-lg shadow-lg bg-gradient-to-br from-[#2A1E5E]/20 via-[#6B46C1]/10 to-[#D53F8C]/10 hover:shadow-xl hover:scale-105"
              >
                <feature.icon className="w-12 h-12 mb-4 text-[#F472B6]" />
                <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-200">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-white bg-gradient-to-r from-[#F472B6] to-[#9F7AEA] bg-clip-text">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Research Excellence",
                year: "2024",
                description: "50+ Research Papers Published",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Innovation Hub",
                year: "2023",
                description: "Established State-of-the-art Innovation Lab",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Global Recognition",
                year: "2024",
                description: "Top 100 Universities Worldwide",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((achievement, index) => (
              <div 
                key={index}
                className="overflow-hidden transition duration-300 transform shadow-lg bg-[#4A2D7A] rounded-xl hover:scale-105"
              >
                <img 
                  src={achievement.image}
                  alt={achievement.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <Award className="w-12 h-12 mb-4 text-[#F472B6]" />
                  <h3 className="mb-2 text-xl font-semibold text-white">{achievement.title}</h3>
                  <p className="mb-2 font-semibold text-[#F472B6]">{achievement.year}</p>
                  <p className="text-gray-200">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;