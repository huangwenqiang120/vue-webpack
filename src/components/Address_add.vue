<template>
    <div>
        <!--头部-->
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">新增地址</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <!--主体部分-->
        <section class="weui-cells weui-cells_form bg-wechat cancle fix_containner">
            <!--收货人-->
            <article class="weui-cells mar-t0">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label text-font3">收货人</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input text-r text-font3 sc-text-gray" type="text">
                    </div>
                </div>
            </article>
            <!--手机号码-->
            <article class="weui-cells mar-t0">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label text-font3">联系电话</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input text-r sc-text-gray text-font3" type="number" pattern="[0-9]*">
                    </div>
                </div>
            </article>
            <!--选择地址-->
            <article class="weui-cells mar-t0">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label for="name" class="weui-label text-font3">所在地区</label></div>
                    <div class="weui-cell__bd">
                        <input id="start" class="weui-input text-r text-font3 sc-text-gray" type="text" value="湖北省 武汉市 武昌区" readonly="">
                        <iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></div>
                </div>
            </article>
            <!--详细地址-->
            <article class="weui-cells weui-cells_form mar-t0">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea text-font3 sc-text-tab sc-text-gray" placeholder="请填写详细信息 不少于5个字" rows="3"></textarea>
                    </div>
                </div>
            </article>

            <!--设为默认-->
            <article class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd text-font3">设为默认</div>
                    <div class="weui-cell__ft">
                        <input class="weui-switch" type="checkbox">
                    </div>
                </div>
            </article>
            <article class="pad-all3 mar-t4">
                <a onclick="javascript:window.history.go(-1);" class="weui-btn weui-btn_primary width90 margin-auto text-font4">保存</a>
            </article>
        </section>
    </div>

</template>
<style>

</style>
<script>

</script>