import React from "react";

import TestCard from "../../../components/card/testCard";

export default function HomeSection(props) {
  return (
    <React.Fragment>
      <div className="home_section">
        <div className="section_container">
          <TestCard img="/img/hqdefault.jpg" />
          <TestCard img="/img/testbn.jpg" />
          <TestCard img="/img/testbn1.png" />
          <TestCard img="/img/p2bn.png" />
          <TestCard img="/img/testbn.jpg" />
        </div>
      </div>
    </React.Fragment>
  )
}