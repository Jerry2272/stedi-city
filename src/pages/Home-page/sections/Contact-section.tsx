import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const ContactSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#0F2A44]/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="   rounded-2xl lg:p-10 flex flex-col gap-6">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 text-[#0F2A44]">
            Let's Talk!
          </h2>
          <p className="text-black/80 mb-6">
            Hate forms? Instead, send us an e-mail or reach out using the contact info below.
          </p>

          <div className="space-y-3"> 
          <p className=" my-2"><strong>Phone:</strong>+234 706 207 6941</p>
          <p className=""><strong>Email:</strong>info@stedi-city.com</p>
          <p className=""><strong>Email:</strong>stephenedidiong8@gmail.com</p>
            <p><strong>Address:</strong></p>
            <p>No 3 Rukpakwulusi,By Eliozu Flyover Eliozu Obio-Akpor LGA Rivers state. Port Harcourt, Nigeria</p> 
          </div>
                  <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white transition bg-[#0F2A44] p-4 rounded-[46px] shadow-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white transition bg-[#0F2A44] p-4 rounded-[46px] shadow-2xl">
              <FaInstagram/>
            </a>
            <a href="#" className=" text-white transition bg-[#0F2A44] p-4 rounded-[46px] shadow-2xl">
              <SiTiktok />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-2xl p-10 shadow-md border border-[#0F2A44] flex flex-col gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-[#0F2A44] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-[#0F2A44] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-[#0F2A44] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-[#0F2A44] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="border border-[#0F2A44] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44]"
          />
          <button
            type="submit"
            className="bg-[#0F2A44] cursor-pointer text-white font-medium px-6 py-3 rounded-lg hover:bg-[#0F2A44] transition"
          >
            Send This Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
