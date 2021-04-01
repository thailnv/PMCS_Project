$('.slider-container').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '.pre-btn',
  nextArrow: '.next-btn'
});

window.onscroll = () => {
  if (document.documentElement.scrollTop > innerHeight*0.5){
    document.querySelector('.nav').style.background = "url('./img/banner-bg.jpg') bottom";
    document.querySelector('.logo > img').src = "./img/logo_trans.png";
    let dropBtn = document.getElementsByClassName('dropdown-btn');
    for(let i = 0; i < dropBtn.length; i++){
      dropBtn[i].style.color = '#333'
    }
    document.getElementById('login-btn').style.color = '#333';
  }
  else{
    document.querySelector('.nav').style.background = "transparent";
    let dropBtn = document.getElementsByClassName('dropdown-btn');
    if(document.documentElement.scrollTop > innerHeight*0.5 - 29){
      for(let i = 0; i < dropBtn.length; i++){
        dropBtn[i].style.color = '#333'
      }
      document.querySelector('.logo > img').src = "./img/logo_trans.png";
      document.getElementById('login-btn').style.color = '#333';
    }else{
      for(let i = 0; i < dropBtn.length; i++){
        dropBtn[i].style.color = '#fff'
      }
      document.querySelector('.logo > img').src = "./img/logo_trans_light.png";
      document.getElementById('login-btn').style.color = '#fff';      
    }
  }
}