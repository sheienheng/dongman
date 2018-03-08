<template>
  <div>
    <Header></Header>
    <div class="container product">
      <div style="background-color: #fff;padding: 20px 50px;">
        <h3>商品详情</h3>
        <div class="productMes" style="display: flex">
          <div style="width: 600px;height: 600px;padding: 30px;">
            <img :src="'/static/img/'+proMes[0].productImage" alt="" style="width: 100%;height: 100%;">
          </div>
          <div style="padding: 30px;width: 400px;">
            <h2 style="height: 300px;">{{proMes[0].productName}}</h2>
            <div style="">
              <p>本店售价<span style="color: #ea6f5a;font-size: 26px;">￥{{proMes[0].salePrice}}元</span></p>
              <p>购买数量
                <button>-</button>
                <span style="border: 1px solid #969696;padding: 5px 40px;">5</span>
                <button>+</button>
              </p><br>
              <span style="background-color: #ffad52;padding: 10px 20px;color: #fff;
              border-radius: 5px;cursor: pointer;"><i class="fa fa-plus"></i>加入购物车</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header'
  import axios from 'axios'
  export default {
    name: "product-mes",
    components:{
      Header:Header,
    },
    data(){
      return{
        proMes:[{productName:'ss',productImage:'ss'}],
      }
    },
    mounted(){
      this.getId();
    },
    methods:{
      getId(){
        var id=this.$route.query.orderId;
        var param = {
          _id:id
        };
        axios.get("/goods/list2",{params:param}).then((response)=>{
          var res = response.data;
          console.log(res)
          if(res.status == '0'){
            this.proMes = res.result.list;
          }else{
            this.proMes=[];
          }
        })

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
