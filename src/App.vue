<template>
  <div id="app">
    <router-view></router-view>
    <FooterView v-show="$route.meta.navShow"></FooterView>
  </div>
</template>

<script>
  import FooterView from './components/footerView.vue'
export default {
  name: 'app',
  watch:{
    $route(to,form){

    }
  },
  components:{
    FooterView
  }


}
</script>

<style>

</style>
