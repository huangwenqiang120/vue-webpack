<template>
 <div>
    <div class="">
        <!--头部一-->
        <div class="header-container1 header-bg text-font4">

                <center style="padding:20px 0 10px 0">
                    <router-link to="/user-data"><img src="../assets/images/banner/user1.png" alt=""  style="width:20%;"></router-link>
                    <router-link to="/login"><p class="text-color mar-t3">登录/注册</p></router-link>

                </center>

        </div>
    </div>
     <!--订单导航-->
     <div class="bg-white">
         <div class="user_order_title">我的订单</div>
         <div class="weui-flex" style="padding:5px 0">
             <router-link class="weui-tabbar__item" to="/order" tag="a">
                 <div class="weui-tabbar__icon weui-tar__img">
                     <img src="../assets/images/icon/icon_pay.png" alt="">
                     <!--<p class=" icon-qrcode" style="width:1rem;height: 1rem !important;">w</p>-->
                 </div>
                 <p class="weui-tabbar__label text-font2">代付款</p>
             </router-link>
             <router-link class="weui-tabbar__item" to="/order" tag="a">
                 <div class="weui-tabbar__icon weui-tar__img">
                     <img src="../assets/images/icon/icon_waite.png" alt="">
                 </div>
                 <p class="weui-tabbar__label text-font2">待收货</p>
             </router-link>
             <router-link class="weui-tabbar__item" to="/order" tag="a">
                 <div class="weui-tabbar__icon weui-tar__img">
                     <img src="../assets/images/icon/icon_evaluate.png" alt="">
                 </div>
                 <p class="weui-tabbar__label text-font2">待评价</p>
             </router-link>
             <router-link class="weui-tabbar__item" to="/order" tag="a">
                 <div class="weui-tabbar__icon weui-tar__img">
                     <img src="../assets/images/icon/service.png" alt="">
                 </div>
                 <p class="weui-tabbar__label text-font2">退款/售后</p>
             </router-link>
         </div>
     </div>
    <!--主体内容-->
    <div class="weui-cells text-font3">

        <router-link class="weui-cell weui-cell_access" to="invite" tag="div">
            <div class="weui-cell__hd"><img src="../assets/images/icon/icon_code_1.png" style="width:20px"></div>
            <div class="weui-cell__bd">
                <p>我的二维码</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link class="weui-cell weui-cell_access" to="passage_collect" tag="div">
                <div class="weui-cell__hd"><img src="../assets/images/icon/icon_collect.png" style="width:20px"></div>
                <div class="weui-cell__bd">
                    <p>我的收藏</p>
                </div>
                <div class="weui-cell__ft"></div>
        </router-link>
        <router-link class="weui-cell weui-cell_access" to="/address" tag="div">
            <div class="weui-cell__hd"><img src="../assets/images/icon/icon_address.png" style="width:20px"></div>
            <div class="weui-cell__bd">
                <p>地址管理</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>

    </div>
     <!--主体内容-->
     <div class="weui-cells text-font3">

         <router-link class="weui-cell weui-cell_access" to="set" tag="div">
             <div class="weui-cell__hd"><img src="../assets/images/icon/icon_set.png" style="width:20px"></div>
             <div class="weui-cell__bd">
                 <p>设置</p>
             </div>
             <div class="weui-cell__ft"></div>
         </router-link>
         <router-link class="weui-cell weui-cell_access" to="" tag="div">
             <div class="weui-cell__hd"><img src="../assets/images/icon/icon_phone.png" style="width:20px"></div>
             <div class="weui-cell__bd">
                 <p>客服</p>
             </div>
             <div class="weui-cell__ft">857567585</div>
         </router-link>

     </div>



 </div>
</template>
<style>
    @import '../assets/css/userCenter.css';
</style>