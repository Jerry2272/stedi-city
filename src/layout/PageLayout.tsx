import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const PageLayout:React.FC = () => {
  return (
    <section>
        <Navbar />
        <Outlet />
        <Footer />
    </section>
  )
}
