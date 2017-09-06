<template>
    <div id="order">
        <!--头部-->
        <header class="back-header weui-flex">
            <router-link  class="back-header-icon icon-chevron-left flex_item1" to="user-info" tag="span">返回</router-link>
            <h1 class="back-header-h1 flex_item4">我的订单</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <!--导航栏-->
        <nav>
            <div class="classify_nav ">
                <ul class="text-l">
                    <!-- data-base 为看效果测试用，可删除-->
                    <li class="header-checked" data-base="1">全部</li>
                    <li data-base="2">待支付</li>
                    <li data-base="3">已支付</li>
                </ul>

            </div>
        </nav>
        <section class="section-pos" name="con">
            <article class="bg-white mar-b2" id="1">
                <div class="order-top weui-flex">
                    <div class="weui-flex__item" id="order_topL">
                        <div class="weui-cells mar-t0 cancle">
                            <div class="weui-cell">
                                <div class="weui-cell__bd">
                                    <p class="mar-l2 text-font2">蓝枫商铺</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="weui-flex__item text-r text-font2 pad-r3 sc-text-warning" id="order_topR">待支付</div>
                </div>
                <!--列表模块-->
                <div class="weui-cells s-dow mar-t0 cancle">
                    <!---->
                    <div class="weui-cells weui-cells-access bg-garyf5" style="margin-top:0">
                        <a class="weui-cell weui-media-box weui-media-box_appmsg weui-media-box-trange main-header-c pad-t2 pad-b2" href="#">
                            <div class="weui-media-box__hd order-img" id="Dimg">
                                <img src="../assets/images/temporary/bg.png" name="Dimg" alt="" class="order-img">
                            </div>
                            <div class="weui-cell__bd weui-cell__hd flex_item3">
                                <p class="text-font3 text-family-hei text-astrict showLine-2">爱奇艺饭水水发我的接哦的微弱iv现场率i哦许</p>
                                <p class="text-font2 sc-text-tab mar-t2"><b>星星点点</b>,<b>105*150cm</b></p>
                            </div>
                            <div class="weui-cell__bd weui-cell__ft">
                                <p class="text-font3">￥<b>0</b></p>
                                <p class="text-font2 mar-t2">x<b>1</b></p>
                            </div>
                        </a>
                    </div>
                    <!---->
                    <div class="weui-cell">
                        <div class="weui-cell__bd text-font3"></div>
                        <div class="weui-cell__ft text-font3 bc-text">实付：<b class="sc-text-warning">￥199.00</b></div>
                    </div>
                    <div class="weui-flex pad-t2 pad-b1 order-zj-borT">
                        <div class="weui-flex__item"></div>
                        <div class="weui-flex__item3 fr pad-r1">
                            <a name="Cancel" class="weui-btn weui-btn_default weui-btn_mini text-font2 mar-r2 mar-t0">删除订单</a>
                            <a name="Cancel" class="weui-btn weui-btn_default weui-btn_mini text-font2 mar-r2 mar-t0">取消订单</a>
                            <router-link  class="weui-btn weui-btn_mini btn-t text-font2 bg-waring mar-t0" tag="a" to="settle">去支付</router-link>
                            <a name="Cancel" class="weui-btn weui-btn_default weui-btn_mini text-font2 mar-r2 mar-t0">已完成</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </div>

</template>
<style>
    @import "../assets/css/order.css";
</style>
<script>

</script>