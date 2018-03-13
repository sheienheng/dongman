<template>
    <div class="content">
      <Header :num2="activeNum"></Header>
      <div class="container">
        <div class="contentMes">
          <div class="row">
            <div class="col-3 main">
            </div>
            <div class="col-9 aside" style="padding-left: 10px">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="str in listImg" >
                    <img :src="str.url" alt="" style="width: 100%;height: 100%;">
                  </div>
                </div>
                <div class="swiper-pagination swiper-pagination-white"></div>
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
              </div>
            </div>
          </div>
          <div class="special">
            <h1 style="">特价专区</h1>
            <div class="all">
              <div v-for="(tejia,index) in tejiaList" class="specialImg">
                <a href="javascript:void(0)" @click="toProMes(tejia.productId)">
                  <img :src="'/static/img/'+tejia.productImage" alt="">
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import '../assets/css/home.css'
  import Header from '../components/header'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import 'swiper/dist/js/swiper.min.js';
  import axios from 'axios'
  import { mapState } from 'vuex'
    export default {
      name: "home",
      data() {
        return{
          listImg: [
            {url: '/static/img/lunbo1.jpg'},
            {url: '/static/img/lunbo2.jpg'},
            {url: '/static/img/lunbo3.jpg'},
            {url: '/static/img/lunbo4.jpg'}
          ],
          thisShow:0,
          activeNum:1,
          tejiaList:[],
        }
      },
      computed:{
        ...mapState(['nickName','cartCount','userId'])
      },
      mounted() {
        var swiper = new Swiper('.swiper-container', {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          autoplay: {
            delay:3000,
            stopOnLastSlide:false,//是否停止在做后一张
            disableOnInteraction:false//触碰后自动切换也不会停止
          },
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        this.getGoods();
      },
      components:{
          Header:Header,
      },
      methods:{
        getGoods(){
          var param = {
            productType:'tejia'
          };
          axios.get("/goods/list",{params:param}).then((response)=>{
            var res = response.data;
            if(res.status == '0'){
              this.tejiaList = this.tejiaList.concat(res.result.list);
              // if(res.result.userName.length>0){
              //   this.$store.commit("updateUserInfo",res.result.userName);
              //   this.$store.commit("updateUserId",res.result.userId)
              // }
              // // console.log(this.nickName)
            }else{
              this.tejiaList=[];
            }
          })
        },
        toProMes(id){
          this.$router.push({
            path:'/productMes?orderId='+id
          })
        }
      }
    }
</script>

<style scoped>
</style>
