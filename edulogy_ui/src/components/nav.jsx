import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { appActions } from '../actions/appActions';
import { userActions } from '../actions/userActions';
import { constants } from '../constants';

function Nav () {
  const dispatch = useDispatch();

  const user = useSelector(store => store.authentication.user);

  function handleLoginClick(){
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleLogoutClick(){
    dispatch(userActions.logout());
  }

  const buttonTitle = user ? 'Đăng xuất' : 'Đăng nhập';

  return (
    <div className="nav">
      <div className="logo">
        <a href="/trang-chu"><img src="/img/logo_trans_light.png" alt=""/></a> 
      </div>
      <div className="dropdown-container">
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
          <Link to='/dong-gop' className="dropdown-btn">Đóng góp</Link>
        </div>
        <div className="dropdown">
          <button 
            id="account-btn" 
            onClick={user ? handleLogoutClick : handleLoginClick}>
            {buttonTitle}
          </button>  
        </div>
      </div>
    </div>
  )
}

export default Nav