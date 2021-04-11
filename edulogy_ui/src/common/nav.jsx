import React from 'react';

function nav (props) {
  return (
    <div className="nav">
    <div className="logo">
     <a href="/trang-chu"><span>Edulogy</span> </a> 
    </div>
    <div className="dropdown-container">
      <div className="dropdown">
        <a href="/trang-chu" className="dropdown-btn">Trang chủ</a>
      </div>
      <div className="dropdown">
        <a href="/kiem-tra" className="dropdown-btn">Kiểm tra +</a>
          <div className="dropdown-list">
            <a href="/kiem-tra/de-thi-thu" className="dropdown-item">Thi thử</a>
            <a href="/kiem-tra/part-I" className="dropdown-item">Part I:  Hình ảnh</a>
            <a href="/kiem-tra/part-II" className="dropdown-item">Part II: Hỏi đáp</a>
            <a href="/kiem-tra/part-V" className="dropdown-item">Part V:  Câu không hoàn chỉnh</a>
            <a href="/kiem-tra/part-VI" className="dropdown-item">Part VI: Hoàn thành đoạn văn</a>
            <a href="/kiem-tra/part-VII" className="dropdown-item">Part VII: Đọc hiểu</a>
          </div>
      </div>
      <div className="dropdown">
        <a href="/thong-tin" className="dropdown-btn">Thông tin kỳ thi</a>
      </div>
      <div className="dropdown">
        <a href="/thao-luan" className="dropdown-btn">Thảo luận</a>
      </div>
      <div className="dropdown">
        <a href="/dong-gop" className="dropdown-btn">Đóng góp</a>
      </div>
    </div>
  </div>
  )
}

export default nav