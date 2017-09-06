<template>
    <div id="login">
        <div class="bg-login"></div>
        <center class="login-marT">
            <img src="http://common.huibaoming.cn/wap/images/header.jpg" alt="" style="width:30%" class="sc-border u-radius4">
        </center>
        <div class="input-content">
            <div class="input-bg">
                <div class="weui-flex ">
                    <div class="icon-user mar-all2 sc-text-tab pad-all1 "></div>
                    <input type="text" class="text-font3 pad-all1" placeholder="请输入账号" ng-model="username">
                </div>
            </div>
            <div class="input-bg">
                <div class="weui-flex ">
                    <div class="icon-key mar-all2 sc-text-tab pad-all1 "></div>
                    <input type="password" class="text-font3 pad-all1" placeholder="请输入密码" ng-model="pwd">
                </div>
            </div>
        </div>
        <p class="weui-flex text-font2 margin-auto bc-text-header" style="width:80%;margin:-1rem auto 1rem auto">
            <span class="flex_item1 text-l mar-t2 pad-l2">？忘记密码</span>
            <router-link to="register" tag="span" class="flex_item1 text-r mar-t2 pad-r2">没有账号？注册</router-link>
        </p>
        <center style="width:80%;margin:0 auto">
            <router-link to="home"><a  class="weui-btn weui-btn_plain-default bc-text-header sc-border text-font4" ng-click="login()">登陆</a></router-link>

        </center>
    </div>

</template>
<style>
    @import "../assets/css/user.css";
</style>

<script>
    //    var num=0;
    export default{
        data(){
            return{
                num:1,
                add_type:true,
                price:0
            }
        },
        mounted(){
            this.slider();

        },
        methods:{
            slider (){
                var mySwiper = new Swiper(".swiper-container",{
                    direction:"horizontal",/*横向滑动*/
                    loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
                    pagination:".swiper-pagination",/*分页器*/
                    prevButton:".swiper-button-prev",/*前进按钮*/
                    nextButton:".swiper-button-next",/*后退按钮*/
                    autoplay:3000/*每隔3秒自动播放*/
                })
            },
            submit (){
                $("#about").popup();
                this.add_type=true;
            },
            back (){
                $.closePopup()
            },
            //加入购物车，需要判断是否选了样式
            shop (){
                this.add_type=false;
                $("#about").popup();
            },
            //直接购买，需要判断是否选了样式
            buy (){
                this.add_type=false;
                $("#about").popup();
            },
            //添加数量
            add (){
                this.num++;
//                price=json.detail.price*this.num;
            },
            //减少数量
            pre (){
                if(this.num>1){
                    this.num--;
//                    price=this.json.detail.price*this.num;
                }
            }
        }
    }
</script>