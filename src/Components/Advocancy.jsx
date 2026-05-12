import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DAILogo.jpg';
import DIWA1 from '../assets/DIWA1.jpg';

const Advocacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <Link to="/"><img src={logo} alt="DAI Logo" className="h-12" /></Link>
        <Link to="/" className="font-bold text-[#2d0a50] border-2 border-[#2d0a50] px-4 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#2d0a50] hover:text-white transition-all">Back to Home</Link>
      </nav>

      <section className="pt-32 pb-20 px-6 md:px-24 bg-purple-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-black text-[#2d0a50] uppercase mb-6">Advocacy for Inclusion</h1>
            <p className="text-xl text-gray-700 leading-relaxed font-bold">Challenging systemic barriers and influencing policy to transform societal attitudes.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={DIWA1} alt="Advocacy" className="rounded-3xl shadow-2xl h-[400px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-24 max-w-5xl mx-auto">
        <div className="border-l-4 border-purple-700 pl-8 space-y-6 text-lg md:text-xl leading-relaxed text-black opacity-90">
 <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">
               Advocacy is the foundation upon which we challenge systemic barriers, influence policy, and transform societal attitudes.
    We approach advocacy as both a rights-based and people-centered process. We work to ensure that the voices of persons with disabilities, especially women and girls are not only heard but actively shape the decisions that affect their lives. Through targeted advocacy efforts, we push for inclusive policies, accessible services, and the recognition of disability rights as human rights.
    Our advocacy pillar focuses on influencing systems and structures, including healthcare, education, and social protection, to become more responsive and inclusive. We actively engage in national and community-level processes, contributing to conversations and actions that promote the inclusion of assistive devices, equitable healthcare access, and protection from violence and discrimination.
    We also prioritize grassroots advocacy, empowering individuals with disabilities to become self-advocates and community champions. By building their capacity, confidence, and leadership, we create a ripple effect where advocacy is driven by lived experiences and real community needs.
    Additionally, DAI uses advocacy as a tool to shift mindsets and break stigma. Through awareness campaigns, dialogues, and storytelling, we challenge harmful stereotypes and promote a society that values diversity and inclusion.
    At its core, disability advocacy at DAI is about power, voice, and representation ensuring that no one is left behind and that persons with disabilities are at the center of shaping a more inclusive future.
            </p>
        </div>
      </section>
    </div>
  );
};

export default Advocacy;