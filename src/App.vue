<template>
  <div id="app" style="min-height: 100vh;background-color: #f5f7fa;padding-bottom: 60px">
    <router-view id="router-view"></router-view>
    <div class="scrollTop" @click="scrollTop()" v-if="toTop">
      <i class="fa fa-chevron-up" aria-hidden="true"></i>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
  import Footer from './components/footer'
export default {
  name: 'App',
  data(){
    return{
      toTop:false
    }
  },
  components:{
    Footer:Footer
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll);
  },
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path;
      // const fromDepth = from.path
      // console.log(toDepth)
      // if(fromDepth=='/upload'&&toDepth=='/'){
      //   location.reload()
      // }
    }
  },
  methods:{
    handleScroll(e){
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
      if (curHeight > 48) {
        this.toTop = true;
      }
      else
      {
        this.toTop = false;
      }
    },
    scrollTop(){
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop;

      // document.documentElement.scrollTop=0;
      let timer = setInterval(function() {
        curHeight= curHeight - 50;
        document.documentElement.scrollTop = curHeight;
        if (curHeight <= 0) {
          clearInterval(timer);
        }
      }, 10);
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  html,body{
    margin: 0;
    padding: 0;
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  #app{
    position: relative;
  }
  .scrollTop{
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid #d0d0d0;
    position: fixed;
    font-size: 20px;
    bottom: 100px;
    right: 5%;
    background-color: #dcdcdc;
  }
  .scrollTop i{
    line-height: 45px;
    color: #fff;
  }
  a:hover{
    text-decoration: none;
  }
</style>
