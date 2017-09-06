<template>
    <div>
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <p class="back-header-h1 flex_item4">装修方案</p>
            <a class="flex_item1 header-right"></a>
        </header>

    <div class="fix_containner">
        <div class="goods1 pad-b2">
            <div class="weui-flex">
                <div class="weui-flex__item goods_item1">
                    <img src="../assets/images/result/them1.jpg" alt="">
                </div>
                <div class="weui-flex__item goods_item1">
                    <img src="../assets/images/result/theme2.jpg" alt="">
                </div>
                <div class="weui-flex__item goods_item1">
                    <img src="../assets/images/result/theme3.jpg" alt="">
                </div>
            </div>
        </div>
        <center>
            <p style="margin:10px 0 -10px 0;font-weight:bold">本周主题</p>
            <span class="text-font1 sc-text-gray" >THEME&nbsp;OF&nbsp;THE&nbsp;WEEK</span>
        </center>
        <div class="goods1 pad-t2">
            <template v-for="item in goodsData" >
                <router-link :to="'/goodsdetail/'+item.id">
                    <div class="goods_item2 bodr-rd" :style="item.url">
                        <div class="goods_item2_title"><p>{{ item.title }}</p></div>
                    </div>
                </router-link>

            </template>

        </div>
        <center>
            <p style="margin:10px 0 -10px 0;font-weight:bold">风格推荐</p>
            <span class="text-font1 sc-text-gray" >RECOMMENDED&nbsp;STYLE</span>
        </center>
        <div class="goods1 pad-t2">
            <template v-for="item in goodsData" >
                <router-link :to="'/goodsdetail/'+item.id">
                    <div class="goods_item2 bodr-rd" :style="item.url">
                        <div class="goods_item2_title"><p>{{ item.title }}</p></div>
                    </div>
                </router-link>

            </template>

        </div>
    </div>
    </div>
</template>
<script>
//    import NavView from './headers.vue'
    export default {
        components:{
//            NavView
        },
        data () {
            return {
                goodsData:[
                    {id:"1",url:"background-image:url(./src/assets/images/result/project1.jpg)",title:"清新北欧设计"},
                    {id:"2",url:"background-image:url(./src/assets/images/result/project2.jpg)",title:"清新美式书房"},
                    {id:"3",url:"background-image:url(./src/assets/images/result/project3.jpg)",title:"混搭风原木书架设计"},
                    {id:"4",url:"background-image:url(./src/assets/images/result/result5.jpg)",title:"清晰北欧书房"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result2.jpg)",title:"现在客厅设计"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result.jpg)",title:"现在客厅设计"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result6.jpg)",title:"现在客厅设计"},
                    {id:"5",url:"background-image:url(./src/assets/images/result/result7.jpg)",title:"现在客厅设计"}
                ]
            }

        },
        mounted (){
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
            }
        }
    }
</script>