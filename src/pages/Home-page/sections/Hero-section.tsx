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
            className="h-screen  flex items-end pb-14 md:pl-25 pl-4"
            style={{
              backgroundImage: `
                linear-gradient( rgba(15, 42, 68,0.49) ,rgba(15, 42, 68, 0.80)),
                url(${slide.img})
              `,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col lg:w-175 lg:text-left text-center">
              
              <span className="text-[14px] uppercase tracking-widest text-white mb-3 font-spaceGrotesk">
                {slide.span}
              </span>

              <h1 className="lg:text-[56px]  text-[40px] font-semibold text-white font-spaceGrotesk lg:leading-17 leading-12.5 mb-4 select-text">
                {slide.title}
              </h1>

              <p className="lg:text-[20px] text-[16px] text-white/85 font-manRope mb-10 max-w-155 select-text">
                {slide.description}
              </p>

              <div className="flex lg:flex-row flex-col gap-6 p-4">
                  <Link
                  to="/contact"
                  className="border border-white text-white text-center text-[16px] font-bold font-manRope  py-3 rounded-[46px] px-10"
                >
                  Our Service
                </Link>
                <a
                  href="#service"
                  className="bg-white text-center text-[#0F2A44] text-[16px] font-bold font-manRope px-6 py-3 rounded-[46px]"
                >
                 Request a Consultation
                </a>

              
              </div>

            </div>
          </section>
        </div>
      ))}
    </Slider>
  )
}
