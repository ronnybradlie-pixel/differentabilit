import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/DAILogo.jpg";
import MentorshipImg from "../assets/Mentorship.jpeg";
import React from "react";
import DIWA2 from '../assets/DIWA2.jpeg';

const Mentorship = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <Link to="/"><img src={logo} alt="DAI Logo" className="h-10" /></Link>
        <Link to="/" className="font-bold text-[#2d0a50] border-2 border-[#2d0a50] px-4 py-2 rounded-full text-xs">Back Home</Link>
      </nav>

        <section className="pt-32 pb-20 px-6 md:px-24 bg-pink-50">
           <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-black text-[#2d0a50] uppercase leading-tight mb-6">Mentorship and Peer Learning</h1>
              <p className="text-xl text-gray-700 italic font-bold">Mentorship and peer learning are essential components of our approach to supporting children with disabilities.</p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={MentorshipImg} alt="Mentorship" className="rounded-2xl shadow-xl h-96 w-full object-cover" />
              </div>
             </div>
            </section>      
            

      <section className="pt-32 pb-20 px-6 md:px-24">
        <div>
            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8"> We are grounded in our commitment to nurture confidence, inclusion, and personal growth among children and young persons with disabilities.
            At DAI, we recognize that many children with disabilities grow up facing stigma, exclusion, and limited opportunities to participate fully in school life. These experiences often affect their self-esteem and sense of belonging. Through our mentorship programs, we create safe, inclusive,
            and empowering spaces where children can build confidence, express themselves, and develop a strong sense of identity and self-worth.
            Our mentorship initiatives in schools focus on self-esteem building, life skills, and personal development. </p>

            <p className="text-black text-2xl leading-relaxed font-light opacity-90 border-l-2 border-[oklch(28.2%_0.091_267.935)]/30 pl-8">We support children to recognize their abilities, build resilience, and grow into confident individuals who can actively engage in their communities.
            Beyond personal development, DAI actively advocates for the inclusion of children with disabilities in extracurricular activities, recognizing that participation in sports, arts, and other co-curricular programs is essential for holistic growth, social interaction, and talent development.
            To strengthen this effort, DAI partners with organizations such as Special Olympics Kenya to promote inclusive sports and ensure that children with disabilities have equal opportunities to participate alongside their peers. Through such partnerships, children are able to build friendships, 
            develop skills, and experience a sense of belonging within school and community environments. Inclusive sports programs are widely recognized for promoting acceptance, teamwork, and dignity among learners with and without disabilities.
            Through mentorship, DAI is shaping a generation of empowered children with disabilities who are confident, included, and equipped to explore their talents, pursue opportunities, and fully participate in society without limits.</p>

         </div> 
       </section>  
    </div>        
    );
};

export default Mentorship;