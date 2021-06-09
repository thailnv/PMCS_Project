import React from 'react';
// import AccInfoSidebar from '../../components/accInfoSidebar';
import AllDiscussions from '../../components/allDiscussions';
import Nav from "../../common/nav";
import Footer from "../../common/footer";
import Popup from '../../components/popup';

function DiscussionsPage() {
  return (
    <React.Fragment>
      <Nav />
      <AllDiscussions />
      {/* <AccInfoSidebar /> */}
      <Popup />
      <Footer />
    </React.Fragment>
  )
}

export { DiscussionsPage };
