import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { showSidebar } from "../helper";
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

  function handleShowSidebar() {
    showSidebar();
  }

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
    <React.Fragment>
      <div className="nav" style={navStyle.background}>
        <div className="logo">
          <a href="/"><img src={navStyle.logo} alt="" /></a>
        </div>
        <div className="dropdown-container">
          <div className="dropdown">
            <a href="/de-thi" className={"dropdown-btn" + navStyle.btnColor}>Kiểm tra +</a>
            <div className="dropdown-list">
              <a href="/de-thi?type=mini" className="dropdown-item">Mini test</a>
              <a href="/de-thi?type=part1" className="dropdown-item">Part I:  Hình ảnh</a>
              <a href="/de-thi?type=part2" className="dropdown-item">Part II: Hội thoại</a>
              <a href="/de-thi?type=part5" className="dropdown-item">Part V: Điền khuyết</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="/thong-tin" className={"dropdown-btn" + navStyle.btnColor}>Thông tin Toeic</a>
          </div>
          <div className="dropdown">
            <a href="/thao-luan" className={"dropdown-btn" + navStyle.btnColor}>Thảo luận</a>
          </div>
          <div className="dropdown mobile-display">
            <button onClick={handleShowSidebar}>
              <img src="/img/menu_icon2.png" alt="" />
            </button>
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
    </React.Fragment>
  )
}
export default Nav