import React from 'react';
import { FlaskRound as Flask, Brain, Microscope, Atom } from 'lucide-react';

const Research = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-7 mt-14">Research & Innovation</h1>

      {/* Research Centers */}
      <div className="grid gap-8 mb-12 md:grid-cols-2">
        <div className="p-6 text-white bg-white/10 backdrop-blur-lg rounded-xl">
          <div className="flex items-center mb-4">
            <Brain className="w-8 h-8 mr-3 text-[#F472B6]" />
            <h2 className="text-2xl font-semibold">Center for AI & Machine Learning</h2>
          </div>
          <p className="mb-4">Pioneering research in artificial intelligence, deep learning, and cognitive computing systems.</p>
          <ul className="space-y-2">
            <li>• Neural Network Architecture</li>
            <li>• Natural Language Processing</li>
            <li>• Computer Vision Research</li>
          </ul>
        </div>

        <div className="p-6 text-white bg-white/10 backdrop-blur-lg rounded-xl">
          <div className="flex items-center mb-4">
            <Atom className="w-8 h-8 mr-3 text-[#F472B6]" />
            <h2 className="text-2xl font-semibold">Nanotechnology Research Lab</h2>
          </div>
          <p className="mb-4">Advanced research in nanomaterials and their applications in various fields.</p>
          <ul className="space-y-2">
            <li>• Quantum Computing</li>
            <li>• Nanoelectronics</li>
            <li>• Material Science</li>
          </ul>
        </div>
      </div>

      {/* Current Projects */}
      <div className="p-6 mb-12 text-white bg-white/10 backdrop-blur-lg rounded-xl">
        <div className="flex items-center mb-6">
          <Flask className="w-8 h-8 mr-3 text-[#F472B6]" />
          <h2 className="text-2xl font-semibold">Current Research Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Smart City Development",
              description: "Developing IoT solutions for urban infrastructure management",
              status: "Ongoing",
              funding: "$2.5M"
            },
            {
              title: "Renewable Energy Systems",
              description: "Research on efficient solar cell technology",
              status: "Phase 2",
              funding: "$1.8M"
            },
            {
              title: "Healthcare AI",
              description: "AI-powered diagnostic tools development",
              status: "Initial Phase",
              funding: "$3.2M"
            },
            {
              title: "Quantum Computing",
              description: "Research on quantum algorithms and applications",
              status: "Advanced Stage",
              funding: "$4.5M"
            }
          ].map((project, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/5">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-2 text-gray-300">{project.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-[#F472B6]">Status: {project.status}</span>
                <span className="text-[#F472B6]">Funding: {project.funding}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Publications */}
      <div className="p-6 text-white bg-white/10 backdrop-blur-lg rounded-xl">
        <div className="flex items-center mb-6">
          <Microscope className="w-8 h-8 mr-3 text-[#F472B6]" />
          <h2 className="text-2xl font-semibold">Recent Publications</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "Advances in Quantum Computing Architecture",
              authors: "Dr. Smith, Dr. Johnson et al.",
              journal: "International Journal of Quantum Computing",
              year: "2024"
            },
            {
              title: "Neural Networks in Autonomous Systems",
              authors: "Dr. Williams, Prof. Davis et al.",
              journal: "AI Research Quarterly",
              year: "2024"
            },
            {
              title: "Sustainable Energy Solutions",
              authors: "Prof. Brown, Dr. Miller et al.",
              journal: "Renewable Energy Journal",
              year: "2023"
            }
          ].map((publication, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/5">
              <h3 className="mb-1 text-lg font-semibold">{publication.title}</h3>
              <p className="text-sm text-gray-300">{publication.authors}</p>
              <p className="text-sm text-[#F472B6]">{publication.journal}, {publication.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;