import React from "react";
import heroBg from "../../assets/agric-bg.jpg";
import bgImage from "../../assets/wave-bg.webp";
import CTASection from "../Home-page/sections/CTA-section";
import { Leaf, Factory, Truck } from "lucide-react";
import agricImg from '../../assets/agric.jpg'

const processSteps = [
  {
    title: "Assess & Plan",
    description:
      "We evaluate agricultural opportunities, land potential, market demand, and sustainability requirements.",
  },
  {
    title: "Develop & Implement",
    description:
      "We deploy practical farming, processing, and operational solutions tailored to rural and urban environments.",
  },
  {
    title: "Scale & Sustain",
    description:
      "We support growth, efficiency, and long-term sustainability across the agricultural value chain.",
  },
];

const services = [
  "Agricultural Development Projects",
  "Rural & Urban Farming Solutions",
  "Food Processing & Value Addition",
  "Agro-Supply & Distribution",
  "Farm Management & Advisory",
  "Sustainable Agriculture Services",
];

const Agricservice: React.FC = () => {
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
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white text-3xl lg:text-6xl font-bold font-spaceGrotesk mb-2">
          Agriculture & Food Services
        </h1>
        <p className="text-gray-200 max-w-2xl text-base lg:text-lg">
          Rural & urban agricultural development, food processing, and
          sustainable agro-services.
        </p>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">

          <span className="text-sm uppercase tracking-widest text-[#0D3B66] font-spaceGrotesk block mb-4">
            Sector Overview
          </span>

          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D3B66] font-spaceGrotesk mb-6">
            Agricultural Development & Food Systems
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
            Stedi-City Ltd delivers integrated agricultural solutions focused on
            productivity, food security, and sustainable value creation across
            rural and urban environments.
          </p>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Our services span farm development, food processing, supply support,
            and advisory services designed to improve efficiency, profitability,
            and long-term impact.
          </p>

        </div>
        <div>
            <img src={agricImg} className="rounded-xl" alt="" />
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
   
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl mt-4 font-semibold mb-14 font-spaceGrotesk">
            Our Agricultural Delivery Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="border border-white text-[#fff] p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
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
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-[#0D3B66]  p-8 rounded-xl shadow-sm hover:shadow-lg flex flex-col items-center justify-center text-center transition"
              >
                <div className="mb-4">
                  {idx % 3 === 0 && <Leaf className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 1 && <Factory className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 2 && <Truck className="w-10 h-10 text-[#0D3B66]" />}
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

export default Agricservice;
