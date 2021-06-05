import React from 'react';
import AccInfoSidebar from '../components/accInfoSidebar';
import AllDiscussions from '../components/allDiscussions';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Popup from '../components/popup';

function DiscussionsPage() {
  return (
    <React.Fragment>
      <Nav />
      <AllDiscussions />
      <AccInfoSidebar />
      <Popup />
      <Footer />
    </React.Fragment>
  )
}

export default DiscussionsPage;
