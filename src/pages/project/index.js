// 首页使用的js

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