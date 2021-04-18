import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Popup from '../components/popup';
import ToeicInfo from '../components/toeicInfo';

function ToeicInfoPage() {
    return (
        <React.Fragment>
            <Nav/>
            <ToeicInfo />
            <Popup/>
            <Footer/>
        </React.Fragment>
    )
}

export default ToeicInfoPage