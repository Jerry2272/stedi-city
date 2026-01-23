import React from "react";
import heroBg from "../../assets/BusinessConsulting.jpeg";
import consultingImg from "../../assets/consulting.webp"; // Replace with consulting-related image
import bgImage from "../../assets/wave-bg.webp";
import CTASection from "../Home-page/sections/CTA-section";
import { Building2, HardHat, Briefcase } from "lucide-react";

const processSteps = [
  {
    title: "Assess & Strategize",
    description:
      "We analyze your business goals and challenges to define actionable strategies.",
  },
  {
    title: "Plan & Advise",
    description:
      "We create clear plans and provide expert advice to drive performance.",
  },
  {
    title: "Execute & Support",
    description:
      "We assist in implementation and track results to ensure success.",
  },
];

const services = [
  "Business Strategy Development",
  "Market Research & Analysis",
  "Sales Representation",
  "Commission Agency Services",
  "Operational Efficiency Consulting",
  "Project Management Support",
];

const Consulting: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="h-[65vh] relative flex flex-col justify-end pb-10 lg:pb-[4em] pl-6 lg:pl-14"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 59, 102,0.6), rgba(2, 1, 1, 0.85)),
            url(${heroBg})
          `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-spaceGrotesk">
          Business & Consulting
        </h1>
        <p className="text-gray-200 max-w-2xl text-lg md:text-xl">
          Professional consulting solutions to help businesses grow strategically and operate efficiently.
        </p>
      </section>

      {/* ================= COMPANY OVERVIEW / EXPERTISE ================= */}
      <section className="py-20 flex justify-center items-center">
        <div className="  mx-auto grid lg:grid-cols-2  grid-cols-1 justify-center items-center gap-16 relative">
          {/* Text */} 
        
            <div className= "space-y-6 max-w-6xl px-10 lg:px-16">
            <span className="text-sm uppercase tracking-widest text-[#0D3B66] font-spaceGrotesk">
              Our Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D3B66] font-spaceGrotesk">
              Professional Consulting Solutions
            </h2>
            <p className="text-gray-700 font-manRope leading-relaxed">
              Stedi-City Ltd provides professional consulting, advisory, and sales representation services to help organizations achieve measurable growth and operational excellence.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Business Strategy & Planning</li>
              <li>Market Research & Insights</li>
              <li>Operational Efficiency Consulting</li>
              <li>Sales Representation & Commission Services</li>
            </ul>
           
          </div>
           {/* Image */}
          <div className="">
            <img
              src={consultingImg}
              alt="Consulting services"
              className="rounded-xl"
            />
          </div>
            

         
        </div>

        
      </section>

      {/* ================= PROCESS ================= */} 


       <section className="py-24 bg-white text-white relative" 
     style={
        {
            backgroundImage: `url(${bgImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        }
      }
    >
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative ">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-14 font-spaceGrotesk">
            Our Consulting Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="border border-white  text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      <div
          className="absolute inset-0 bg-[#0D3B66]"
          style={{ mixBlendMode: "color" }}
        />
    </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D3B66] mb-12 font-spaceGrotesk">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0D3B66] p-8 rounded-xl shadow-sm flex flex-col items-center justify-center text-center h-full transition duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  {idx % 3 === 0 && <Building2 className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 1 && <HardHat className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 2 && <Briefcase className="w-10 h-10 text-[#0D3B66]" />}
                </div>
                <h3 className="text-lg font-medium text-[#0D3B66]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* ================= CTA ================= */}
      <CTASection />
    </div>
  );
};

export default Consulting;
