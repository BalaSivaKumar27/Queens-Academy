import React from 'react';
import { BookOpen, GraduationCap, Users, Clock } from 'lucide-react';

const Academics = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-7 mt-14">Academic Programs</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Undergraduate Programs */}
        <div className="p-6 text-white bg-white/10 backdrop-blur-lg rounded-xl">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-semibold">Undergraduate</h2>
          </div>
          <ul className="space-y-3">
            <li>• Computer Science Engineering</li>
            <li>• Electronics & Communication</li>
            <li>• Mechanical Engineering</li>
            <li>• Civil Engineering</li>
          </ul>
        </div>

        {/* Postgraduate Programs */}
        <div className="p-6 text-white bg-white/10 backdrop-blur-lg rounded-xl">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-semibold">Postgraduate</h2>
          </div>
          <ul className="space-y-3">
            <li>• M.Tech in AI & ML</li>
            <li>• M.Tech in Data Science</li>
            <li>• M.Tech in Robotics</li>
            <li>• MBA in Technology</li>
          </ul>
        </div>

        {/* Doctoral Programs */}
        <div className="p-6 text-white bg-white/10 backdrop-blur-lg rounded-xl">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-semibold">Doctoral Programs</h2>
          </div>
          <ul className="space-y-3">
            <li>• Ph.D. in Engineering</li>
            <li>• Ph.D. in Sciences</li>
            <li>• Ph.D. in Management</li>
          </ul>
        </div>
      </div>

      {/* Academic Calendar Section */}
      <div className="p-6 mt-12 text-white bg-white/10 backdrop-blur-lg rounded-xl">
        <div className="flex items-center mb-6">
          <Clock className="w-8 h-8 mr-3" />
          <h2 className="text-2xl font-semibold">Academic Calendar</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Fall Semester</h3>
            <ul className="space-y-2">
              <li>• Classes Begin: August 1st</li>
              <li>• Mid-term Exams: September 15-25</li>
              <li>• Final Exams: December 1-15</li>
              <li>• Winter Break: December 16-31</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Spring Semester</h3>
            <ul className="space-y-2">
              <li>• Classes Begin: January 2nd</li>
              <li>• Mid-term Exams: February 15-25</li>
              <li>• Final Exams: May 1-15</li>
              <li>• Summer Break: May 16-July 31</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;