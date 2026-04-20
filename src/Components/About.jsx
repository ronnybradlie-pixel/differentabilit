import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../assets/Hero.JPG';
import logo from '../assets/DAILogo.jpg';
import Prothea from '../assets/Prothealogo.png';
import FPRJCLogo from '../assets/FPRJCLogo.png';
import Covaw from '../assets/CovawLogo.png';
import WCKLogo from '../assets/WCKLogo.webp';
const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    "Inclusion", "Dignity", "Empowerment", "Equity", "Representation"
  ];

  return (
    <div className="min-h-screen bg-[#2d0a50] font-sans selection:bg-[#2F5A67] selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center ${
        scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <img src={logo} alt="DAI Logo" className="h-25 w-25" />
        <ul className="hidden md:flex gap-8 font-bold text-white uppercase text-xs tracking-widest">
          <li><Link to="/" className="hover:text-[#2F5A67] transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#2F5A67] transition-colors">Programs</Link></li>
          <li><Link to="/programs" className="hover:text-[#2F5A67] transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-[#2F5A67] transition-colors">Contact Us</Link></li>
        </ul>
      </nav>

      {/* 2. HERO SECTION */}
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="text-center px-4">
        </div>
      </section>

      <main className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl">
          <h2 className="text-[oklch(54.6%_0.245_262.881)] text-4xl font-black mb-10 uppercase italic">Our Foundation</h2>
          <div className="space-y-8 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">
            <p className="text-white text-xl leading-relaxed font-light opacity-90">
              Founded on the belief that disability is not inability, DAI works to break down systemic barriers, challenge stigma, and create equal opportunities for all. Our work is rooted in community engagement, advocacy, and empowerment.
            </p>
            <p className="text-white text-xl leading-relaxed font-light opacity-90">
              We create safe spaces where women and girls with disabilities can access information, build confidence, and claim their rights—particularly in Sexual and Reproductive Health Rights (SRHR) and protection from Gender-Based Violence (GBV).
            </p>
            <p className="text-white text-xl leading-relaxed font-light opacity-90">
              At DAI, we envision a society where diversity is embraced, barriers are removed, and every individual can live with dignity, independence, and purpose.
            </p>
          </div>
        </div>
      </main>

      {/* 4. VISION & MISSION CARDS */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-12 rounded-2xl border border-white/10 hover:border-[#2F5A67] transition-all">
            <h3 className="text-[oklch(54.6%_0.245_262.881)] text-3xl font-black mb-6 uppercase">Our Vision</h3>
            <p className="text-white text-lg font-light leading-relaxed">
              A society where persons with disabilities live with dignity, independence, and equal opportunity.
            </p>
          </div>
          <div className="bg-white/5 p-12 rounded-2xl border border-white/10 hover:border-[#2F5A67] transition-all">
            <h3 className="text-[oklch(54.6%_0.245_262.881)] text-3xl font-black mb-6 uppercase">Our Mission</h3>
            <p className="text-white text-lg font-light leading-relaxed">
              To empower persons with disabilities through advocacy, mentorship, and inclusive programming.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
              <h2 className="text-[oklch(28.2%_0.091_267.935)] text-4xl font-black uppercase mb-12 text-center">Our Partners</h2>
              <div className="flex flex-wrap justify-center items-center gap-16 opacity-70 transition-all">
                <img src={Prothea} alt="Prothea" className="h-16" />
                <img src={FPRJCLogo} alt="FPRJC" className="h-16" />
                <img src={Covaw} alt="Covaw" className="h-16" />
                <img src={WCKLogo} alt="WCK" className="h-16" />
              </div>
            </section>

    </div>
  );
};

export default About;