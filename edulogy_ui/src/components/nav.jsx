import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import { appActions } from '../actions/appActions';
import { userActions } from '../actions/userActions';
import { constants } from '../constants';

function Nav (props) {
  const dispatch = useDispatch();

  const user = useSelector(store => store.authentication.user);

  function handleLoginClick(){
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleLogoutClick(){
    dispatch(userActions.logout());
  }

  const buttonTitle = user ? 'Thông tin tài khoản' : 'Đăng nhập';

  let navStyle = {
    background : {},
    logo : "/img/logo_trans_light.png",
    btnColor : ""
  };

  console.log(window.location.href);

  if(props.currentPage !== "home"){
    navStyle = {
      background : {background : "url('/img/banner-bg.jpg') bottom"},
      logo : "/img/logo_trans.png",
      btnColor : " black-color"
    }
  }

  return (
    <div className="nav" style={navStyle.background}>
      <div className="logo">
        <Link to="/"><img src={navStyle.logo} alt=""/></Link> 
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <Link to="/kiem-tra" className={"dropdown-btn" + navStyle.btnColor}>Kiểm tra +</Link>
          <div className="dropdown-list">
            <Link to="/kiem-tra/de-thi-thu" className="dropdown-item">Thi thử</Link>
            <Link to="/kiem-tra/part-I" className="dropdown-item">Part I:  Hình ảnh</Link>
            <Link to="/kiem-tra/part-II" className="dropdown-item">Part II: Hỏi đáp</Link>
            <Link to="/kiem-tra/part-V" className="dropdown-item">Part V:  Câu không hoàn chỉnh</Link>
            <Link to="/kiem-tra/part-VI" className="dropdown-item">Part VI: Hoàn thành đoạn văn</Link>
            <Link to="/kiem-tra/part-VII" className="dropdown-item">Part VII: Đọc hiểu</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/thong-tin" className={"dropdown-btn" + navStyle.btnColor}>Thông tin kỳ thi</Link>
        </div>
        <div className="dropdown">
          <Link to="/thao-luan" className={"dropdown-btn" + navStyle.btnColor}>Thảo luận</Link>
        </div>
        <div className="dropdown">
          <Link to='/dong-gop' className={"dropdown-btn" + navStyle.btnColor}>Đóng góp</Link>
        </div>
        <div className="dropdown">
          <button 
            id="account-btn" 
            className = {navStyle.btnColor}
            onClick={user ? handleLogoutClick : handleLoginClick}>
            {buttonTitle}
          </button>  
        </div>
      </div>
    </div>
  )
}

export default Nav