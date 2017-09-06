<template>
    <div id="submit">
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">订单详情</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <div class="fix_containner">
            <header>
                <div class="weui-cells cancle mar-t0" style="border-bottom:.2rem solid #666666">
                    <a class="weui-cell weui-cell_access" href="javascript:;" style="height:3.5rem">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/item.jpg" alt="" style="width:20px;margin-right:.5rem;display:block"></div>
                        <div class="weui-cell__bd mar-l2">
                            <p class="text-font5"><span class="text-weight2 mar-r2">菜</span><span class="text-font4">2123123123</span></p>
                            <p class="text-font3 sc-text-tab text-astrict showLine-2 mar-t1">广东德生哦都市风景哦史蒂夫单反</p>
                        </div>
                        <div class="weui-cell__ft mar-l4"></div>
                    </a>
                </div>
            </header>
            <section>
                <!--选择时间-->
                <article class="weui-cell bg-white con_time">
                    <div class="weui-cell__hd">
                        <label for="time-format" class="weui-label text-font4">选择服务日期</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input text-r" id="time-format" type="text" value="2012年12月12日 12点11分" readonly="">
                    </div>
                </article>
                <!--商品块--><!-- 请后台人员自己加上这一块ng-的绑定-->
                <article>
                    <header class="weui-cells mar-t0">
                        <div class="weui-cell">
                            <div class="weui-cell__hd"><img src="../assets/images/temporary/item.jpg" style="width: 1.2rem;height: 1.2rem; margin-right: .5rem;"></div>
                            <div class="weui-cell__bd">
                                <p class="text-font3">家电维修</p>
                            </div>
                        </div>
                    </header>
                    <div class="weui-panel__bd" style="background:#F2F2F2">
                        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                            <div class="weui-media-box__hd" style="width:4rem; height:4rem">
                                <img class="weui-media-box__thumb" src="../assets/images/temporary/item.jpg">
                            </div>
                            <div class="weui-media-box__bd">
                                <h4 class="text-weight text-astrict showLine-2 text-font3">这个蟾皮你很拉风窘死的你佛i史蒂夫纳什看大佛</h4>
                                <p class="weui-media-box__desc mar-t2 text-font3 sc-text-warning text-weight3">￥12.22</p>
                            </div>
                        </a>
                    </div>

                    <!--订单价格-->
                    <div class="weui-cells mar-t0">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="text-font4 sc-text-gray">
                                    <span>订单￥<b>320</b></span>
                                    <span class="text-font3">优惠￥<b>20</b></span>
                                </p>
                            </div>
                            <div class="weui-cell__ft text-font3 bc-text mar-r2">待支付</div>
                            <div class="weui-cell__ft text-font3 bc-text">￥300</div>
                        </div>
                    </div>
                </article>
                <!--选择支付方式-->
                <article class="weui-cells weui-cells_radio mar-t5">
                    <label class="weui-cell weui-check__label" for="x11">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/item.jpg" style="width:1.5rem; height:1.5rem;"></div>
                        <div class="weui-cell__bd">
                            <p>微信支付</p>
                        </div>
                        <div class="weui-cell__ft">
                            <input type="radio" class="weui-check" name="radio1" id="x11">
                            <span class="weui-icon-checked"></span>
                        </div>
                    </label>
                    <label class="weui-cell weui-check__label" for="x12">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/item.jpg" style="width:1.5rem; height:1.5rem;"></div>
                        <div class="weui-cell__bd">
                            <p>支付宝支付</p>
                        </div>
                        <div class="weui-cell__ft">
                            <input type="radio" class="weui-check" name="radio1" id="x12">
                            <span class="weui-icon-checked"></span>
                        </div>
                    </label>
                    <label class="weui-cell weui-check__label" for="x13">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/item.jpg" style="width:1.5rem; height:1.5rem;"></div>
                        <div class="weui-cell__bd">
                            <p>银联支付</p>
                        </div>
                        <div class="weui-cell__ft">
                            <input type="radio" class="weui-check" name="radio1" id="x13">
                            <span class="weui-icon-checked"></span>
                        </div>
                    </label>
                </article>
            </section>
        </div>
        <footer id="goods_lan " class="weui-flex con_footer bc-white">
            <div class="flex_item2 text-l bc-white" style="line-height:2.8rem;background:white">
                <p class="mar-l5 sc-text-tab">
                    <span class="text-rfont035">实付款: </span>
                    <span class="text-rfont04">￥200</span>
                </p>
            </div>
            <div class="flex_item1 text-c">
                <p class="bg-green bc-text-header text-rfont04" style="height:3rem; line-height:3rem;" @click="submit()">提交订单</p>
            </div>
        </footer>
        <!--弹出框-->
        <div id="about" class="weui-popup__container  popup-bottom">
            <div class="weui-popup__overlay weui-popup-overlay"></div>
            <div class="weui-popup__modal" style="overflow:inherit;background:white">
                <!--关闭按钮-->
                <p class="toclose close-popup">关闭</p>
                <!--头部区域-->
                <div class="weui-flex  text-c" style="border:1px solid #efeef0;padding:0.5rem 0;font-size:0.8rem">
                    <div class="weui-flex__item">付款详情</div>
                </div>
                <!--选择区域,可垂直滚动-->
                <div class="text-font2">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4 sc-text-tab">支付宝账户</p>
                        </div>
                        <div class="weui-cell__ft text-font3">13694948364</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4 sc-text-tab">付款方式</p>
                        </div>
                        <div class="weui-cell__ft text-font3">建行储蓄卡（0867）</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font5">需付款</p>
                        </div>
                        <div class="weui-cell__ft text-font3"><h3>89.00元</h3></div>
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
    @import "../assets/css/order.css";
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
            },
            back (){
                $.closePopup()
            }



        }
    }
</script>