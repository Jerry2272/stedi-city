import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { slideData } from '../../../utils/slideData'

export const HeroSection: React.FC = () => {
  const heroSettings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fade: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
  }

  return (
    <Slider {...heroSettings}>
      {slideData.map((slide, i) => (
        <div key={i}>
          <section
            id="home"
            className="lg:h-[100vh] h-[85vh] flex items-center md:pl-[100px] pl-[16px]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(26,26,26,0.75), rgba(26,26,26,0.75)),
                url(${slide.img})
              `,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col lg:w-[700px] text-left">
              
              <span className="text-[14px] uppercase tracking-widest text-gray-300 mb-3 font-spaceGrotesk">
                {slide.span}
              </span>

              <h1 className="lg:text-[56px] text-[40px] font-[600] text-white font-spaceGrotesk lg:leading-[68px] leading-[50px] mb-4">
                {slide.title}
              </h1>

              <p className="lg:text-[20px] text-[16px] text-gray-200 font-manRope mb-10 max-w-[620px]">
                {slide.description}
              </p>

              <div className="flex gap-6">
                <a
                  href="#service"
                  className="bg-white text-navColor text-[16px] font-[500] font-manRope px-6 py-3 rounded-lg"
                >
                  Our Services
                </a>

                <Link
                  to="/contact"
                  className="bg-[#0D3B66] text-white text-[16px] font-[500] font-manRope px-6 py-3 rounded-lg"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </section>
        </div>
      ))}
    </Slider>
  )
}
