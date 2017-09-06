<template>
    <div id="dealCart">
        <!--头部-->
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">购物车</h1>
            <div class="flex_item1 header-right" @click="!status">编辑</div>
        </header>
        <!--主体部分-->
        <div class="fix_containner">
            <section>
                <article class="weui-msg dealCart_top hide">
                    <div class="weui-msg__icon-area"><i class="icon-shopping-cart dealCart_img"></i></div>
                    <div class="weui-msg__text-area">
                        <h2 class="weui-msg__title text-font5">购物车竟然是空的</h2>
                        <p class="weui-msg__desc text-font3">“再忙,也要记得买点什么犒赏自己”</p>
                    </div>
                </article>
                <article>
                    <figure class="bg-white mar-b2">
                        <!--店名-->
                        <header class="weui-cells mar-t0 cancle">
                            <div class="weui-cell weui-cell_access">
                                <a class="flex_item5"  href="changePsd_static.html">
                                    <span class="weui-cell__hd fl"><img src="../assets/images/temporary/goods1.jpg" alt="" style="width:1.5rem;height:1.5rem;margin-right:5px;display:block"></span>
                                    <span class="text-l weui-cell__ft fl">
									<b class="bc-text text-font3">cell standard</b>
								</span>
                                </a>
                                <div class="flex_item1 text-font2 text-r" onclick="compile(this)">编辑</div>
                            </div>
                        </header>
                        <!--商品块-->
                        <div class="weui-cells weui-cells_checkbox mar-t0 cancle">
                            <!--第一块-->
                            <article class="weui-flex mar-b1" name="details">
                                <div class="weui-cell weui-check__label commodity_bg pad-r3 pad-t1 pad-b1 flex_item5" for="s11">
                                    <label class="weui-cell__hd">
                                        <input type="checkbox" class="weui-check" name="checkbox1" id="s11" v-model="status">
                                        <i class="weui-icon-checked"></i>
                                    </label>
                                    <div class="weui-panel__bd commodity">
                                        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg pad-all1 pad-r0">
                                            <div class="weui-media-box__hd ">
                                                <img class="commodity_img" src="../assets/images/temporary/goods1.jpg">
                                            </div>
                                            <!--完成状态-->
                                            <div class="weui-media-box__bd text-font1" name="accomplish">
                                                <p class="text-astrict showLine-2">新品 “加州风情”系列 美式风格两室两厅件套</p>

                                                <p class="sc-text-gray mar-t1">
                                                    <span>颜色:<i>黑色</i></span>
                                                    <span>尺码:<i>L</i></span>
                                                </p>
                                                <p class="weui-media-box__desc text-font2">
                                                    <span class="sc-text-warning" name="price">￥:<i class="text-font3">99.90</i></span>
                                                    <span class="lineation">￥:<i>232</i></span>
                                                </p>
                                                <p class="text-font3 text-r width100 commodity_num">x<b>1</b></p>
                                            </div>
                                            <!--编辑状态-->
                                            <div class="weui-media-box__bd commodity_showHei weui-flex hide" name="editor">

                                                <div class="flex_item3 mar-t2">
                                                    <div class="gw_num">
                                                        <span class="jian">-</span>
                                                        <input type="text" value="1" class="num">
                                                        <span class="add">+</span>
                                                    </div>
                                                    <div class="gw_num mar-t1 text-font3">
                                                        <p class="text-c"><i>颜色:<b>白色</b></i><i class="mar-l2">尺寸:<b>XL</b></i></p>

                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex_item1 text-c commodity_del flex_item1 hide" name="del" onclick="del(this)">删除</div>
                            </article>
                            <!--第二-->
                            <article class="weui-flex mar-b1" name="details">
                                <div class="weui-cell weui-check__label commodity_bg pad-r3 pad-t1 pad-b1 flex_item5" for="s11">
                                    <label class="weui-cell__hd">
                                        <input type="checkbox" class="weui-check" name="checkbox1" id="s11">
                                        <i class="weui-icon-checked"></i>
                                    </label>
                                    <div class="weui-panel__bd commodity">
                                        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg pad-all1 pad-r0">
                                            <div class="weui-media-box__hd ">
                                                <img class="commodity_img" src="../assets/images/temporary/goods1.jpg">
                                            </div>
                                            <!--完成状态-->
                                            <div class="weui-media-box__bd text-font1" name="accomplish">
                                                <p class="text-astrict showLine-2">新品 “加州风情”系列 美式风格两室两厅件套</p>

                                                <p class="sc-text-gray mar-t1">
                                                    <span>颜色:<i>黑色</i></span>
                                                    <span>尺码:<i>L</i></span>
                                                </p>
                                                <p class="weui-media-box__desc text-font2">
                                                    <span class="sc-text-warning" name="price">￥:<i class="text-font3">99.90</i></span>
                                                    <span class="lineation">￥:<i>232</i></span>
                                                </p>
                                                <p class="text-font3 text-r width100 commodity_num">x<b>1</b></p>
                                            </div>
                                            <!--编辑状态-->
                                            <div class="weui-media-box__bd commodity_showHei weui-flex hide" name="editor">

                                                <div class="flex_item3 mar-t2">
                                                    <div class="gw_num">
                                                        <span class="jian">-</span>
                                                        <input type="text" value="1" class="num">
                                                        <span class="add">+</span>
                                                    </div>
                                                    <div class="gw_num mar-t1 text-font3">
                                                        <p class="text-c"><i>颜色:<b>白色</b></i><i class="mar-l2">尺寸:<b>XL</b></i></p>

                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="flex_item1 text-c commodity_del flex_item1 hide" name="del" onclick="del(this)">删除</div>
                            </article>
                        </div>
                    </figure>
                </article>
            </section>
        </div>
        <!--结算条-->
        <section class="settlement">
            <div class="weui-cells weui-cells_checkbox weui-flex">
                <div class="weui-cell weui-check__label weui-flex flex_item5 pad-t1 pad-b1 pad-r0" for="all">
                    <label class="flex_item2">
						<span class="weui-cell__hd">
					        <input type="checkbox" class="weui-check" name="all_check" id="all" onclick="all_choose(this)">
						    <i class="weui-icon-checked"></i>
						</span>
                        <span class="text-font4">
						    <b>全选</b>
						</span>
                    </label>
                    <div class="weui-cell__bd flex_item2 text-font3">
                        <p>合计:
                            <b class="text-font2 mar-l2 sc-text-warning">￥
                                <i class="text-font3" id="all_price">123</i>
                            </b>
                        </p>
                    </div>

                </div>
                <div class="weui-cell__ft flex_item2 cancle text-c bg-green">
                    <router-link to="/settle">
                        <a class="weui-vcode-btn settlement-btn">结算</a>
                    </router-link>

                </div>
            </div>
        </section>
    </div>

</template>
<style>
    @import "../assets/css/dealCart.css";
</style>
<script>
    export default{
        data (){
            return{
                status:true
            }
        }
    }
</script>