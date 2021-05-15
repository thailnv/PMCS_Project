import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Popup from '../components/popup';
import ListSkill from '../components/listSkills';
import NewTest from '../components/newTest';
function HomePage(){
  return (
    <React.Fragment>
      <Nav currentPage={"home"}/>
      <Banner/>
      <ListSkill/>
      <NewTest/>
      <Footer/>
      <Popup/>
    </React.Fragment>
  )
}

export default HomePage