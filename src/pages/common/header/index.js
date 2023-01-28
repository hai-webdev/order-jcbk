// 头部的js代码
import "swiper/css/swiper.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.less";
import { WOW } from "wowjs";
import "wowjs/css/libs/animate.css";

$(".menu").on("click", function(){
    $(this).toggleClass("active");
    $(".head-body").slideToggle();
})

new WOW().init();