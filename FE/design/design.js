window.onscroll = () => {
  if (document.documentElement.scrollTop > innerHeight){
    console.log(document.documentElement.scrollTop)
    document.querySelector('.nav').style.background = "url('./banner-bg.jpg') bottom";
    document.querySelector('.logo > img').src = "./logo_trans.png";
    let dropBtn = document.getElementsByClassName('dropdown-btn');
    for(let i = 0; i < dropBtn.length; i++){
      dropBtn[i].style.color = '#333'
    }
    document.getElementById('login-btn').style.color = '#333';
  }
  else{
    document.querySelector('.nav').style.background = "transparent";
    document.querySelector('.logo > img').src = "./logo_trans_light.png";
    let dropBtn = document.getElementsByClassName('dropdown-btn');
    for(let i = 0; i < dropBtn.length; i++){
      dropBtn[i].style.color = '#fff'
    }
    document.getElementById('login-btn').style.color = '#fff';
  }
}