import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../assets/Hero.JPG';
import logo from '../assets/DAILogo.jpg';

const Programs = () => {
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
      
      {/* GLOBAL NAVBAR */}
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

      {/* HERO SECTION */}
      <section 
        className="relative h-[85vh] w-full flex items-center justify-center bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="text-center px-4">
          <p className="text-[oklch(54.6%_0.245_262.881)] text-3xl leading-relaxed font-bold opacity-90 mt-8 max-w-2xl mx-auto">
            Targeted initiatives designed to empower, educate, and elevate women and girls with disabilities.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="py-24 px-6 md:px-12 lg:px-24 w-full">
        <div className="space-y-24">
          
          {/* 1. ADVOCACY */}
          <div className="w-full text-left">
            <h3 className="text-purple-700 text-3xl font-black mb-16 uppercase tracking-wider">
              Advocacy
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">
              Advocacy is the foundation upon which we challenge systemic barriers, influence policy, and transform societal attitudes.
              We approach advocacy as both a rights-based and people-centered process. We work to ensure that the voices of persons with disabilities, especially women and girls are not only heard but actively shape the decisions that affect their lives.
              Through targeted advocacy efforts, we push for inclusive policies, accessible services, and the recognition of disability rights as human rights.
              Our advocacy pillar focuses on influencing systems and structures, including healthcare, education, and social protection, to become more responsive and inclusive.
            </p>
          </div>

          {/* 2. SEXUAL AND REPRODUCTIVE HEALTH RIGHTS */}
          <div className="w-full text-left group">
            <h3 className="text-purple-700 text-3xl font-extrabold mb-6 uppercase tracking-wider">
              Sexual and Reproductive Health Rights
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8 transition-all duration-300 group-hover:border-[oklch(28.2%_0.091_267.935)]">
              We recognize that access to Sexual and Reproductive Health (SRH) is a fundamental human right. However, for persons with disabilities living in informal settlements, this right is often denied due to deeply rooted inequalities, stigma, and systemic barriers.
              Women and girls with disabilities in informal settlements face multiple and intersecting forms of discrimination as persons with disabilities, as women, and as residents of underserved communities.
              At DAI, we work to bridge this gap through a community-centered and rights-based approach, creating safe space dialogues that empower women and girls with knowledge on bodily autonomy, consent, and family planning.
            </p>
          </div>

          {/* 3. MENTORSHIP AND PEER LEARNING */}
          <div className="w-full text-left group">
            <h3 className="text-purple-700 text-3xl font-extrabold mb-6 uppercase tracking-wider">
              Mentorship and Peer Learning
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8 transition-all duration-300 group-hover:border-[oklch(28.2%_0.091_267.935)]">
              We are grounded in our commitment to nurture confidence, inclusion, and personal growth among children and young persons with disabilities.
              At DAI, we recognize that many children grow up facing stigma and exclusion. Through our mentorship programs, we create safe, inclusive, and empowering spaces where children can build confidence, express themselves, and develop a strong sense of identity and self-worth.
              We actively advocate for the inclusion of children with disabilities in extracurricular activities, recognizing that participation in sports and arts is essential for holistic growth.
            </p>
          </div>

          {/* 4. ECONOMIC EMPOWERMENT */}
          <div className="w-full text-left group">
            <h3 className="text-purple-700 text-3xl font-extrabold mb-6 uppercase tracking-wider">
              Economic Empowerment
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8 transition-all duration-300 group-hover:border-[oklch(28.2%_0.091_267.935)]">
              We believe that financial independence is a key part of inclusion and dignity. Our economic empowerment programs are designed to equip persons with disabilities with the knowledge, skills, and confidence to manage their finances and improve their livelihoods.
              Through our financial literacy training, members learn essential skills such as budgeting, saving, and managing business finances. 
              Our economic empowerment pillar is rooted in the belief that when persons with disabilities have financial skills, they gain independence, leadership, and the ability to advocate for their rights.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Programs;