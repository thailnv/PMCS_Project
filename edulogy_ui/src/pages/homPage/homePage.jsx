import React from 'react';
import Nav from '../../common/nav';
import Footer from '../../common/footer';
import Banner from '../../common/banner';
import Popup from '../../components/popup';
import ListSkill from './child/listSkills';
import HomeSection from "./child/homeSection";

function HomePage() {
  return (
    <React.Fragment>
      <Nav currentPage={"home"} />
      <div className="home">
        <div className="main-view">
          <Banner />
          <ListSkill />
          <div className="row">
            <span>LUYỆN THI TOEIC MIỄN PHÍ</span>
            <div className="flex">
              <button>Level 250 - 500</button>
              <button>Level 500 - 750</button>
              <button>Level 750 - 990</button>
            </div>
          </div>
          <HomeSection />
        </div>
      </div>
      <Footer />
      <Popup />
    </React.Fragment >
  )
}

export { HomePage }