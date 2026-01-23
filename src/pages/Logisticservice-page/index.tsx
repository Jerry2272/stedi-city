import React from "react";
import heroBg from "../../assets/logistic.png";  
import bgImage from "../../assets/wave-bg.webp";
import logicticsImg from '../../assets/logistic.jpg'
import CTASection from "../Home-page/sections/CTA-section";
import { Truck, Package, Warehouse } from "lucide-react";

const processSteps = [
  {
    title: "Assess & Plan",
    description:
      "We understand delivery requirements, timelines, and supply scope.",
  },
  {
    title: "Coordinate & Dispatch",
    description:
      "Efficient coordination, routing, and logistics execution nationwide.",
  },
  {
    title: "Deliver & Support",
    description:
      "Timely delivery, tracking, and post-delivery support.",
  },
];

const services = [
  "Nationwide Goods Transportation",
  "Supply & Distribution Services",
  "Warehousing & Storage Support",
  "Procurement & Bulk Supply",
  "Fleet & Logistics Coordination",
  "Last-Mile Delivery Solutions",
];

const Logistics: React.FC = () => {
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
          Logistics & Supply
        </h1>
        <p className="text-gray-200 max-w-2xl text-lg">
          Nationwide logistics services and reliable supply of goods across multiple sectors.
        </p>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20  grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <span className="text-sm uppercase tracking-widest text-[#0D3B66] font-spaceGrotesk">
            Service Overview
          </span>

          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-[#0D3B66] font-spaceGrotesk">
            Reliable Logistics, Seamless Supply
          </h2>

          <p className="mt-6 text-gray-700 font-manRope leading-relaxed max-w-3xl">
            Stedi-City Ltd provides efficient logistics and supply services across
            Nigeria, supporting businesses, institutions, and projects with timely
            delivery and dependable coordination.
          </p>

          <p className="mt-4 text-gray-700 font-manRope leading-relaxed max-w-3xl">
            Our logistics solutions are designed to ensure smooth movement of goods,
            optimized supply chains, and operational continuity.
          </p>
        </div>
        <div>
          <img src={logicticsImg} className="rounded-xl" alt="" />
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
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-14 font-spaceGrotesk">
            Our Logistics Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="border border-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
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
                className="bg-white border border-[#0D3B66] p-8 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {idx % 3 === 0 && <Truck className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 1 && <Package className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 2 && <Warehouse className="w-10 h-10 text-[#0D3B66]" />}
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

export default Logistics;
