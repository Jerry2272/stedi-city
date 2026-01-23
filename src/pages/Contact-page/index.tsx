import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import contactBg from '../../assets/stedi-city-logo.webp'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ContactPage:React.FC = () => {

  return (
   <div className="bg-[#FFF7F6]"> 
   <Navbar />

      <section
        className="h-[70vh] flex items-end pb-10 justify-start text-center px-4 lg:px-25"
        style={{
          backgroundImage: ` linear-gradient( rgba(15, 42, 68,0.49) ,rgba(15, 42, 68, 0.80)) ,url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
         
      >
        <h1 className="font-manRope font-bold text-3xl md:text-5xl lg:text-6xl text-white">
          Contact Us
        </h1>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 px-6 md:px-25 py-12 justify-center items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-[#020101] font-manRope font-semibold text-[28px] md:text-[34px]">
            Precision Begins Here. <br /> Get in Touch with Stedi City.
          </h2>
          <ul className="space-y-4">
             <li className="flex items-center gap-4 text-[#1A1423] font-manRope text-[18px]">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-[#10436b] text-white text-[18px]">
                <FaEnvelope />
              </span>
              info@stedi-city.com
            </li>
            <li className="flex items-center gap-4 text-[#1A1423] font-manRope text-[18px]">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-[#10436b] text-white text-[18px]">
                <FaEnvelope />
              </span>
              stephenedidiong8@gmail.com
            </li>
            <li className="flex items-center gap-4 text-[#1A1423] font-manRope text-[18px]">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-[#10436b] text-white text-[18px]">
                <FaPhoneAlt />
              </span>
              +234 706 207 6941 || +234 813 390 9092
              </li>
            <li className="flex items-center gap-4 text-[#1A1423] font-manRope text-[18px]">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-[#10436b] text-white text-[18px]">
                <MdLocationOn />
              </span>
             57 Woji Road, GRA phase 2 Port Harcourt.
            </li>
          </ul>
        </div>

        <form className="bg-white  p-6 rounded-xl w-full lg:w-125 space-y-5">
          <h3 className="text-[28px] font-semibold font-manRope mb-4 text-[#10436b]">Send a Message</h3>
          <div className="flex flex-col">
            <label className="text-[#1A1423] mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10436b]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#1A1423] mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email address"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10436b]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#1A1423] mb-2">Your Message</label>
            <textarea
              rows={5}
              placeholder="Type your message..."
              className="border p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#10436b]"
            ></textarea>
          </div>

          <button className="bg-[#10436b] text-white px-6 py-3 w-full rounded-md font-semibold  ">
            Send Message
          </button>
        </form>
      </section> 

      <Footer />
    </div>
  )
}

export default ContactPage