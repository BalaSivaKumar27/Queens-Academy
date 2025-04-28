import React from 'react';

const Admission = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Admission</h1>
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
        <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
        <p className="mb-4">
          Welcome to our admissions page. We're excited that you're considering joining our institution.
          Our admission process is designed to be transparent and student-friendly.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Requirements</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Completed application form</li>
              <li>Academic transcripts</li>
              <li>Letters of recommendation</li>
              <li>Statement of purpose</li>
              <li>Valid ID proof</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Important Dates</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Application Opens: January 1st</li>
              <li>Early Decision Deadline: March 15th</li>
              <li>Regular Decision Deadline: May 1st</li>
              <li>Results Announcement: June 15th</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Contact Admissions Office</h3>
          <p>
            For any queries regarding the admission process, please contact us at:
            <br />
            Email: admissions@university.edu
            <br />
            Phone: (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admission;