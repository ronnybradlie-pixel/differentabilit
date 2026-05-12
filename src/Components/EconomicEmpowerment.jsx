import { use, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/DAILogo.jpg";
import Economic from "../assets/EconomicEmpowerment.jpeg";

const EconomicEmpowerment = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <Link to="/"><img src={logo} alt="DAI Logo" className="h-12" /></Link>
        <Link to="/" className="font-bold text-[#2d0a50] border-2 border-[#2d0a50] px-4 py-2 rounded-full text-xs">Back Home</Link>
      </nav>

      <section className="pt-32 pb-20 px-6 md:px-24 bg-pink-50">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-black text-[#2d0a50] uppercase leading-tight mb-8">Economic Empowerment</h1>
            <p className="text-xl font-bold text-gray-700 italic">Financial independence is a key part of inclusion and dignity.</p>
          </div>
          <div className="md:w-1/2">
            <img src={Economic} alt="Economic" className="rounded-2xl shadow-xl h-96 w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="pt-32 pb-20 px-6 md:px-24 ">
        <div>
          <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">We believe that financial independence is a key part of inclusion and dignity. Our economic empowerment programs are designed to equip persons with disabilities 
            with the knowledge, skills, and confidence to manage their finances, create opportunities, and improve their livelihoods.
            Through our financial literacy training, members learn essential skills such as budgeting, saving, managing personal and business finances, understanding loans, 
            and planning for the future. These programs are tailored to meet the unique needs of persons with disabilities, ensuring that no one is left behind due to barriers or lack of access to information.</p>
          <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">Beyond individual skills, DAI supports members to explore income-generating activities, small business development, and cooperative initiatives, enabling them to participate fully in the economy and contribute to their communities.
            Our economic empowerment pillar is rooted in the belief that when persons with disabilities have financial skills and opportunities, they gain not only independence but also confidence, leadership, and the ability to advocate for their rights.
            We are committed to building a society where every person, regardless of ability, can thrive economically, live with dignity, and achieve their potential.</p>
        </div>
      </section>
    </div>
  );
};

export default EconomicEmpowerment;