<template>
    <div id="set">
        <!--头部-->
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">设置</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <!--主体部分-->
        <div class="fix_containner">
            <div  class="weui-cells text-font3 mar-t5">

                <router-link class="weui-cell weui-cell_access" to="/user-data" tag="div">
                    <div class="weui-cell__bd">
                        <p>个人资料</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </router-link>
                <router-link class="weui-cell weui-cell_access" to="" tag="div">
                    <div class="weui-cell__bd">
                        <p>客服</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </router-link>

            </div>
        </div>

        <div class="footer-fixed">
            <!--按钮-->

           <router-link to="login"><div class="weui-btn weui-btn_primary text-font3 btn_style">退出登录</div></router-link>
        </div>
    </div>

</template>
<style>
    @import "../assets/css/deal.css";
    .btn_style{
        box-shadow:1px 1px 2px black;
        width:30%;
        margin-top:5px;
    }
</style>
<script>

</script>