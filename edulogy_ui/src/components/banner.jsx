import React from 'react';

const openAccountSidebar = () => {
  document.querySelector('.account-info-sidebar').classList.add('active');
}

function Banner(){
  return(
    <div className="banner" onClick={openAccountSidebar}>
      <img src="/img/banner.jpg" alt=""/>
      <div></div>
    </div>
  )
}

export default Banner