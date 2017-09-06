<template>
    <div>
        <!--头部-->
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">个人资料</h1>
            <a class="flex_item1 header-right"></a>
        </header>
        <!--主体部分-->
        <nav class="pD-nav">
            <div class="weui-tab">
                <div class="weui-navbar" id="navbar">
                    <a class="weui-navbar__item text-font3 weui-bar__item--on" href="editData_static.html">
                        编辑资料
                    </a>
                    <a class="weui-navbar__item text-font3" href="changePsd_static.html">
                        修改密码
                    </a>
                </div>
            </div>
        </nav>
        <section style="margin-top:4.8rem">
            <article>
                <form action="" class="form" id="form">
                    <div class="weui-cells weui-cells_form bg-wechat mar-t0">
                        <!--昵称-->
                        <div class="weui-cell bg-white">
                            <div class="weui-cell__hd"><label class="weui-label text-font4">昵称</label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input text-font3 text-r sc-text-gray" value="蓝枫" type="text">
                            </div>
                        </div>
                        <!--银行卡类型-->
                        <div class="weui-cell bg-white">
                            <div class="weui-cell__hd"><label class="weui-label text-font4">银行卡类型</label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input text-font3 text-r sc-text-gray" type="text" value="建行">
                            </div>
                        </div>
                        <!--银行卡账号-->
                        <div class="weui-cell bg-white">
                            <div class="weui-cell__hd"><label class="weui-label text-font4">银行卡账号</label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input text-font3 text-r sc-text-gray" type="number" value="12312312312432" >
                            </div>
                        </div>
                        <!--持卡人姓名-->
                        <div class="weui-cell bg-white">
                            <div class="weui-cell__hd"><label class="weui-label text-font4">持卡人姓名</label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input text-font3 text-r sc-text-gray" type="text" value="蓝枫" >
                            </div>
                        </div>
                    </div>
                    <!--保存-->
                    <a href="javascript:;" class="weui-btn weui-btn_primary text-font4 mar-t5 mar-l2 mar-r2">保存修改</a>
                </form>
            </article>
        </section>
    </div>

</template>