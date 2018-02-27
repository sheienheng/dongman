<template>
  <div class="classityMore">
    <Header :num="classityNum" :num2="activeNum"></Header>
    <div class="container">
      <div class="row">
        <div class="col-3 main" style="padding-right: 5px">
          <div>
            你可能还喜欢
          </div>
        </div>
        <div class="col-9 aside">
          <div class="title">
            <h2>模型专区</h2>
            <div>
              <b style="padding: 0"><strong>排序方式:</strong></b>
              <span class="sortactive" ref="down" @click="sortChange(1)">
                  <i class="fa fa-long-arrow-down" style="padding: 5px"></i>
                  价格由低到高
                </span>
              <span @click="sortChange(0)" ref="up">
                  <i class="fa fa-long-arrow-up" style="padding: 5px"></i>
                  价格由高到低
                </span>
            </div>
          </div>
          <ul class="contentPro clearfix">
            <li>
              <div class="proMes">
                <img src="../../../static/img/mx1.jpg" alt="">
                <p>电影周边-11元超低价商品特卖</p>
                <div>
                  <span>￥11.00元</span><br>
                  <span class="cart"><i class="fa fa-plus-circle"></i>加入购物车</span>
                </div>
                <span>新品</span>
              </div>
            </li>
            <li>
              <div class="proMes">
                <img src="../../../static/img/mx2.jpg" alt="">
                <p>电影周边-11元超低价商品特卖</p>
                <div>
                  <span>￥11.00元</span><br>
                  <span class="cart"><i class="fa fa-plus-circle"></i>加入购物车</span>
                </div>
                <span>新品</span>
              </div>
            </li>
            <li>
              <div class="proMes">
                <img src="../../../static/img/mx3.jpg" alt="">
                <p>电影周边-11元超低价商品特卖</p>
                <div>
                  <span>￥11.00元</span><br>
                  <span class="cart"><i class="fa fa-plus-circle"></i>加入购物车</span>
                </div>
                <span>热销</span>
              </div>
            </li>
            <li>
              <div class="proMes">
                <img src="../../../static/img/mx4.jpg" alt="">
                <p>电影周边-11元超低价商品特卖</p>
                <div>
                  <span>￥11.00元</span><br>
                  <span class="cart"><i class="fa fa-plus-circle"></i>加入购物车</span>
                </div>
                <span>新品</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header'
  import '../../assets/css/classity.css'
  export default {
    name: "model",
    data(){
      return{
        classityNum:null,
        activeNum:1
      }
    },
    components:{
      Header:Header,
    },
    mounted(){
      this.ss();
    },
    methods:{
      ss:function () {
        this.classityNum = this.$route.query.a;
        // console.log(this.$route.query.a);
      },
      sortChange:function (num) {
        if(num == 1){
          this.$refs.down.classList = 'sortactive'
          this.$refs.up.classList = ''
        }else{
          this.$refs.up.classList = 'sortactive'
          this.$refs.down.classList = ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
