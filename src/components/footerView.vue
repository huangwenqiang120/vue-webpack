<template>
    <!--底部导航栏-->
        <div class="weui-tabbar">
            <router-link class="weui-tabbar__item weui-bar__item--on" to="home" tag="a">
                <div class="weui-tabbar__icon weui-tar__img">
                <img src="../assets/images/icon/home.png" alt="">
                    <!--<p class=" icon-qrcode" style="width:1rem;height: 1rem !important;">w</p>-->
                </div>
                <p class="weui-tabbar__label text-font2">首页</p>
            </router-link>
            <router-link class="weui-tabbar__item" to="classify" tag="a">
                <div class="weui-tabbar__icon weui-tar__img">
                    <img src="../assets/images/icon/classify.png" alt="">
                </div>
                <p class="weui-tabbar__label text-font2">分类</p>
            </router-link>
            <router-link class="weui-tabbar__item" to="/search" tag="a">
                <div class="weui-tabbar__icon weui-tar__img">
                    <img src="../assets/images/icon/search.png" alt="">
                </div>
                <p class="weui-tabbar__label text-font2">发现</p>
            </router-link>
            <router-link class="weui-tabbar__item" to="/user-info" tag="a">
                <div class="weui-tabbar__icon weui-tar__img">
                    <img src="../assets/images/icon/user.png" alt="">
                </div>
                <p class="weui-tabbar__label text-font2">我</p>
            </router-link>
        </div>

</template>
<script>

</script>