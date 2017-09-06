/**
 * Created by 文文 on 2017/4/24.
 */
import Home from './components/home.vue'
import Classify from './components/classify.vue'
import Search from './components/new.vue'
import UserInfo from './components/UserInfo.vue'
import Detail from './components/goodsdetail.vue'
import PersonalData from './components/personalData.vue'
import UserEdite from './components/userEdite.vue'
import Passage from './components/passage.vue'
import Pas_Collect from './components/passage_collect.vue'
import ShowCar from './components/shopCart.vue'
import Submit_Order from './components/submit_order.vue'
import Address from './components/Address.vue'
import Address_add from './components/Address_Add.vue'
import Invite from './components/invite.vue'
import Set from './components/set.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Order from './components/Order.vue'
import Settle from './components/settle.vue'
import Result from './components/result.vue'
import Project from './components/project.vue'
import Designer from './components/designer.vue'

export default [
    {
        path:'/home',
        meta: { navShow: true, cname: '一级页面' },
        component:Home
    },
    {
        path:'/classify',
        meta: { navShow: true, cname: '一级页面' },
        component:Classify
    },
    {
        path:'/search',
        meta: { navShow: true, cname: '一级页面' },
        component:Search
    },
    {
        path:'/user-info',
        meta: { navShow: true, cname: '一级页面' },
        component:UserInfo
    },
    {
        path:'/passage_collect',
        meta: { navShow: false, cname: '二级页面' },
        component:Pas_Collect
    },
    {
        path:'/address',
        meta: { navShow: false, cname: '二级页面' },
        component:Address
    },
    {
        path:'/set',
        meta: { navShow: false, cname: '二级页面' },
        component:Set
    },
    {
        path:'/address_add',
        meta: { navShow: false, cname: '二级页面' },
        component:Address_add
    },
    //登录
    {
        path:'/login',
        meta: { navShow: false, cname: '二级页面' },
        component:Login
    },
    //注册
    {
        path:'/register',
        meta: { navShow: false, cname: '二级页面' },
        component:Register
    },
    //订单
    {
        path:'/order',
        meta: { navShow: false, cname: '二级页面' },
        component:Order
    },
    //提交订单
    {
        path:'/settle',
        meta: { navShow: false, cname: '二级页面' },
        component:Settle
    },
    {
        path:'/invite',
        meta: { navShow: false, cname: '二级页面' },
        component:Invite
    },
    {
        path:'/goodsdetail/:id',
        meta: { navShow: false, cname: '二级页面' },
        component:Detail
    },
    //购物车
    {
        path:'/shop_car',
        meta: { navShow: false, cname: '二级页面' },
        component:ShowCar
    },
    //效果图
    {
        path:'/result',
        meta: { navShow: false, cname: '二级页面' },
        component:Result
    },
    //方案
    {
        path:'/project',
        meta: { navShow: false, cname: '二级页面' },
        component:Project
    },
    //设计师
    {
        path:'/designer',
        meta: { navShow: false, cname: '二级页面' },
        component:Designer
    },
    {
        path:'/submit_order',
        meta: { navShow: false, cname: '二级页面' },
        component:Submit_Order
    },
    {
        path:'/passage/:id',
        meta: { navShow: false, cname: '二级页面' },
        component:Passage
    },
    {
        path:'*',
        meta: { navShow: true, cname: '一级页面' },
        component:Home
    },
    {
        path:'/user-data',
        meta: { navShow: false, cname: '二级页面' },
        component:PersonalData
    },
    {
        path:'/user-edite',
        meta: { navShow: false, cname: '二级页面' },
        component:UserEdite
    }

];