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

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#2F5A67] selection:text-black">
      
 {/* 1. NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center ${
        scrolled || isMenuOpen ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'
      }`}>
        <img src={logo} alt="DAI Logo" className="h-16 w-auto" />

        {/* DESKTOP LINKS (Hidden on mobile) */}
        <ul className={`hidden md:flex gap-8 font-bold uppercase text-xs tracking-widest ${
          scrolled || isMenuOpen ? 'text-gray-900' : 'text-white'
        }`}>
          <li><Link to="/" className="hover:text-[#2F5A67] transition-colors">Home</Link></li>
          <li><Link to="/programs" className="hover:text-[#2F5A67] transition-colors">Programs</Link></li>
          <li><Link to="/about" className="hover:text-[#2F5A67] transition-colors">About Us</Link></li>
          <li><Link to="/impact" className="hover:text-[#2F5A67] transition-colors">DAI Impact</Link></li>
          <li><Link to="/contact" className="hover:text-[#2F5A67] transition-colors">Contact Us</Link></li>
        </ul>

        {/* HAMBURGER BUTTON (Visible only on mobile) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 focus:outline-none"
        >
          <div className={`w-8 h-1 bg-[#2d0a50] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-8 h-1 bg-[#2d0a50] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-1 bg-[#2d0a50] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </button>

        {/* MOBILE DROPDOWN MENU */}
        <div className={`absolute top-0 left-0 w-full bg-white shadow-2xl transition-all duration-500 md:hidden overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <ul className="flex flex-col items-center justify-center h-screen gap-10 font-black uppercase text-xl tracking-widest text-[#2d0a50]">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/impact" onClick={() => setIsMenuOpen(false)}>DAI Impact</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${Hero})` }}>
        <div className="mx-4 p-8 md:p-16 bg-white/70 backdrop-blur- rounded-2xl border border-white/20 shadow-1xl h-2xl w-1/2 text-center">
          <h1 className="text-[#2d0a50] text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">EMPOWERING ABILITY, BEYOND DISABILITY.</h1>
          <div className="h-1.5 w-24 bg-[#2F5A67] mx-auto my-8 rounded-full"></div>
          <p className="text-gray-800 text-xl md:text-2xl font-bold max-w-3xl mx-auto italic leading-relaxed">Supporting women and girls with disabilities to live with Dignity, Independence, and Purpose.</p>
          <div className="mt-10"><Link to="/about" className="bg-[#2d0a50] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#2F5A67] transition-all shadow-lg inline-block">Learn More</Link></div>
        </div>
      </section>

      {/* 3. ABOUT SECTION  */}
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

      {/* 5. IMPACT STATS & 6. PARTNERS */}
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