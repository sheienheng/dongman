<template>
  <div>
    <Header></Header>
    <div class="container">
      <h5 style="padding-bottom:10px;border-bottom:2px solid red">我的购物车</h5>
      <table>
        <tr>
          <th style="width: 10%;">选择</th>
          <th style="width: 15%;">图片</th>
          <th style="width: 35%;">商品名称</th>
          <th style="width: 10%;">价格</th>
          <th style="width: 10%;">购买数量</th>
          <th style="width: 10%;">小计</th>
          <th style="width: 10%;">操作</th>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td><img src="../../static/img/te1.jpg" alt=""></td>
          <td>gifjgvrekfol</td>
          <td>111</td>
          <td><button>-</button><span class="count">4</span><button>+</button></td>
          <td>444</td>
          <td><span>删除</span></td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td><img src="../../static/img/te1.jpg" alt=""></td>
          <td>gifjgvrekfol</td>
          <td>111</td>
          <td><button>-</button><span class="count">4</span><button>+</button></td>
          <td>444</td>
          <td><span>删除</span></td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td><img src="../../static/img/te1.jpg" alt=""></td>
          <td>gifjgvrekfol</td>
          <td>111</td>
          <td><button>-</button><span class="count">4</span><button>+</button></td>
          <td>444</td>
          <td><span>删除</span></td>
        </tr>
      </table>
      <div style="display: flex;justify-content: space-between;margin-top: 30px">
        <p>总价：<span>444</span></p>
        <router-link to="/" style="padding: 10px 20px;border-radius: 5px;background-color: #ffad52;
color: #fff;">去结账</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header'
  export default {
    name: "cart",
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
  table{
    background-color: #fff;
    margin-top: 20px;
  }
  table tr{
    border-bottom: 1px solid #f0f0f0;
  }
  table th{
    background-color: #f0f0f0;
  }
table th,table td{
  text-align: center;
}
  table img{
    width: 100%;
  }
  table td .count{
    border: 1px solid#969696;
    padding: 3px 10px;
  }
</style>
