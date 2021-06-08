import React from 'react';
import Discussion from '../components/discussion';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Popup from '../components/popup';

function DiscussionDetailPage() {
  return (
    <React.Fragment>
      <Nav />
      <Discussion />
      <Popup />
      <Footer />
    </React.Fragment>
  );
}

export default DiscussionDetailPage;