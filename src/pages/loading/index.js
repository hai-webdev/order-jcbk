// 首页使用的js
import Swiper from "swiper";
import "../common/reset.css";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
// 引入公共css
import "./index.less";
import "@/assets/global.less";


const homeBanner = new Swiper(".home-banner", {
    autoplay: {
        delay: 5000
    },
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})