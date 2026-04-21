import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeroImg from '../assets/hero.png';
import Covaw from '../assets/CovawLogo.png';
import Prothea from '../assets/Prothealogo.png';
import FPRJCLogo from '../assets/FPRJCLogo.png';
import WCKLogo from '../assets/WCKLogo.webp';
import belinda from '../assets/Belindamic.jpg';
import DIWA1 from '../assets/DIWA1.jpg';
import DIWA2 from '../assets/DIWA2.jpeg';
import Economic from '../assets/EconomicEmpowerment.jpeg';
import Mentorship from '../assets/Mentorship.jpeg';
import logo from '../assets/DAILogo.jpg';
import Hero from '../assets/Hero.JPG';

// ... keep all your imports at the top same as before

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#2F5A67] selection:text-black">
      
      {/* 1. NAVBAR - (Keep same as before) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center ${
        scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <img src={logo} alt="DAI Logo" className="h-25 w-25" />
        <ul className="hidden md:flex gap-8 font-bold text-white uppercase text-xs tracking-widest">
           <li className="cursor-pointer">
            <Link to="/" className="hover:text-[oklch(54.6%_0.245_262.881)] cursor-pointer transition-colors">Home</Link>
          </li>
          <li className="hover:text-[oklch(28.2%_0.091_267.935)] cursor-pointer transition-colors">
            <Link to="/Programs">Programs</Link>
          </li>
          <li className="hover:text-[oklch(28.2%_0.091_267.935)] cursor-pointer transition-colors">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-[oklch(28.2%_0.091_267.935)] cursor-pointer transition-colors">
            <Link to="/impact">DAI Impact</Link>
          </li>
          <li className="hover:text-[oklch(28.2%_0.091_267.935)] cursor-pointer transition-colors">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* 2. HERO SECTION - (Keep same as before) */}
      <section className="relative h-[85vh] w-full flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${Hero})` }}>
        <div className="mx-4 p-8 md:p-16 bg-white/70 backdrop-blur- rounded-2xl border border-white/20 shadow-1xl h-2xl w-1/2 text-center">
          <h1 className="text-[#2d0a50] text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">EMPOWERING ABILITY, BEYOND DISABILITY.</h1>
          <div className="h-1.5 w-24 bg-[#2F5A67] mx-auto my-8 rounded-full"></div>
          <p className="text-gray-800 text-xl md:text-2xl font-bold max-w-3xl mx-auto italic leading-relaxed">Supporting women and girls with disabilities to live with Dignity, Independence, and Purpose.</p>
          <div className="mt-10"><Link to="/about" className="bg-[#2d0a50] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#2F5A67] transition-all shadow-lg inline-block">Learn More</Link></div>
        </div>
      </section>

      {/* 3. ABOUT SECTION - (Keep same as before) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2"><img src={belinda} alt="About DAI" className="rounded-lg shadow-2xl" /></div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-purple-700 text-4xl font-black uppercase mb-6">About Different Ability Initiative</h2>
          <p className="text-black text-lg leading-relaxed opacity-80">Different Ability Initiative (DAI) is a grassroots organization dedicated to advancing the rights, dignity, and inclusion...</p>
        </div>
      </section>

      {/* 4. FOCUS AREAS  */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black/10">
        <h2 className="text-purple-700 text-4xl font-black uppercase mb-16 text-left">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Advocacy for Inclusion and Equality", img: DIWA1, link: "/programs#advocacy" },
            { title: "Sexual & Reproductive Health Rights", img: DIWA2, link: "/programs#srhr" },
            { title: "Mentorship & Peer Learning", img: Mentorship, link: "/programs#mentorship" },
            { title: "Economic Empowerment", img: Economic, link: "/programs#economic" }
          ].map((area, index) => (
            <div key={index} className="flex flex-col text-left group bg-white/40 p-4 rounded-xl shadow-sm">
              <div className="overflow-hidden rounded-lg mb-4 h-48">
                <img src={area.img} alt={area.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-black font-bold text-xl leading-snug mb-4">
                {area.title}
              </h3>
              {/* Added Read More Button */}
              <Link 
                to={area.link} 
                className="text-purple-700 font-black uppercase text-xs tracking-widest hover:text-[#2F5A67] transition-colors mt-auto"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. IMPACT STATS & 6. PARTNERS (Keep same as before) */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex flex-wrap justify-between gap-12 text-center bg-white">
        {[
          { label: "Women & Girls Reached", value: "156 +" },
          { label: "Community Sessions", value: "10 +" },
          { label: "Mentorship Sessions", value: "5 +" },
          { label: "Partnerships", value: "5 +" }
        ].map((stat, i) => (
          <div key={i} className="flex-1 min-w-[150px]">
            <div className="text-[oklch(28.2%_0.091_267.935)] text-5xl font-black mb-2">{stat.value}</div>
            <div className="text-[oklch(28.2%_0.091_267.935)] uppercase text-xs tracking-widest font-bold opacity-60">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-purple-700 text-4xl font-black uppercase mb-12 text-center">Our Partners</h2>
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

export default Home;