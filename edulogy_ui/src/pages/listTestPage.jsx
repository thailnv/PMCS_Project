import React from 'react';

import Nav from '../common/nav';
import Popup from "../components/popup";

export default function ListTestPage() {
  return (
    <div className="list-test-page">
      <Nav currentPage={"list-test"} />
      <Popup />
    </div>
  )
}