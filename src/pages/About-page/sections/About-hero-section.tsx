import React from 'react'
import bg from '../../../assets/about-bg.png'

const AboutHeroSection: React.FC = () => {
  return (
    <section
      className="h-[65vh] flex items-end pb-10 lg:pb-[4em] pl-6 lg:pl-14"
      style={{
        backgroundImage: `
           linear-gradient( rgba(15, 42, 68,0.49) ,rgba(15, 42, 68, 0.80)),
          url(${bg})
        `,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-white text-3xl lg:text-6xl font-semibold font-spaceGrotesk">
        About Stedi-City Limited
      </h1>
    </section>
  )
}

export default AboutHeroSection
