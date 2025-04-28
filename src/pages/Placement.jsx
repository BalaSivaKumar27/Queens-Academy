import React from 'react';
import { Building2, Trophy, BarChart3, Users } from 'lucide-react';

const Placements = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-7 mt-14">Placements</h1>

      {/* Statistics */}
      <div className="grid gap-6 mb-12 md:grid-cols-4">
        {[
          { icon: Building2, title: "Companies Visited", value: "150+" },
          { icon: Trophy, title: "Highest Package", value: "₹42 LPA" },
          { icon: BarChart3, title: "Average Package", value: "₹12 LPA" },
          { icon: Users, title: "Students Placed", value: "95%" }
        ].map((stat, index) => (
          <div key={index} className="p-6 text-center text-white bg-white/10 backdrop-blur-lg rounded-xl">
            <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#F472B6]" />
            <h2 className="mb-2 text-xl font-semibold">{stat.title}</h2>
            <p className="text-3xl font-bold text-[#F472B6]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Top Recruiters */}
      <div className="p-6 mb-12 text-white bg-white/10 backdrop-blur-lg rounded-xl">
        <h2 className="mb-6 text-2xl font-semibold">Top Recruiters</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Tech Giants",
              companies: ["Google", "Microsoft", "Amazon", "Apple"]
            },
            {
              name: "Financial Sector",
              companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Deutsche Bank"]
            },
            {
              name: "Product Companies",
              companies: ["Adobe", "Salesforce", "Oracle", "SAP"]
            }
          ].map((sector, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/5">
              <h3 className="text-xl font-semibold mb-3 text-[#F472B6]">{sector.name}</h3>
              <ul className="space-y-2">
                {sector.companies.map((company, idx) => (
                  <li key={idx} className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Placement Process */}
      <div className="p-6 text-white bg-white/10 backdrop-blur-lg rounded-xl">
        <h2 className="mb-6 text-2xl font-semibold">Placement Process</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Pre-Placement</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">1</div>
                Resume Building Workshops
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">2</div>
                Mock Interviews
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">3</div>
                Technical Training
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">4</div>
                Soft Skills Development
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Selection Process</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">1</div>
                Online Aptitude Test
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">2</div>
                Technical Rounds
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">3</div>
                HR Interview
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#F472B6] flex items-center justify-center mr-3">4</div>
                Final Selection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;