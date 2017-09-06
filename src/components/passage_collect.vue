<template>
    <div id="passage_collect">
        <header class="back-header weui-flex">
            <span class="back-header-icon icon-chevron-left flex_item1" onclick="javascript:window.history.go(-1);">返回</span>
            <h1 class="back-header-h1 flex_item4">收藏页</h1>
            <div class="flex_item1 header-right" @click="editor()">编辑</div>
        </header>
        <div style="padding:45px 0"  class="max">

            <template v-for="item in newData" >
                <router-link :to="'/passage/'+item.id">
                <div class="weui-cell weui-check__label bg-white mar-all2" for="s11">
                    <div class="weui-cell__hd">
                        <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
                        <i class="weui-icon-success" v-show="del"></i>
                    </div>
                    <div class="weui-cell__bd">
                        <div class="search-list">
                            <p v-if="item.type!='3'" v-text="item.title"></p>

                            <div class="weui-flex text-c mar-t2" v-if="item.type=='2'">
                                <div class="weui-flex__item"><img :src="item.url1" alt="" style="width:98%"></div>
                                <div class="weui-flex__item"><img :src="item.url2" alt="" style="width:98%"></div>
                                <div class="weui-flex__item"><img :src="item.url3" alt="" style="width:98%"></div>
                            </div>
                            <div v-if="item.type!='3'">
                                <span v-text="item.from"></span><span v-text="item.time"></span>
                            </div>

                            <!--一张图片-->
                            <div class="weui-row text-c mar-t2 " v-if="item.type=='3'">
                                <div class="weui-col-66 text-l">
                                    <p v-text="item.title"></p>
                                    <span v-text="item.from"></span><span v-text="item.time"></span>
                                </div>
                                <div class="weui-col-33"><img src="../assets/images/temporary/item.jpg" alt="" style="width:98%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                    </router-link>
            </template>

        </div>
        <div class="footer-fixed text-c pad-t2" v-show="del">
            <div class="weui-btn weui-btn_warn weui-btn_mini">删除</div>
        </div>
    </div>

</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                del:false,
                newData:[
                    {del:false,type:"1",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外"},
                    {del:false,type:"2",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外",url1:"./src/assets/images/temporary/item.jpg",url2:"./src/assets/images/temporary/item2.jpg",url3:"./src/assets/images/temporary/item3.jpg"},
                    {del:false,type:"3",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外",url:"./src/assets/images/temporary/item.jpg"},
                    {del:false,type:"2",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外",url1:"./src/assets/images/temporary/item.jpg",url2:"./src/assets/images/temporary/item2.jpg",url3:"./src/assets/images/temporary/item3.jpg"},
                    {del:false,type:"1",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外"},
                    {del:false,type:"2",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外",url1:"./src/assets/images/temporary/item.jpg",url2:"./src/assets/images/temporary/item2.jpg",url3:"./src/assets/images/temporary/item3.jpg"},
                    {del:false,type:"3",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外",url:"./src/assets/images/temporary/item.jpg"},
                    {del:false,type:"2",from:"南方日报",time:"2小时前",title:"雷军进军电商，小米将成淘宝、京东后第3大电商，除了汽车全部外",url1:"./src/assets/images/temporary/item.jpg",url2:"./src/assets/images/temporary/item2.jpg",url3:"./src/assets/images/temporary/item3.jpg"}
                ]
            }

        },
        methods:{
            editor (){
                this.del=!this.del;
            },
        }

    }
</script>