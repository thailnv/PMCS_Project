import React from 'react';

function TestCard(props) {
  return (
    <div className="test_card">
      <div className="card_container">
        <div className="img_container">
          <img src={props.img} alt="" />
        </div>
        <div className="name">Luyện nghe TOEIC part 2: HỘI THOẠI</div>
        <div className="time">Thời gian: 30'</div>
      </div>
    </div>
  )
}

export default TestCard