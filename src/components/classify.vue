<template>
    <div>
    <header class="classify_header">
        <div class="weui-flex bc-bg">
            <div class="weui-flex__item back-header-h1 flex_item4">分类页面</div>
        </div>
        <div class="classify_nav">
            <ul>
                <li class="active" data-base="one">家居</li>
                <li data-base="two">家电</li>
                <li data-base="one">家纺</li>
                <li data-base="one">家饰</li>
                <li data-base="one">材料</li>
            </ul>

        </div>
    </header>
    <div style="margin-top:4.8rem">
        <template v-for="item in goodsData" >
            <router-link :to="'/goodsdetail/'+item.id">
            <div class="goods_list">
                <div class="weui-flex">
                    <div class="flex_item1"><img :src="item.url" alt="" style="width:100%;height:100px"></div>
                    <div class="flex_item2 pad-l3 pad-r3">
                        <p v-text="item.title"></p>
                        <div><span class="fl sc-text-warning">￥520.00</span><span class="fr sc-text-gray">库存：5445</span></div>
                    </div>
                </div>
            </div>
            </router-link>
        </template>

    </div>
    </div>
</template>
<style>
    .classify_header{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 100;
        text-align: center;

    }
</style>
<script>
    export default{
        data() {
            return{
                goodsData:[],
                oneData:[
                    {id:'1',url:"./src/assets/images/banner/banner1.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {id:'2',url:"./src/assets/images/banner/banner3.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {id:'3',url:"./src/assets/images/banner/banner2.png",title:"美好的生活来自于高品质的智能家居"},
                    {id:'4',url:"./src/assets/images/banner/banner1.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {id:'5',url:"./src/assets/images/banner/banner3.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {id:'6',url:"./src/assets/images/banner/banner3.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {id:'7',url:"./src/assets/images/banner/banner1.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {id:'8',url:"./src/assets/images/banner/banner3.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {id:'9',url:"./src/assets/images/banner/banner1.jpg",title:"美好的生活来自于高品质的智能家居"}
                ],
                twoData:[

                    {url:"./src/assets/images/result/result_item1.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {url:"./src/assets/images/result/result_item1.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {url:"./src/assets/images/result/result_item1.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {url:"./src/assets/images/result/result_item1.jpg",title:"美好的生活来自于高品质的智能家居"},
                    {url:"./src/assets/images/result/result_item1.jpg",title:"美好的生活来自于高品质的智能家居"}
                ]
            }

        },
        mounted (){
            this.goodsData=this.oneData;
           this.sub();

        },
        methods:{
            sub:function () {
                this.goodsData=this.twoData;
                $('.classify_nav ul').children('li').each(function () {
                    $(this).click(function () {
                        $(this).addClass('active').siblings().removeClass('active')
                        var base=$(this).data('base');
                        console.log(this.goodsData);
                        console.log(base);
                        if(base=="one"){

                            console.log(this.oneData);
                        }else{

                        }


                    });
                });
            }
        }

    }

</script>