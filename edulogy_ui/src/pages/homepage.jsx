import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Popup from '../components/popup';
function HomePage(){
  return (
    <React.Fragment>
      <Nav/>
      <Banner/>
      <Popup/>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage