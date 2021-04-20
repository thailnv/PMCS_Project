import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Popup from '../components/popup';
<<<<<<< Updated upstream
import ListService from '../components/listService';
=======
import SkillList from '../components/listSkills';
>>>>>>> Stashed changes
function HomePage(){
  return (
    <React.Fragment>
      <Nav/>
      <Banner/>
<<<<<<< Updated upstream
      <ListService/>
=======
      <SkillList/>
>>>>>>> Stashed changes
      <Popup/>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage