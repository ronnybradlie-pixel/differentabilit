import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DAILogo.jpg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Branding Section */}
        <div className="space-y-6">
            <img src={logo} alt="DAI Logo" className="h-35 w-auto" />
          <p className="text-white font-light leading-relaxed max-w-xs">
            Empowering women and girls with disabilities to live with Dignity, Independence, and Purpose.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[oklch(54.6%_0.245_262.881)] font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium uppercase tracking-tighter">
            <li><Link to="/" className="hover:text-[#2F5A67] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#2F5A67] transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-[#2F5A67] transition-colors">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-[#2F5A67] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact/Location */}
        <div>
          <h4 className="text-[oklch(54.6%_0.245_262.881)] font-bold uppercase tracking-widest mb-6">Connect</h4>
          <ul className="space-y-4 text-white/70 font-light">
            <li>Nairobi, Kenya</li>
            <li>info@differentability.org</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white text-[10px] uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Different Ability Initiative
        </p>
        <p className="text-white text-[10px] uppercase tracking-[0.2em]">
          Beyond Disability
        </p>
      </div>
    </footer>
  );
};

export default Footer;