import React from 'react';

function TestCard(props){
  const { src, name } = props;
  return (
    <div className="test-card">
      <h4>{name}</h4>
      <p>Thời gian: 120'</p>
      <div className="img-container">
        <img src={src} alt="img"/>
      </div>
      <div className="row">
      <p>Điểm: 990 </p>
      <a href="/lam-bai">Bắt đầu</a>
      </div>

    </div>
  )
}

export default TestCard