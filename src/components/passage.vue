<template>
    <div id="passage" class="bg-white">
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">家居网</h1>
            <a class="flex_item1 header-right"><span class="icon-reorder" @click="submit()"></span></a>
        </header>
        <div  class="fix_containner" style="padding:15px">
            <p class="text-font4">雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外</p>
            <div class="weui-row mar-t2">
                <div class="weui-col-10"><img src="../assets/images/banner/banner1.jpg" alt="" style="width:24px;height:24px;border-radius:1rem;"></div>
                <div class="weui-col-90 text-font1">
                    <p class="text-font2">张小龙</p>
                    <p>2小时前</p>
                </div>
            </div>
            <p class="text-font3">小米杂货铺真不是白来的，不仅米家商城频繁上新品，更是聚拢了大量小米的合作伙伴，这次小米真的搞了一个大事件，他们将发布一款新的APP，该APP点位为小米旗下所有精品产品的电商平台。</p>
            <img src="../assets/images/banner/banner1.jpg" alt="" style="width:100%">
            <p class="text-font3">小米杂货铺真不是白来的，不仅米家商城频繁上新品，更是聚拢了大量小米的合作伙伴，这次小米真的搞了一个大事件，他们将发布一款新的APP，该APP点位为小米旗下所有精品产品的电商平台。</p>
            <img src="../assets/images/banner/banner1.jpg" alt="" style="width:100%">
            <p class="text-font3">小米杂货铺真不是白来的，不仅米家商城频繁上新品，更是聚拢了大量小米的合作伙伴，这次小米真的搞了一个大事件，他们将发布一款新的APP，该APP点位为小米旗下所有精品产品的电商平台。</p>
            <img src="../assets/images/banner/banner1.jpg" alt="" style="width:100%">
            <!--扩展区-->
            <div style="background:#848484;overflow:hidden" >
                <div class="mar- border-b">
                    <p class="text-font2">雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外</p>
                </div>
                <div class="mar-all2 border-b">
                    <p class="text-font2">雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外</p>
                </div>
            </div>
        </div>
        <!--弹出框-->
        <div id="about" class="weui-popup__container  popup-bottom">
            <div class="weui-popup__overlay weui-popup-overlay"></div>
            <div class="weui-popup__modal" style="overflow:inherit;background:white">
                <!--关闭按钮-->
                <p class="toclose close-popup">关闭</p>
                <!--头部区域-->
                <div class="weui-flex  text-c" style="border:1px solid #efeef0;padding:0.5rem 0;font-size:0.8rem">
                    <div class="weui-flex__item">分享操作</div>
                </div>
                <!--选择区域,可垂直滚动-->
                <div class="text-font2">
                    <div class="weui-flex pad-t3 text-c bg-white">

                        <div class="weui-flex__item  nav_item">
                            <img src="../assets/images/temporary/share_wechat.png" alt="">
                            <p>微信分享</p>
                        </div>
                        <div class="weui-flex__item  nav_item">
                            <img src="../assets/images/temporary/weibo.png" alt="">
                            <p>微博</p>
                        </div>
                        <div class="weui-flex__item  nav_item">
                            <img src="../assets/images/temporary/collect1.png" alt="">
                            <p>收藏</p>
                        </div>

                    </div>
                </div>
                <div class="shop_number">

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
    </div>


</template>
<style>

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
        methods:{
            submit (){
                $("#about").popup();
            },
            back (){
                $.closePopup()
            }



        }
    }
</script>