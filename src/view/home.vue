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
              <div class="specialImg" v-for="str in specialImg">
                <router-link to="/productMes"><img :src="str.url" alt=""></router-link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!--<button @click="add()">ddsd</button>-->
      <!--<button @click="jian()">dvfdgfd</button>-->
    </div>
</template>

<script>
  import '../assets/css/home.css'
  import Header from '../components/header'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import 'swiper/dist/js/swiper.min.js';
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
          specialImg:[
            {url: '/static/img/te1.jpg'},
            {url: '/static/img/te2.jpg'},
            {url: '/static/img/te3.jpg'},
            {url: '/static/img/te4.jpg'},
            {url: '/static/img/te5.jpg'},
            {url: '/static/img/te6.jpg'},
            {url: '/static/img/te7.jpg'},
            {url: '/static/img/te8.jpg'},
          ],
          thisShow:0,
          activeNum:1,
        }
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
      },
      components:{
          Header:Header,
      },
      methods:{
        add(){
          this.$store.commit("updateCartCount",1);
        },
        jian(){
          this.$store.commit("updateCartCount",-1);
        }
      }
    }
</script>

<style scoped>
</style>
