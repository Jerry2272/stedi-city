import slide1 from '../assets/heroSilde.jpeg';
import slide2 from '../assets/heroSlide.webp';
import slide3 from '../assets/heroSlide2.jpeg';


export interface Slide {
    img: string;
    title: string;
    description: string;
    span?: string;
}

export const slideData: Slide[] = [
  {
    img: slide1,
    span: 'Trusted Expertise',
    title: 'Solutions that build sustainable growth.',
    description:
      'Stedi-City Ltd delivers integrated consulting and development services across real estate, construction, agriculture, logistics, and general services.',
  },
  {
    img: slide2,
    span: 'Build With Confidence',
    title: 'Reliable partners for projects that matter.',
    description:
      'From planning to execution, we provide professional guidance, quality delivery, and long-term value for businesses and communities.',
  },
  {
    img: slide3,
    span: 'Driven by Excellence',
    title: 'Professional solutions across multiple sectors.',
    description:
      'We combine experience, strategy, and execution to help organizations achieve efficient, compliant, and sustainable outcomes.',
  },
];

