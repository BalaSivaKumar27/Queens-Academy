import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
        <p className="mb-4">
          Welcome to our institution, where excellence meets innovation. Our commitment to providing quality education and fostering academic growth has made us a leading educational institution.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>To empower students with knowledge, skills, and values that enable them to become successful professionals and responsible citizens.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>To be a globally recognized institution known for academic excellence, innovative research, and holistic development of students.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;