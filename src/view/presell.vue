<template>
  <div>
    <Header :num2="activeNum"></Header>
    <div class="container product">
      <div style="background-color: #fff">
        <h3>限时特价</h3>
        <ul class="productMes">
          <li>
            <div class="proImg">
              <img src="../../static/img/xianshi3.jpg" alt="">
            </div>
            <div class="proMes" >
              <p><i class="fa fa-clock-o"></i> 离开始还距时间 01:01:55 </p>
              <span>
                  <p>￥6.1</p>
                  <p>特价预售</p>
                </span>
              <button>马上开始</button>
            </div>
          </li>
          <li>
            <div class="proImg">
              <img src="../../static/img/xianshi2.jpg" alt="">
            </div>
            <div class="proMes" >
              <p><i class="fa fa-clock-o"></i> 离开始还距时间 01:01:55 </p>
              <span>
                  <p>￥6.1</p>
                  <p>特价预售</p>
                </span>
              <button>马上开始</button>
            </div>
          </li>
          <li>
            <div class="proImg">
              <img src="../../static/img/xianshi1.jpg" alt="">
            </div>
            <div class="proMes" >
              <p><i class="fa fa-clock-o"></i> 离开始还距时间 01:01:55 </p>
              <span>
                  <p>￥6.1</p>
                  <p>特价预售</p>
                </span>
              <button>马上开始</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header'
  export default {
    name: "presell",
    components:{
      Header:Header,
    },
    data(){
      return{
        activeNum:3,
      }
    }
  }
</script>

<style scoped>
  .product h3{
    font-size: 18px;
    color: #434A54;
    padding:10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .product .productMes>li{
    height: 350px;
    width: 100%;
    display: flex;
    margin-bottom: 20px;
  }
  .product .productMes>li .proImg{
    width: 70%;
    height: 100%;
  }
  .product .productMes>li .proImg img{
    width: 100%;
    height: 100%;
  }
  .product .productMes>li .proMes {
    width: 30%;
    height: 100%;
    padding: 10px;
  }
  .product .productMes>li .proMes>p{
    width: 100%;
    background-color: #f0f0f0;
    padding: 5px 10px;
  }
  .product .productMes>li .proMes>span{
    display:inline-block;
    width: 70%;
    margin-top: 180px
  }
  .product .productMes>li .proMes>span p:first-child{
    color: #ed145b;
    font-size: 30px;
  }
</style>
