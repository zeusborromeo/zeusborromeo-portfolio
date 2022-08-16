import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, this is Zeus Borromeo, an experienced Vendor Support Analyst with a versatile background in IT and data programming.
As a Vendor Support analyst, Working on one of the Biggest Financial Institution in the Philippines . I am technically skilled (e.g. PL/SQL) and have good communication skills to collaborate with the stakeholders of the project that we are supporting .
As a member of a project, I prided myself on being hardworking and diligent with a strong determination to get the job done on time. I am sure that if you hire me, I will aide you in successfully completing a project with minimal effort from your side.
Best Regards,
Zeus
        </p>

     
      </div>
    </div>
  );
};

export default About;
