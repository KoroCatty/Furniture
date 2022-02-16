// import my from './my';
import '../stylesheets/main.scss';
// console.log('This is index.js');
import './React/reactApp.jsx';

// 3rd party
import velocity from 'velocity-animate';
import $ from 'jquery';


window.onload = function() {
  const spinner = document.getElementById('loading');
  
  spinner.classList.add('loaded');
}




// Slider for mainVis
const swiper = new Swiper('.swiper', {
  // Optional parameters
  breakpoints: {
    1080: {
      slidesPerView: 2.5,//両端を切る
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



// Topへ戻るボタン 
window.addEventListener("scroll", function () {
  let scroll = document.documentElement.scrollTop;
  // document.getElementsById("scrollValue").textContent = scroll;
  console.log(scroll);

  //スクロール値が２００を超えたらid=addingのあるタグにlink-pagetopを付け足し、ｃｓｓに予め記載されたものが起動
  if (scroll > 200) {
    document.getElementById("adding").classList.add("link-pagetop");
  }
  //200以下で上で付加したものを取り除く
  if (scroll < 200) {
    document.getElementById("adding").classList.remove("link-pagetop");
  }
}
);

const pagetopBtn = document.querySelector('#adding');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});







// スクロールアニメーション　for images
const targets = document.querySelectorAll('.IOAPI__img');

function koro(cactus, finishObservation) {
  console.log(cactus);

  cactus.forEach(cat => {

    if (!cat.isIntersecting) {
      return;
    }

    cat.target.classList.add('appear');

    finishObservation.unobserve(cat.target);

  });
}

const milli = {
  // threshold: [0.2, 0.8],
  threshold: 0.2,
  // rootMargin: '0px 0px -100px',　rootの幅を自由に変えれる。（この場合はbottomが-100px）
}

const observer = new IntersectionObserver(koro, milli);


targets.forEach(target => {
  observer.observe(target);
});




// スクロールでheader__menuの高さを変更
const boxes = document.querySelector('.header__menu');
window.addEventListener('scroll', () =>{
boxes.classList.add('change');
});
 

// Hamburger Menu
const hamburgerBtn = document.getElementById("js-hamburger");
const topLine = document.getElementById("js-top-line");
const centerLine = document.getElementById("js-center-line");
const bottomLine = document.getElementById("js-bottom-line");
const nav = document.getElementById("js-nav");
const entire = document.querySelector(".white");


hamburgerBtn.addEventListener("click", () => {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");
  nav.classList.toggle("show");

  entire.classList.toggle("active");
});



const close = document.querySelector(".white");

// 白の部分がクリックされてもバーガーを消す
close.addEventListener("click", () => {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");
  nav.classList.toggle("show");
  entire.classList.toggle("active");
});



// animation for texts
velocity($('.products__contents--text'), 'fadeIn', { duration: 2000, loop: true });
