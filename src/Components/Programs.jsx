import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../assets/Hero.JPG';
import logo from '../assets/DAILogo.jpg';

const Programs = () => {
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

      {/* HERO SECTION */}
      <section 
        className="relative h-[85vh] w-full flex items-center justify-center bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="mx-4 p-10 md:p-16 bg-white/80 backdrop-blur- rounded-[2rem] border border-white/30 shadow-2xl max-w-4xl text-center">
          <h1 className="text-[#2d0a50] text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight">
            Our Programs
          </h1>
          <div className="h-1 w-20 bg-[oklch(54.6%_0.245_262.881)] mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-900 text-2xl md:text-3xl leading-relaxed font-bold opacity-95 max-w-2xl mx-auto">
            Targeted initiatives designed to empower educate and elevate women and girls with disabilities.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="py-24 px-6 md:px-12 lg:px-24 w-full">
        <div className="space-y-24">
          
          {/* 1. ADVOCACY */}
          <div id="advocacy" className="w-full text-left scroll-mt-24">
            <h3 className="text-purple-700 text-3xl font-black mb-16 uppercase tracking-wider">
              Advocacy
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">
               Advocacy is the foundation upon which we challenge systemic barriers, influence policy, and transform societal attitudes.
    We approach advocacy as both a rights-based and people-centered process. We work to ensure that the voices of persons with disabilities, especially women and girls are not only heard but actively shape the decisions that affect their lives. Through targeted advocacy efforts, we push for inclusive policies, accessible services, and the recognition of disability rights as human rights.
    Our advocacy pillar focuses on influencing systems and structures, including healthcare, education, and social protection, to become more responsive and inclusive. We actively engage in national and community-level processes, contributing to conversations and actions that promote the inclusion of assistive devices, equitable healthcare access, and protection from violence and discrimination.
    We also prioritize grassroots advocacy, empowering individuals with disabilities to become self-advocates and community champions. By building their capacity, confidence, and leadership, we create a ripple effect where advocacy is driven by lived experiences and real community needs.
    Additionally, DAI uses advocacy as a tool to shift mindsets and break stigma. Through awareness campaigns, dialogues, and storytelling, we challenge harmful stereotypes and promote a society that values diversity and inclusion.
    At its core, disability advocacy at DAI is about power, voice, and representation ensuring that no one is left behind and that persons with disabilities are at the center of shaping a more inclusive future.
            </p>
          </div>

          {/* 2. SEXUAL AND REPRODUCTIVE HEALTH RIGHTS */}
          <div id="srhr" className="w-full text-left group scroll-mt-24">
            <h3 className="text-purple-700 text-3xl font-extrabold mb-6 uppercase tracking-wider">
              Sexual and Reproductive Health Rights
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8 transition-all duration-300 group-hover:border-[oklch(28.2%_0.091_267.935)]">
            We recognize that access to Sexual and Reproductive Health (SRH) is a fundamental human right. However, for persons with disabilities living in informal settlements, this right is often denied due to deeply rooted inequalities, stigma, and systemic barriers.
    Women and girls with disabilities in informal settlements face multiple and intersecting forms of discrimination as persons with disabilities, as women, and as residents of underserved communities. These overlapping challenges increase their vulnerability to Gender-Based Violence (GBV), limit access to accurate SRH information, and restrict their ability to seek and receive appropriate healthcare services.
    Many health facilities remain physically inaccessible, lack disability-friendly communication methods, and are often staffed by providers with limited training on disability inclusion. Harmful societal beliefs such as the misconception that persons with disabilities are asexual or unfit to make decisions about their own bodies further silence their voices and exclude them from SRH services.
    At DAI, we work to bridge this gap through a community-centered and rights-based approach. We conduct awareness sessions and safe space dialogues that empower women and girls with disabilities with knowledge on their Sexual and Reproductive Health Rights (SRHR), including bodily autonomy, consent, family planning, and access to services. Through peer mentorship and capacity building, we support them to become advocates for their own rights within their communities.
    We also engage in advocacy and systems strengthening, working with stakeholders to promote inclusive healthcare services that are accessible, affordable, and responsive to the needs of persons with disabilities. This includes advocating for disability-inclusive policies, training healthcare providers, and ensuring that assistive devices and support services are integrated into SRH programming.
    DAI further addresses the link between SRH and GBV by creating referral pathways and support systems for survivors of violence, ensuring that women and girls with disabilities can access justice, protection, and psychosocial support.
    Our vision is a society where persons with disabilities in informal settlements can exercise their sexual and reproductive rights freely, safely, and with dignity without discrimination, barriers, or fear.
            </p>
          </div>

          {/* 3. MENTORSHIP AND PEER LEARNING */}
          <div id="mentorship" className="w-full text-left group scroll-mt-24">
            <h3 className="text-purple-700 text-3xl font-extrabold mb-6 uppercase tracking-wider">
              Mentorship and Peer Learning
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8 transition-all duration-300 group-hover:border-[oklch(28.2%_0.091_267.935)]">
           We are grounded in our commitment to nurture confidence, inclusion, and personal growth among children and young persons with disabilities.
    At DAI, we recognize that many children with disabilities grow up facing stigma, exclusion, and limited opportunities to participate fully in school life. These experiences often affect their self-esteem and sense of belonging. Through our mentorship programs, we create safe, inclusive, and empowering spaces where children can build confidence, express themselves, and develop a strong sense of identity and self-worth.
    Our mentorship initiatives in schools focus on self-esteem building, life skills, and personal development. We support children to recognize their abilities, build resilience, and grow into confident individuals who can actively engage in their communities.
    Beyond personal development, DAI actively advocates for the inclusion of children with disabilities in extracurricular activities, recognizing that participation in sports, arts, and other co-curricular programs is essential for holistic growth, social interaction, and talent development.
    To strengthen this effort, DAI partners with organizations such as Special Olympics Kenya to promote inclusive sports and ensure that children with disabilities have equal opportunities to participate alongside their peers. Through such partnerships, children are able to build friendships, develop skills, and experience a sense of belonging within school and community environments. Inclusive sports programs are widely recognized for promoting acceptance, teamwork, and dignity among learners with and without disabilities.
    Through mentorship, DAI is shaping a generation of empowered children with disabilities who are confident, included, and equipped to explore their talents, pursue opportunities, and fully participate in society.
            </p>
          </div>

          {/* 4. ECONOMIC EMPOWERMENT */}
          <div id="economic" className="w-full text-left group scroll-mt-24">
            <h3 className="text-purple-700 text-3xl font-extrabold mb-6 uppercase tracking-wider">
              Economic Empowerment
            </h3>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8 transition-all duration-300 group-hover:border-[oklch(28.2%_0.091_267.935)]">
               We believe that financial independence is a key part of inclusion and dignity. Our economic empowerment programs are designed to equip persons with disabilities with the knowledge, skills, and confidence to manage their finances, create opportunities, and improve their livelihoods.
    Through our financial literacy training, members learn essential skills such as budgeting, saving, managing personal and business finances, understanding loans, and planning for the future. These programs are tailored to meet the unique needs of persons with disabilities, ensuring that no one is left behind due to barriers or lack of access to information.
    Beyond individual skills, DAI supports members to explore income-generating activities, small business development, and cooperative initiatives, enabling them to participate fully in the economy and contribute to their communities.
    Our economic empowerment pillar is rooted in the belief that when persons with disabilities have financial skills and opportunities, they gain not only independence but also confidence, leadership, and the ability to advocate for their rights.
    We are committed to building a society where every person, regardless of ability, can thrive economically, live with dignity, and achieve their potential.
            </p>
          </div>

        </div>
      </main>

    </div>
  );
};

export default Programs;