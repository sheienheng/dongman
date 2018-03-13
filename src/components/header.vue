<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="imgFloat">
          <div>
            <router-link to="/"><span><strong>动漫商城</strong></span></router-link>
          </div>
          <div>
            <router-link to="/cart">
              <img src="/static/img/cart.png" alt="">
            </router-link>
            <a href="javascript:void(0)"  :class="nickName.length>0?'':'show'">
              <span style="color: red;font-size: 20px;">{{nickName}}</span>&#x3000;欢迎你</a>
            <router-link to="/sign-out"  :class="nickName.length>0?'show':''">注册</router-link>
            <p  :class="nickName.length>0?'show':''">/</p>
            <router-link to="/sign-in"  :class="nickName.length>0?'show':''">登录</router-link>
            <div class="avatar" :class="nickName.length>0?'':'show'">
              <img :src="'/static/headImg/'+nickName+'.jpg'" alt="">
              <ul class="avatarMes">
                <li>
                  <router-link to="/upload">我的资料</router-link></li>
                <li>
                  <router-link to="/me">我的订单</router-link>
                </li>
                <li>
                  <a href="javascript:void(0)" @click="logout()">退出</a>
                </li>
              </ul>
            </div>

          </div>
          <span class="cartCount" v-text="cartCount" v-if="nickName!=''"></span>
          <span class="cartCount"  v-if="nickName==''">0</span>
        </div>

      </div>
      <!--<span v-text="cartCount"></span>-->
    </header>
    <div class="container">
      <div class="top">
        <span style="font-size: 20px"><strong>动漫周边交易平台</strong></span>
        <div class="search-input">
          <input type="text" placeholder="请输入关键词">
          <span>
              <i class="fa fa-search"></i>
            </span>
        </div>
      </div>
      <nav style="background-color: #ffad52;width: 100%;height: 50px;margin-bottom: 20px">
        <ul class="navList">
          <li v-for="(list,index) in navList">
            <router-link :to="navListPath[index].path" v-if="index!=num2">
              {{list.list}}
              <i class="fa fa-sort-desc" v-if="index==0"></i>
            </router-link>
            <router-link :to="navListPath[index].path"  v-if="index==num2" class="activeColor">
              {{list.list}}
            </router-link>
            <ul :class="index==0&&num2==1?'listChildren':'listChildren showHide'" v-if="index==0">
              <li v-for="(p,index2) in pathMes">
                <router-link :to="path[index2]" v-if="index2!=num">
                  <span>{{p.Mes}}</span>
                  <i class="fa fa-angle-right"></i>
                </router-link>
                <router-link :to="path[index2]" v-if="index2==num" class="hoverColor">
                  <span>{{p.Mes}}</span>
                  <i class="fa fa-angle-right"></i>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  export default{
    props:['num','num2'],
    data(){
      return{
        navList:[
          {list:'全部商品分类'},
          {list:'首页'},
          {list:'限时特价'},
          {list:'新品预售'},
        ],
        navListPath:[
          {path:''},
          {path:'/'},
          {path:'/sale'},
          {path:'/presell'},
        ],
        path:[
          {path:'/classity/tenyuan',query: {a: 0}},
          {path:'/classity/prototype',query: {a: 1}},
          {path:'/classity/model',query: {a: 2}},
          {path:'/classity/clothes',query: {a: 3}},
          {path:'/classity/life',query: {a: 4}},
          {path:'/classity/strap',query: {a: 5}},
        ],
        pathMes:[
          {Mes:'10元专区'},
          {Mes:'手办专区'},
          {Mes:'模型专区'},
          {Mes:'服饰鞋帽'},
          {Mes:'生活娱乐'},
          {Mes:'精品挂饰'},
        ],
      }
    },
    computed:{
      ...mapState(['nickName','cartCount','userId'])
  },
  methods:{
    logout:function(){
      axios.post("/users/logout").then((response)=>{
        let res = response.data;
      if(res.status=="0"){
        this.$store.commit("updateUserInfo",'');
        this.$store.commit("updateUserId",'')
        this.$router.push({
          path:'/'
        })
      }
    });
    }
  }
  }
</script>
<style scoped>
  .clearfix:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden
  }
  .header{
    width: 100%;
    height: 48px;
    line-height: 48px;
    position: fixed;
    top: 0;
    background-color: #eee;
    /*border-bottom: 1px solid #969696;*/
    box-shadow: 0 0 8px rgba(0,0,0,.5);
    z-index: 9999;
  }
  .imgFloat{
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .imgFloat>div{

  }

  .header .imgFloat>div img,.header .imgFloat>div  a,
  .header .imgFloat>div  p{
    float: right;
    margin: 0 5px;
  }
  .header .imgFloat>div img{
    margin-top: 5px;
  }
  a:hover {
    text-decoration: none;
    color: inherit;
  }

  .header .cartCount{
    position:absolute ;
    right: 22px;
    color: red;
    font-size: 25px;
  }
  .content{
    padding-top: 50px;
  }
  .top{
    margin-top: 55px;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .top .search-input{
    position: relative;
    width: 50%;
  }
  .top .search-input input{
    width: 100%;
    height: 40px;
    border: 1px solid #ffad52;
    border-radius: 5px;
    padding: 0 10px;
  }
  .top .search-input span{
    position: absolute;
    right: 5px;
    top:2px;
  }
  nav .navList{
    display: block;
  }
  nav .navList>li{
    font-size: 18px;
    width: 100px;
    margin: 0px auto;
    line-height: 50px;
    font-weight: 600;
    float: left;
    color: #fff;
    /*text-align: center;*/
    display: inline-block;
    position: relative;
  }
  nav .navList>li>a{
    margin: 0;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  nav .navList>li a:hover{
    background-color: #ff6204;
    color: #fff;
  }
  nav>.navList>li>a>i{
    float: right;
    margin: 12px 35px 0 25px;
  }
  nav>.navList>li a.activeColor{
    background-color: #ff6204;
  }
  nav .navList>li:first-child{
    width: 24%;
  }
  nav .navList>li:first-child:hover .showHide{
    display: block;
  }
  nav>.navList>li .listChildren{
    width: 100%;
    z-index: 999;
    position: absolute;
    background-color: #fffbea;
    padding-bottom: 70px;
    top:50px;
  }
  .showHide{
    display: none;
  }
  nav>.navList li .listChildren li a{
    width: 100%;
    font-weight: 200;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    color: #974c19;
    padding: 0 15px;
    border-bottom: 1px solid #dcdcdc;
    text-decoration: none;
  }
  nav>.navList li .listChildren li a:hover{
    background-color: #FFE4C4;
  }
  nav>.navList li .listChildren li a.hoverColor{
    background-color: #FFE4C4;
  }
  nav>.navList>li .listChildren li i{
    margin-top: 15px;
  }
  .avatar{
    position:relative;
    width: 45px;
    height: 45px;
    right: 60px;
    background-image: url("/static/img/gua2.jpg");
    border-radius: 50%;
    background-size: 100% auto;
  }
  .avatar img{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #969696;
    border-radius: 50%;
    margin: 0!important;
  }
  .avatar:hover .avatarMes{
    display: block;
  }
  .avatarMes{
    position: absolute;
    width: 100px;
    background-color: #fff;
    top: 45px;
    left: -25px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    display: none;
  }
  .avatarMes li{
    width: 100%;
    height: 48px;
  }
  .avatarMes li a{
    width: 100%;
    margin: 0!important;
    text-align: center;
  }
  .avatarMes li:hover{
    background-color: #f0f0f0;
  }
  .show{
    display: none;
  }
</style>
