import React from 'react';
import Discussion from '../../components/discussion';
import Nav from "../../common/nav";
import Footer from "../../common/footer";
import Popup from '../../components/popup';

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

export { DiscussionDetailPage };