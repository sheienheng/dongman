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
            <h2>手办专区</h2>
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
            <li v-for="(ten,index) in shiyuanList">
              <div class="proMes">
                <img :src="'/static/img/'+ten.productImage" alt="" @click="toProMes(ten._id)">
                <p style="height: 55px;">{{ten.productName}}</p>
                <div>
                  <span>￥{{ten.salePrice}}元</span>
                  <span class="cart"><i class="fa fa-plus-circle"></i>加入购物车</span>
                </div>
                <span>热销</span>
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
  import axios from 'axios'
  export default {
    name: "prototype",
    data(){
      return{
        classityNum:null,
        activeNum:1,
        shiyuanList:[],
      }
    },
    components:{
      Header:Header,
    },
    mounted(){
      this.ss();
      this.getGoods();
    },
    methods:{
      ss:function () {
        this.classityNum = this.$route.query.a;
        // console.log(this.$route.query.a);
      },
      getGoods(){
        var param = {
          productType:'shouban'
        };
        axios.get("/goods/list",{params:param}).then((response)=>{
          var res = response.data;
        if(res.status == '0'){
          this.shiyuanList = this.shiyuanList.concat(res.result.list);
        }else{
          this.shiyuanList=[];
        }
      })
      },
      sortChange:function (num) {
        if(num == 1){
          this.$refs.down.classList = 'sortactive'
          this.$refs.up.classList = ''
        }else{
          this.$refs.up.classList = 'sortactive'
          this.$refs.down.classList = ''
        }
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
