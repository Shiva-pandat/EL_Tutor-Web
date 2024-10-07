import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Homehero from '../../components/Homehero/Homehero'
import AboutUs from '../../components/AboutUs/AboutUs'
import ChooseUs from '../../components/ChooseUs/ChooseUs'
import ContactUs from '../../components/ContactUs/ContactUs'
import AskQues from '../../components/AskQues/AskQues'
import CustomerSays from '../../components/CustomerSays/CustomerSays'



const Home = () => {
  return (
    <>
    <Navbar/>
    <Homehero/>
    <AboutUs/>
    <ChooseUs/>
    <CustomerSays/>
    <ContactUs/>
    <AskQues/>
    <Footer/>
    </>
  )
}

export default Home