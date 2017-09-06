<template>
    <div id="register">
        <div class="bg-login"></div>
        <div class="weui-cells weui-cells_form mar-t6 input-bg width90" style="margin:auto; margin-top: 4rem !important;">

            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label bc-text-header text-font4">手机号</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input text-font4" type="number" placeholder="请输入手机号">
                </div>
                <div class="weui-cell__ft">
                    <a class="weui-vcode-btn text-font4">获取验证码</a>
                </div>
            </div>

            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label bc-text-header text-font4">验证码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input text-font4" type="text"  placeholder="请输入验证码">
                </div>
            </div>

            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label bc-text-header text-font4">昵称</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input text-font4" type="text"  placeholder="请输入昵称">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label bc-text-header text-font4">密码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input text-font4" type="password"  placeholder="请输入密码">
                </div>
            </div>

        </div>

        <router-link to="/login"> <a href="javascript:;" class="weui-btn weui-btn_plain-default bc-text-header width90" style="margin: auto; border:1px solid #FFFFFF;margin-top: 2rem;">注册</a></router-link>
    </div>

</template>
<style>
    @import "../assets/css/user.css";
</style>