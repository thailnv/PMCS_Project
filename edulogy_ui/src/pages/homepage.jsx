import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Popup from '../components/popup';
import ListService from '../components/listService';
import AccInfoSidebar from '../components/accInfoSidebar';
function HomePage(){
  return (
    <React.Fragment>
      <Nav/>
      <Banner/>
      <ListService/>
      <AccInfoSidebar/>
      <Popup/>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage