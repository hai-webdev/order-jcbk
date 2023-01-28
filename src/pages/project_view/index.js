// 首页使用的js
import Swiper from "swiper";
import "social-share.js/dist/js/social-share.min.js";
import "social-share.js/dist/css/share.min.css";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

$(".filter span").on("click", function(){
  $(this).next(".filter-list").slideToggle();
})

let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 5,
  slidesPerView: 4,
  breakpoints: {
    1200: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
let galleryTop = new Swiper(".project-swiper", {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
