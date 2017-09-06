<template>
    <div>
        <!--头部-->
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">个人资料</h1>
            <router-link to="/user-edite" class="flex_item1 header-right text-c" tag="div">编辑</router-link>

        </header>
        <!--主体部分-->
        <section class="fix_containner">
            <article>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">昵称</p>
                        </div>
                        <div class="weui-cell__ft text-font3">蓝枫</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">推荐人</p>
                        </div>
                        <div class="weui-cell__ft text-font3">我想静静</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">账号</p>
                        </div>
                        <div class="weui-cell__ft text-font3">3123123</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">手机号</p>
                        </div>
                        <div class="weui-cell__ft text-font3">13212342342</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">会员等级</p>
                        </div>
                        <div class="weui-cell__ft text-font3">钻石会员</div>
                    </div>
                </div>
            </article>
            <article>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">银行卡类型</p>
                        </div>
                        <div class="weui-cell__ft text-font3">建行</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">银行卡账号</p>
                        </div>
                        <div class="weui-cell__ft text-font3">534521313212311321</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="text-font4">持卡人姓名</p>
                        </div>
                        <div class="weui-cell__ft text-font3">蓝枫</div>
                    </div>
                </div>
            </article>
        </section>
    </div>

</template>