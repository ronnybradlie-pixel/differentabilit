import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DAILogo.jpg';

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  
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
    <div className="min-h-screen bg-[#2d0a50] font-sans selection:bg-[#2F5A67] selection:text-white">
      
      {/* NAVBAR */}
<nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center ${
  scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
}`}>
  <img src={logo} alt="DAI Logo" className="h-25 w-25" />
  
  <ul className="hidden md:flex gap-8 font-bold text-white uppercase text-xs tracking-widest">
    {/* Use the <Link> component and set the 'to' attribute to your route path */}
     <li className="cursor-pointer">
      <Link to="/" className="hover:text-[oklch(54.6%_0.245_262.881)] cursor-pointer transition-colors">
        Home
      </Link>
    </li>
    
    <li className="hover:text-[oklch(28.2%_0.091_267.935)] cursor-pointer transition-colors">
      <Link to="/programs">Programs</Link>
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

      {/* HERO HEADER */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <h1 className="text-[oklch(54.6%_0.245_262.881)] text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
          Get In Touch
        </h1>
        <p className="text-white/70 text-xl font-light mt-6 max-w-2xl">
          Have questions or want to partner with us? Reach out and let's start a conversation about inclusion and empowerment.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <main className="pb-24 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Form */}
        <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[oklch(54.6%_0.245_262.881)] text-xs font-bold uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2F5A67] transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[oklch(54.6%_0.245_262.881)] text-xs font-bold uppercase tracking-widest">Email</label>
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
              <label className="text-[oklch(54.6%_0.245_262.881)] text-xs font-bold uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                required
                placeholder="How can we help?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#2F5A67] transition-all"
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[oklch(54.6%_0.245_262.881)] text-xs font-bold uppercase tracking-widest">Message</label>
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
            <h3 className="text-white text-3xl font-black uppercase mb-4">Our Office</h3>
            <p className="text-white text-lg font-light leading-relaxed">
              Kibera Mama Okinda drive, Nairobi Kenya<br />
              Supporting communities across the region.
            </p>
          </div>

          <div>
            <h3 className="text-white text-3xl font-black uppercase mb-4">Direct Contact</h3>
            <div className="space-y-2 text-white text-lg font-light">
              <p>Email: <span className="text-white font-bold">info@differentability.org</span></p>
              <p>Phone: <span className="text-white font-bold">+254 702 080 135</span></p>
              <p>Operation Hours: <span className="text-white font-bold">9:00 AM - 5:00 PM</span></p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Contact;