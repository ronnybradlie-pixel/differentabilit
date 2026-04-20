import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DAILogo.jpg';
import HeroImg from '../assets/Hero.JPG'; 

const Impact = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-white selection:text-purple-700">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center ${
        scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <img src={logo} alt="DAI Logo" className="h-16 w-auto" />
        <ul className="hidden md:flex gap-8 font-bold text-white uppercase text-xs tracking-widest">
          <li><Link to="/" className="hover:text-[#2F5A67] transition-colors">Home</Link></li>
          <li><Link to="/programs" className="hover:text-[#2F5A67] transition-colors">Programs</Link></li>
          <li><Link to="/about" className="hover:text-[#2F5A67] transition-colors">About Us</Link></li>
          <li><Link to="/impact" className="text-[#2F5A67] border-b-2 border-[#2F5A67]">DAI Impact</Link></li>
          <li><Link to="/contact" className="hover:text-[#2F5A67] transition-colors">Contact Us</Link></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
<section 
  className="relative h-[85vh] w-full flex items-center justify-center bg-fixed bg-center bg-cover" 
  style={{ backgroundImage: `url(${HeroImg})` }}
>
  {/* The Translucent Card Container */}
  <div className="mx-4 p-10 md:p-20 bg-white/80 backdrop-blur- rounded-[3rem] border border-white/40 shadow-2xl max-w-5xl text-center">
    
    {/* Page Title */}
    <h1 className="text-[#2d0a50] text-6xl md:text-4xl font-black tracking-tighter uppercase italic leading-none">
      Our Impact
    </h1>
    
    {/* Subtle high-contrast divider */}
    <div className="h-2 w-32 bg-[#2F5A67] mx-auto my-8 rounded-full"></div>
    
    {/* Mission Statement with bold text for readability */}
    <p className="text-black text-xl md:text-3xl font-bold tracking-tight uppercase opacity-95 leading-relaxed">
      Transforming lives through Mobility & Inclusion.
    </p>

    {/* Secondary support text */}
    <p className="mt-6 text-black text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
      Empowering over 350 individuals across Nairobi with the tools for independence.
    </p>

  </div>
</section>

      {/* MAIN CONTENT */}
      <main className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* TOP INTRO */}
          <div className="mb-20">
            <h2 className="text-purple-700 text-4xl font-black mb-8 uppercase italic">Assistive Devices & Mobility</h2>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">
              At Different Ability Initiative, we are dedicated to promoting access to assistive devices as a pathway to inclusion, independence, and dignity for persons with disabilities. In many underserved communities, the lack of mobility aids and supportive equipment continues to limit opportunities for education, livelihoods, and full participation in society.
            </p>
          </div>


          {/* PARTNERSHIP & OUTREACH TEXT */}
          <div className="space-y-12">
            <div className="bg-[#2F5A67]/10 p-12 rounded-3xl border border-[#2F5A67]/20">
              <h3 className="text-purple-700 text-3xl font-bold mb-6 italic">Community Outreach Initiative</h3>
              <p className="text-black text-xl font-light leading-relaxed">
                To address this gap, we partnered with other disability-focused organizations to support a community outreach initiative aimed at increasing access to assistive devices and rehabilitation services. 
              </p>
              <p className="text-black/80 text-xl font-light leading-relaxed mt-6">
                As part of this effort, we played a key role in community mobilization, successfully reaching and coordinating **350 individuals** who went on to benefit from the program. This initiative not only enhanced mobility and quality of life for beneficiaries but also strengthened community awareness on the importance of accessible and inclusive support systems.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Impact;