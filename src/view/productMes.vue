<template>
  <div>
    <Header></Header>
    <div class="container product">
      <div style="background-color: #fff;padding: 20px 50px;">
        <h3>商品详情</h3>
        <div class="productMes" style="display: flex">
          <div style="width: 600px;height: 600px;padding: 30px;">
            <img src="/static/img/te1.jpg" alt="" style="width: 100%;height: 100%;">
          </div>
          <div style="padding: 30px;">
            <h2>hufigheioswjfwjk</h2>
            <div style="margin-top: 200px;">
              <p>本店售价<span style="color: #ea6f5a;font-size: 26px;">￥111元</span></p>
              <p>购买数量
                <button>-</button>
                <span style="border: 1px solid #969696;padding: 5px 40px;">5</span>
                <button>+</button>
              </p><br>
              <span style="background-color: #ffad52;padding: 10px 20px;color: #fff;border-radius: 5px"><i class="fa fa-plus"></i>加入购物车</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header'
  export default {
    name: "product-mes",
    components:{
      Header:Header,
    },
    data(){
      return{

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

</style>
