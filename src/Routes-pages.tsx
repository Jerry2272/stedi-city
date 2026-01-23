import React from 'react'
import { Route, BrowserRouter  as Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home-page'
import AboutPage from './pages/About-page'
import ContactPage from './pages/Contact-page'
import { PageLayout } from './layout/PageLayout'
import RealEstate from './pages/Realestate-page'
import Consulting from './pages/Consulting'
import Agricservice from './pages/Agricservice-page'
import Logistics from './pages/Logisticservice-page'
import CleaningPage from './pages/Cleaning-page'
import ManufacturingPage from './pages/Manufacturing-page'

export const RoutesPage:React.FC = () => {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<PageLayout />}>
          <Route path="real-estate" element={<RealEstate  />} />
          <Route path="consulting" element={<Consulting   />} />
          <Route path="agriculture" element={<Agricservice   />} />
          <Route path="logistics" element={<Logistics   />} />
          <Route path="cleaning" element={<CleaningPage   />} />
          <Route path="manufacturing" element={<ManufacturingPage   />} />
        </Route>
    </Routes>
   </Router>
  )
}
