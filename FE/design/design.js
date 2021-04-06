$('.slider-container').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '.pre-btn',
  nextArrow: '.next-btn'
});

/*window.onscroll = () => {
  if (document.documentElement.scrollTop > innerHeight*0.5){
    document.querySelector('.nav').style.background = "url('./img/banner-bg.jpg') bottom";
    document.querySelector('.logo > img').src = "./img/Edulogy-logos_transparent.png";
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
      document.querySelector('.logo > img').src = "./img/Edulogy-logos_transparent.png";
      document.getElementById('login-btn').style.color = '#333';
    }else{
      for(let i = 0; i < dropBtn.length; i++){
        dropBtn[i].style.color = '#fff'
      }
      document.querySelector('.logo > img').src = "./img/Edulogy-logos_transparent.png";
      document.getElementById('login-btn').style.color = '#fff';      
    }
  }
}*/

function showLoginForm(){
  var modal = document.getElementsByClassName("app")[0];
  modal.style.display= 'block';
}

function closeModalForm(){
  var modal = document.getElementsByClassName("app")[0];
  modal.style.display= 'none';
}
const nav = document.querySelector('.nav');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll',()=>{
  let currentScrollpos = window.pageYOffset;

  if(prevScrollpos< currentScrollpos){
    if(document.documentElement.scrollTop>100)
    {
      document.querySelector('.nav').style.background = "white";
    }
    nav.classList.add('hide');
  }
  else{
    nav.classList.remove('hide');
  }

  prevScrollpos = currentScrollpos;
}
)