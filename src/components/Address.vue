<template>
    <div>
        <!--头部-->
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">新增地址</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <!--主体部分-->
        <section class="fix_containner">
            <article class="rP-cont-mes bc-head-white mar-b3 bg-white">
                <div class="rP-cont-mes-top pad-b1">
                    <span class="text-font4 fl p-fColor">李玲</span>
                    <span class="text-font4 fr p-fColor">14324323</span>
                </div>
                <div class="rP-cont-mes-center">
                    <p class="text-font3 p-fColor">上海市把喇叭里发生的覅就</p>
                </div>
                <div class="rP-cont-mes-footer">
                    <div class="weui-cells weui-cells_checkbox mar-t1">
                        <label class="mar-t1 weui-cell weui-check__label pad-t1 pad-b1 fl pad-l2" for="s11">
                            <div class="weui-cell__hd pad-r0">
                                <input type="radio" class="weui-check" name="checkbox1" id="s11" checked="checked">
                                <i class="weui-icon-checked"></i>
                            </div>
                            <div class="weui-cell__bd">
                                <p class=" rP-fontClor text-font2" name="rP-defa">默认地址</p>
                            </div>
                        </label>
                        <div class="weui-cell fr pad-l2 pad-r2 pad-t3">
                            <a href="#" class="rP-cont">
                                <div class="weui-cell__hd fl pad-r0 icon-trash picon p-imgColor">
                                    <i class="text-font2">删除</i>
                                </div>
                            </a>
                        </div>
                        <div class="weui-cell fr pad-l2 pad-r2 pad-t3">
                            <a href="#" id="">
                                <div class="weui-cell__hd fl pad-r0 icon-file-alt picon p-imgColor">
                                    <i class="text-font2">编辑</i>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </article>
            <article class="rP-cont-mes bc-head-white mar-b3 bg-white">
                <div class="rP-cont-mes-top pad-b1">
                    <span class="text-font4 fl p-fColor">何承东</span>
                    <span class="text-font4 fr p-fColor">14324323</span>
                </div>
                <div class="rP-cont-mes-center">
                    <p class="text-font3 p-fColor">上海市把喇叭里发生的覅就</p>
                </div>
                <div class="rP-cont-mes-footer">
                    <div class="weui-cells weui-cells_checkbox mar-t1">
                        <label class="mar-t1 weui-cell weui-check__label pad-t1 pad-b1 fl pad-l2" for="s12">
                            <div class="weui-cell__hd pad-r0">
                                <input type="radio" class="weui-check" name="checkbox1" id="s12">
                                <i class="weui-icon-checked"></i>
                            </div>
                            <div class="weui-cell__bd">
                                <p class="text-font2" name="rP-defa">默认地址</p>
                            </div>
                        </label>
                        <div class="weui-cell fr pad-l2 pad-r2 pad-t3">
                            <a href="#" class="rP-cont">
                                <div class="weui-cell__hd fl pad-r0 icon-trash picon p-imgColor">
                                    <i class="text-font2">删除</i>
                                </div>
                            </a>
                        </div>
                        <div class="weui-cell fr pad-l2 pad-r2 pad-t3">
                            <a href="#" id="editPlace">
                                <div class="weui-cell__hd fl pad-r0 icon-file-alt picon p-imgColor">
                                    <i class="text-font2">编辑</i>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </article>
        </section>
        <div class="rP-btn text-c pad-all2">
            <router-link class="text-font3 pad-all2" to="address_add" tag="a">
                添加新地址
            </router-link>
        </div>
    </div>

</template>
<style>
    @import "../assets/css/Place.css";
</style>
<script>

</script>