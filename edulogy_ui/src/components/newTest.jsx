import React from  'react';

import TestCard from '../common/testCard';
function NewTest(){
  return (
    <div className="new-test">
      <h3 className="center-text">ĐỀ THI VỪA CẬP NHẬT</h3>
      <button id="preBtn">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="nextBtn">
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="slider-container">
        <TestCard
        src="/img/ets.png"
        name={"ETS 2021 ĐỀ 1"}/>
        <TestCard
        src="/img/ets.png"
        name={"ETS 2020 ĐỀ 1"}/>
        <TestCard
        src="/img/ets.png"
        name={"ETS 2021 ĐỀ 3"}/>
        <TestCard
        src="/img/economy.png"
        name={"ECONOMY 2021 ĐỀ 1"}/>
              <TestCard
        src="/img/economy.png"
        name={"ECONOMY 2021 ĐỀ 1"}/>
      </div>
    </div>
  )
}

export default NewTest;
