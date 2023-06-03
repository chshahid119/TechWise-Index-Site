import React from 'react'
import Common from './Common' 
import web from "../src/images/home.png";

const Home = () => {
  return (
    <>
     <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/services"
        btnname="Get Started"
      />
    </>
  )
}

export default Home
