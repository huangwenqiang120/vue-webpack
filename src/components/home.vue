<template>
    <div>
        <header class="back-header weui-flex">
            <!--<span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>-->
            <p class="back-header-h1 flex_item4">家居网</p>
            <!--<a class="flex_item1 header-right"></a>-->
        </header>
    <div class="swiper-container" style="width: 100%;margin-top:2.5rem"><!--swiper容器[可以随意更改该容器的样式-->
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/images/banner/banner1.jpg" style="width:100%;"></div>
            <div class="swiper-slide"><img src="../assets/images/banner/banner2.jpg" style="width:100%;"></div>
            <div class="swiper-slide"><img src="../assets/images/banner/banner3.jpg" style="width:100%;"></div>
            <div class="swiper-slide"><img src="../assets/images/banner/banner4.jpg" style="width:100%;"></div>
        </div>
        <!--<div class="swiper-pagination" style="width: 100px;margin:0 auto"></div>&lt;!&ndash;分页器&ndash;&gt;、-->
        <!--<div class="swiper-button-prev"></div>&lt;!&ndash;前进按钮&ndash;&gt;-->
        <!--<div class="swiper-button-next"></div>&lt;!&ndash;后退按钮&ndash;&gt;-->
    </div>
    <!--导航区-->
    <div class="weui-flex pad-t1 pad-b1 text-c bg-white">
            <router-link to="/shop_car" class="weui-flex__item  nav_item" tag="div">
                <img src="../assets/images/temporary/nav_shop1.png" alt="">
                <p>购物车</p>
            </router-link>
            <router-link to="/result" class="weui-flex__item  nav_item" tag="div">
                <img src="../assets/images/temporary/nav_o2o.png" alt="">
                <p>效果图</p>
            </router-link>
            <router-link to="/project" class="weui-flex__item  nav_item" tag="div">
                <img src="../assets/images/temporary/nav_project.png" alt="">
                <p>方案</p>
            </router-link>
            <router-link to="/designer" class="weui-flex__item  nav_item" tag="div">
                <img src="../assets/images/temporary/nav_designer.png" alt="">
                <p>设计师</p>
            </router-link>

    </div>
    <div class="weui-flex text-c pad-b1 bg-white">
        <div class="weui-flex__item  nav_item">
            <img src="../assets/images/temporary/nav_home.png" alt="">
            <p>家装</p>
        </div>
        <div class="weui-flex__item  nav_item">
            <img src="../assets/images/temporary/nav_home.png" alt="">
            <p>家居</p>
        </div>
        <div class="weui-flex__item  nav_item">
            <img src="../assets/images/temporary/nav_shua.png" alt="">
            <p>设计师</p>
        </div>
        <div class="weui-flex__item  nav_item">
            <img src="../assets/images/temporary/nav_o2o.png" alt="">
            <p>家装</p>
        </div>
    </div>
    <!--产品展示区-->
    <div class="goods1 pad-b2">
        <p class="goods_title">特惠区</p>
        <div class="weui-flex">
            <div class="weui-flex__item goods_item1">
                <img src="../assets/images/item/item1.png" alt="">
            </div>
            <div class="weui-flex__item goods_item1">
                <img src="../assets/images/item/item2.png" alt="">
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item goods_item1">
                <img src="../assets/images/result/result3.jpg" alt="">
            </div>
            <div class="weui-flex__item goods_item1">
                <img src="../assets/images/result/result2.jpg" alt="">
            </div>
            <div class="weui-flex__item goods_item1">
                <img src="../assets/images/result/result1.jpg" alt="">
            </div>
        </div>
    </div>
    <div class="goods mar-t3">
        <p class="goods_title">特惠区</p>
        <template v-for="item in goodsData" >
            <router-link :to="'/goodsdetail/'+item.id">
                <div class="goods_item2" :style="item.url">
                    <div class="goods_item2_title"><p>{{ item.title }}</p></div>
                </div>
            </router-link>

        </template>

    </div>
    </div>
</template>
<script>
    export default {
        components:{
//            NavView
        },
        data () {
            return {
                goodsData:[
                    {id:"1",url:"background-image:url(./src/assets/images/result/result1.jpg)",title:"清新北欧设计"},
                    {id:"2",url:"background-image:url(./src/assets/images/result/result3.jpg)",title:"清新美式书房"},
                    {id:"3",url:"background-image:url(./src/assets/images/result/result4.jpg)",title:"混搭风原木书架设计"},
                    {id:"4",url:"background-image:url(./src/assets/images/result/result5.jpg)",title:"清晰北欧书房"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result2.jpg)",title:"现在客厅设计"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result.jpg)",title:"现在客厅设计"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result6.jpg)",title:"现在客厅设计"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result7.jpg)",title:"现在客厅设计"}
                ]
            }

        },
        mounted (){
            this.slider();
//            this.init();
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
            }
//            init(){
//                //模拟数据放在json.txt这个文件中
//                this.$http.get('json.txt').then(function(res){
//
//                    //进行赋值
//                    this.goodsData=res;
//                },function(res){
//                    console.log("失败 ");
//                });
//            }
        }
    }
</script>