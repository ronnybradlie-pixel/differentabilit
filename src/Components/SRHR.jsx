import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/DAILogo.jpg';
import DIWA2 from '../assets/DIWA2.jpeg';

const SRHR = () => {
    useEffect(() => {window.scrollTo(0, 0);}, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                <Link to="/"><img src={logo} alt="DAI Logo" className="h-12" /></Link>
                <Link to="/" className="font-bold text-black border-2 px-2 py-4 rounded-full text-xs uppercase hover:bg-[#2d0a50] hover:text-white transition-all">Back to Home</Link>
            </nav>

            <section className="pt-32 pb-20 px-6 md:px-24 bg-pink-50">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-black text-[#2d0a50] uppercase mb-6">Sexual and Reproductive Health Rights</h1>
                  <p className="text-xl text-gray-700 leading-relaxed font-bold">Access to Sexual and Reproductive Health is a fundamental human right for all.</p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={DIWA2} alt="SRHR" className="rounded-3xl shadow-2xl h-[400px] w-full object-cover" />
              </div>
             </div>
            </section>

            <section className="pt-32 pb-20 px-6 md:px-24">
               <p className="text-black text-2xl leading-relaxed font-light border-l-2 pl-8">We recognize that access to Sexual and Reproductive Health (SRH) is a fundamental human right. However, for persons with disabilities living in informal settlements, 
                this right is often denied due to deeply rooted inequalities, stigma, and systemic barriers.
                Women and girls with disabilities in informal settlements face multiple and intersecting forms of discrimination as persons with disabilities, as women, and as residents of underserved communities. 
                These overlapping challenges increase their vulnerability to Gender-Based Violence (GBV), limit access to accurate SRH information, and restrict their ability to seek and receive appropriate healthcare services. </p>
                <p className="text-black text-2xl leading-relaxed font-light border-l-2 pl-8">Many health facilities remain physically inaccessible, lack disability-friendly communication methods, and are often staffed by providers with limited training on disability inclusion.
                Harmful societal beliefs such as the misconception that 
                persons with disabilities are asexual or unfit to make decisions about their own bodies further silence their voices and exclude them from SRH services.
                At DAI, we work to bridge this gap through a community-centered and rights-based approach. We conduct awareness sessions and safe space dialogues that empower women and girls with disabilities with knowledge on their Sexual and Reproductive Health Rights (SRHR), 
                including bodily autonomy, consent, family planning, and access to services.
                 Through peer mentorship and capacity building, we support them to become advocates for their own rights within their communities. </p>
                <p className="text-black text-2xl leading-relaxed font-light border-l-2 pl-8"> We also engage in advocacy and systems strengthening, working with stakeholders to promote inclusive healthcare services that are accessible, affordable, and responsive to the needs of persons with disabilities. 
                This includes advocating for disability-inclusive policies, training healthcare providers, and ensuring that assistive devices and support services are integrated into SRH programming.
                DAI further addresses the link between SRH and GBV by creating referral pathways and support systems for survivors of violence, ensuring that women and girls with disabilities can access justice, protection, and psychosocial support.
                Our vision is a society where persons with disabilities in informal settlements can exercise their sexual and reproductive rights freely, safely, and with dignity without discrimination, barriers, or fear.</p>
            </section>        


        </div>
    ); 
};

export default SRHR;
    