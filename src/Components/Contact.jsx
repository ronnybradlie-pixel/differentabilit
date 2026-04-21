import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DAILogo.jpg';

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 1. Setup state to capture user input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. WhatsApp Logic
  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    
    const myNumber = "254702080135"; 
    
    const text = `*New Message from DAI Website*%0A%0A` + 
                 `*Name:* ${formData.name}%0A` + 
                 `*Email:* ${formData.email}%0A` + 
                 `*Subject:* ${formData.subject}%0A` + 
                 `*Message:* ${formData.message}`;

    const waUrl = `https://wa.me/${myNumber}?text=${text}`;
    window.open(waUrl, '_blank');
  };

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

      {/* HERO HEADER */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <h1 className="text-purple-700 text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
          Get In Touch
        </h1>
        <p className="text-black text-xl font-light mt-6 max-w-2xl">
          Have questions or want to partner with us? Reach out and let's start a conversation about inclusion and empowerment.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <main className="pb-24 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Form */}
        <div className="bg-black p-8 md:p-12 rounded-3xl border border-white/10">
          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white text-xs font-bold uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2F5A67] transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-white text-xs font-bold uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="email@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2F5A67] transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-white text-xs font-bold uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                required
                placeholder="How can we help?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2F5A67] transition-all"
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-xs font-bold uppercase tracking-widest">Message</label>
              <textarea 
                rows="5" 
                required
                placeholder="Write your message here..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2F5A67] transition-all resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] flex justify-center items-center gap-2"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-12">
          <div>
            <h3 className="text-black text-3xl font-black uppercase mb-4">Our Office</h3>
            <p className="text-black text-lg font-light leading-relaxed">
              Kibera Mama Okinda drive, Nairobi Kenya<br />
              Supporting communities across the region.
            </p>
          </div>

          <div>
            <h3 className="text-black text-3xl font-black uppercase mb-4">Direct Contact</h3>
            <div className="space-y-2 text-black text-lg font-light">
              <p>Email: <span className="text-black font-bold">info@differentability.org</span></p>
              <p>Phone: <span className="text-black font-bold">+254 702 080 135</span></p>
              <p>Operation Hours: <span className="text-black font-bold">9:00 AM - 5:00 PM</span></p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Contact;