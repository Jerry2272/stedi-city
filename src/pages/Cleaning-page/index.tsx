import React from "react";
import bgImage from "../../assets/wave-bg.webp";
import heroBg from '../../assets/cleaner.jpg';
import cleaningImg from '../../assets/cleaner.png'
import cleaningImg2 from '../../assets/cleaning-material.jpg'
import CTASection from "../Home-page/sections/CTA-section";
import { Leaf, Sparkles, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    title: "Assessment & Planning",
    description:
      "We evaluate site requirements, hygiene standards, and environmental needs.",
  },
  {
    title: "Cleaning & Treatment",
    description:
      "Professional execution using approved materials and safe practices.",
  },
  {
    title: "Inspection & Maintenance",
    description:
      "Quality checks, reporting, and ongoing maintenance support.",
  },
];

const services = [
  "Commercial & Office Cleaning",
  "Residential Cleaning Services",
  "Industrial & Post-Construction Cleaning",
  "Environmental Sanitation",
  "Waste Management Support",
  "Disinfection & Hygiene Services",
];

const CleaningPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="h-[65vh] flex flex-col justify-end pb-10 lg:pb-[4em] pl-6 lg:pl-14"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 59, 102,0.6), rgba(2, 1, 1, 0.85)),
            url(${heroBg})
          `,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-spaceGrotesk">
          Cleaning & Environmental
        </h1>
        <p className="text-gray-200 max-w-2xl text-lg">
          Professional cleaning and environmental services for healthy, safe, and
          productive spaces.
        </p>
        <span className="text-sm uppercase tracking-widest text-gray-300 mt-3">
          All Locations
        </span>
      </section>

      {/* ================= OVERVIEW ================= */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">

    {/* ================= TEXT CONTENT ================= */}
    <div>
      <span className="text-sm uppercase tracking-widest text-[#0D3B66] font-spaceGrotesk">
        Service Overview
      </span>

      <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-[#0D3B66] font-spaceGrotesk leading-tight">
        Clean Spaces,<br className="hidden lg:block" /> Healthy Environments
      </h2>

      <p className="mt-6 text-gray-700 font-manRope leading-relaxed max-w-xl">
        Stedi-City Ltd delivers professional cleaning and environmental services
        designed to maintain hygiene, safety, and comfort across commercial,
        residential, and industrial environments.
      </p>

      <p className="mt-4 text-gray-700 font-manRope leading-relaxed max-w-xl">
        Our approach combines trained personnel, industry best practices, and
        environmentally responsible solutions.
      </p>
    </div>

    {/* ================= IMAGE GRID ================= */}
    <div className="grid grid-cols-2 gap-3">
      <img
        src={cleaningImg}
        alt="Professional cleaning service"
        className="h-full w-full object-cover rounded-lg"
      />
      <img
        src={cleaningImg2}
        alt="Environmental cleaning solutions"
        className="h-full w-full object-cover rounded-lg"
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
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-14 font-spaceGrotesk">
            Our Cleaning Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="border border-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
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
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0D3B66] p-8 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {idx % 3 === 0 && (
                    <Sparkles className="w-10 h-10 text-[#0D3B66]" />
                  )}
                  {idx % 3 === 1 && (
                    <ShieldCheck className="w-10 h-10 text-[#0D3B66]" />
                  )}
                  {idx % 3 === 2 && (
                    <Leaf className="w-10 h-10 text-[#0D3B66]" />
                  )}
                </div>

                <h3 className="text-lg font-medium text-[#0D3B66]">
                  {service}
                </h3>
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

export default CleaningPage;
