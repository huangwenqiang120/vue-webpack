<template>
    <div>
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">商品详情</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <!--内容区-->
        <div  class="fix_containner">
            <div class="swiper-container"style="width: 100%;height:10rem;"><!--swiper容器[可以随意更改该容器的样式-->
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/images/banner/banner1.jpg" style="width:100%;"></div>
                    <div class="swiper-slide"><img src="../assets/images/banner/banner3.jpg" style="width:100%;"></div>
                    <div class="swiper-slide"><img src="../assets/images/banner/banner2.jpg" style="width:100%;"></div>
                </div>
            </div>
            <div class="bg-white" style="padding:10px;">
                <div class="weui-row">
                    <div class="weui-col-100 text-font2">
                        <p>Control4全宅智能家居系统套装产品家庭影院控制主机电动窗帘门禁</p>
                    </div>
                    <!--<div class="weui-col-20 text-c" style="border-left:1px solid #EEE">-->
                    <!--<img src="http://common.huibaoming.cn/wap/src/images/icon/login1.png" alt="" style="width:24px">-->
                    <!--<p class="text-font1">分享</p>-->
                    <!--</div>-->
                </div>
                <span class="sc-text-active">$399</span><span class="fr sc-text-gray text-font2">库存：255</span>
            </div>
            <!--说明-->
            <div class="bg-white explain">
                <li class="icon-ok-circle"><span>七天无忧退换</span></li>
                <li class="icon-ok-circle"><span>先行赔付</span></li>
                <li class="icon-ok-circle"><span>超时赔偿</span></li>
                <li class="icon-ok-circle"><span>顺丰包邮</span></li>
            </div>
            <div class="bg-white explain" @click="submit()">
                <p>已选择：</p><p>智能家居</p>
            </div>
            <div class="bg-white pad-all2 text-c">图文详情</div>
            <!--图文详情-->
            <div class="goods-detail" id="app">
                <img src="../assets/images/result/detail1.jpg" alt="">
                <img src="../assets/images/result/detail2.jpg" alt="">
                <img src="../assets/images/result/detail3.jpg" alt="">
                <img src="../assets/images/result/detail4.jpg" alt="">
                <img src="../assets/images/result/detail5.jpg" alt="">
            </div>
        </div>

        <!--弹出框-->
        <div id="about" class="weui-popup__container  popup-bottom">
            <div class="weui-popup__overlay weui-popup-overlay"></div>
            <div class="weui-popup__modal" style="overflow:inherit;background:white">
                <!--关闭按钮-->
                <p class="toclose close-popup">关闭</p>
                <!--头部区域-->
                <div class="weui-flex pad-b5">
                    <div class="flex_item1 text-c" style="position:relative"><img src="http://common.huibaoming.cn/wap/images/banner3.jpg" alt="" class="popup-img"></div>
                    <div class="flex_item2 pad-l3 pad-t3 text-font3">
                        <b class="sc-text-warning">￥520.00</b>
                        <p class="sc-text-gray ">库存：5445</p>
                        <p c>请选择颜色分类</p>
                    </div>
                </div>
                <!--选择区域,可垂直滚动-->
                <div class="popup-container text-font2" style="height:10rem;overflow-y:scroll;">
                    <div>颜色</div>
                    <div class="pad-all3 popup-list">
                        <li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li>
                        <li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li>
                        <li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li><li>黑色</li>
                        <li>绿色</li>
                        <li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li><li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li><li>黑色</li>
                        <li>绿色</li>
                        <li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li>
                        <li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li><li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li><li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li><li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li><li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li>
                    </div>
                    <div style="clear:both">尺寸</div>
                    <div class="pad-all3 popup-list">
                        <li>黑色</li>
                        <li>绿色</li>
                        <li>蓝色防尘设计+银色复古</li>
                    </div>
                </div>
                <div class="shop_number">
                    <div class="weui-flex">
                        <div class="weui-flex__item text-font2 chose-number">购买数量</div>
                        <div class="weui-flex__item text-r">
                            <span class="calculate add" @click="pre()">-</span>
                            <span class="calculate" v-text="num"></span>
                            <span class="calculate minus" @click="add()">+</span>
                        </div>
                    </div>
                </div>
                <!--底部按钮区域-->
                <div class="footer-fixed">
                    <div class="btn-sure buy" v-show="add_type">确认</div>
                    <div class="weui-flex text-c" v-show="!add_type">
                        <div class="weui-flex__item footer-fixed-height add" ><p>加入购物车</p></div>
                        <div class="weui-flex__item footer-fixed-height buy" ><p>立即购买</p></div>
                    </div>
                </div>
            </div>
        </div>

        <!--购买导航导航栏-->
        <div class="footer-fixed ">
            <div class="weui-flex text-c">
                <div class="weui-flex__item">
                    <div class="footer-operate"> <img src="http://common.huibaoming.cn/wap/images/icon/home.png" alt="" style="width:20px"><p>首页</p></div>
                    <div class="footer-operate"><img src="http://common.huibaoming.cn/wap/images/icon/search.png" alt="" style="width:20px"><p>收藏</p></div>
                </div>
                <div class="weui-flex__item footer-fixed-height add" @click="shop()"><p>加入购物车</p></div>
                <div class="weui-flex__item footer-fixed-height buy" @click="buy()"><p>立即购买</p></div>
            </div>
        </div>
    </div>
</template>
<style>
    @import "../assets/css/deal.css";
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