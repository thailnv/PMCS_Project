import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { appActions } from '../actions/appActions';
import { userActions } from '../actions/userActions';
import { constants } from '../constants';

function Nav(props) {
  const dispatch = useDispatch();

  const user = useSelector(store => store.authentication.user);

  function handleLoginClick() {
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleLogoutClick() {
    dispatch(userActions.logout());
  }

  const buttonTitle = user ? 'Thông tin tài khoản' : 'Đăng nhập';

  let navStyle = {
    background: {},
    logo: "/img/logo_trans.png",
    btnColor: " black-color"
  };

  if (props.currentPage !== "home") {
    navStyle = {
      background: { background: "white" },
      logo: "/img/logo_trans.png",
      btnColor: " black-color"
    }
  }

  return (
    <div className="nav" style={navStyle.background}>
      <div className="logo">
        <a href="/"><img src={navStyle.logo} alt="" /></a>
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <a href="/kiem-tra" className={"dropdown-btn" + navStyle.btnColor}>Kiểm tra +</a>
          <div className="dropdown-list">
            <a href="/kiem-tra/de-thi-thu" className="dropdown-item">Thi thử</a>
            <a href="/kiem-tra/part-I" className="dropdown-item">Part I:  Hình ảnh</a>
            <a href="/kiem-tra/part-II" className="dropdown-item">Part II: Hỏi đáp</a>
            <a href="/kiem-tra/part-V" className="dropdown-item">Part V:  Câu không hoàn chỉnh</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="/thong-tin" className={"dropdown-btn" + navStyle.btnColor}>Thông tin kỳ thi</a>
        </div>
        <div className="dropdown">
          <a href="/thao-luan" className={"dropdown-btn" + navStyle.btnColor}>Thảo luận</a>
        </div>
        <div className="dropdown">
          <a href='/dong-gop' className={"dropdown-btn" + navStyle.btnColor}>Đóng góp</a>
        </div>
        <div className="dropdown">
          <button
            id="account-btn"
            className={navStyle.btnColor}
            onClick={user ? handleLogoutClick : handleLoginClick}>
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Nav