<template>
    <div id="designer">
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <p class="back-header-h1 flex_item4">设计师</p>
            <a class="flex_item1 header-right"></a>
        </header>
        <div class="fix_containner">
             <div class="weui-panel">
            <div class="weui-panel__hd">著名设计师</div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="item in designerData">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb border-rd" :src="item.url">
                    </div>
                    <div class="weui-media-box__bd">
                        <h6 class="weui-media-box__title">{{ item.name }}</h6>
                        <p class="weui-media-box__desc"><span style="font-weight:bold">擅长风格：</span>&ngsp;{{ item.title }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
    </div>
</template>
<style>

</style>
<script>
    //    import NavView from './headers.vue'
    export default {
        components:{
//            NavView
        },
        data () {
            return {
                designerData: [
                    {name: "郭海峰", url: "./src/assets/images/designer/designer1.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer2.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer3.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer4.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer5.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer6.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer7.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer8.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer9.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                    {name: "郭海峰", url: "./src/assets/images/designer/designer2.jpg", title: "现代简约、新中式、后现代、美式乡村、欧式"},
                ]
            }

        }
    }
</script>