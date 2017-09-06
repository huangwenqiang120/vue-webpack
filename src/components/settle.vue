<template>
    <div id="settle">
        <!--头部-->
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">设置</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <div class="fix_containner">
            <header>
                <div class="weui-cells cancle mar-t0" style="border-bottom:.2rem solid #666666">
                    <a class="weui-cell weui-cell_access" href="javascript:;" style="height:3.5rem">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/bg.png" alt="" style="width:20px;margin-right:.5rem;display:block"></div>
                        <div class="weui-cell__bd mar-l2">
                            <p class="text-font5"><span class="text-weight2 mar-r2">菜</span><span class="text-font4">2123123123</span></p>
                            <p class="text-font3 sc-text-tab text-astrict showLine-2 mar-t1">广东德生哦都市风景哦史蒂夫单反</p>
                        </div>
                        <div class="weui-cell__ft mar-l4"></div>
                    </a>
                </div>
            </header>
            <section class="pad-b">

                <!--商品块--><!-- 请后台人员自己加上这一块ng-的绑定-->
                <article>
                    <!--商家信息或者订单号或者不要了-->
                    <header class="weui-cells mar-t5">
                        <div class="weui-cell">
                            <div class="weui-cell__hd"><img src="../assets/images/temporary/bg.png" style="width: 1.2rem;height: 1.2rem; margin-right: .5rem;"></div>
                            <div class="weui-cell__bd">
                                <p class="text-font3">213213</p>
                            </div>
                        </div>
                    </header>
                    <!--商品-->
                    <div class="weui-panel__bd" style="background:#F2F2F2">
                        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                            <div class="weui-media-box__hd" style="width:4rem; height:4rem">
                                <img class="weui-media-box__thumb" src="http://wx.qlogo.cn/mmopen/XpPzYZ65T0Goaamjutl77ddSiaiaA4fgwFcDCPrADyTVVqebOW4Yk0quxpu0Yx7XLaGhXrTJWzMbMMaxhGQHOR28FkeibDg9Vg3/0">
                            </div>
                            <div class="weui-media-box__bd">
                                <h4 class="text-weight text-astrict showLine-2 text-font4">这个蟾皮你很拉风窘死的你佛i史蒂夫纳什看大佛</h4>
                                <p class="weui-media-box__desc mar-t2 text-weight3 weui-flex text-font3">
                                    <span class="sc-text-warning flex_item1 text-l">￥<b class="text-font4 ">123</b></span>
                                    <span class="flex_item1 text-r">x <b class="text-font4 ">12</b></span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="weui-cells mar-t0">
                        <div class="weui-cell weui-flex">
                            <div class="weui-cell__bd flex_item2">
                                <p>购买数量</p>
                            </div>
                            <div class="weui-cell__ft flex_item1">
                                <div class="gw_num">
                                    <span class="jian">-</span>
                                    <input type="text" value="1" class="num">
                                    <span class="add">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--订单价格-->
                    <div class="weui-cells mar-t0">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="text-font4 sc-text-gray">
                                    <span>共计<b>3</b>件商品</span>
                                </p>
                            </div>
                            <div class="weui-cell__ft text-font3 bc-text mar-r2">待支付</div>
                            <div class="weui-cell__ft text-font4 sc-text-warning bc-text">￥300</div>
                        </div>
                    </div>
                </article>
                <!--选择支付方式-->
                <article class="weui-cells weui-cells_radio mar-t5">
                    <label class="weui-cell weui-check__label" for="x11">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/bg.png" style="width:1.5rem; height:1.5rem;"></div>
                        <div class="weui-cell__bd text-font4">
                            <p>微信支付</p>
                        </div>
                        <div class="weui-cell__ft">
                            <input type="radio" class="weui-check" name="radio1" id="x11">
                            <span class="weui-icon-checked"></span>
                        </div>
                    </label>
                    <label class="weui-cell weui-check__label" for="x12">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/bg.png" style="width:1.5rem; height:1.5rem;"></div>
                        <div class="weui-cell__bd text-font4">
                            <p>支付宝支付</p>
                        </div>
                        <div class="weui-cell__ft">
                            <input type="radio" class="weui-check" name="radio1" id="x12">
                            <span class="weui-icon-checked"></span>
                        </div>
                    </label>
                    <label class="weui-cell weui-check__label" for="x13">
                        <div class="weui-cell__hd"><img src="../assets/images/temporary/bg.png" style="width:1.5rem; height:1.5rem;"></div>
                        <div class="weui-cell__bd text-font4">
                            <p>银联支付</p>
                        </div>
                        <div class="weui-cell__ft">
                            <input type="radio" class="weui-check" name="radio1" id="x13">
                            <span class="weui-icon-checked"></span>
                        </div>
                    </label>
                </article>
            </section>
            <footer id="goods_lan" class="weui-flex con_footer">
                <div class="flex_item2 text-r pad-r5">
                    <p class="mar-l5  bc-text-header">
                        <span class="text-font4">共计: </span>
                        <span class="text-font4">￥200</span>
                    </p>
                </div>
                <div class="flex_item1 text-c">
                    <router-link to="order"><p class="bg-green bc-text-header text-font4" style="height:3rem; line-height:3rem;">提交订单</p></router-link>
                </div>
            </footer>
        </div>
        </div>

    </div>

</template>
<style>

</style>
<script>

</script>