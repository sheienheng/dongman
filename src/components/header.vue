<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="imgFloat">
          <div>
            <router-link to="/"><span><strong>动漫商城</strong></span></router-link>
          </div>
          <div>
            <img src="/static/img/cart.png" alt="">
            <router-link to="/sign-out">注册</router-link>
            <p>/</p>
            <router-link to="/sign-in">登录</router-link>
          </div>
          <span class="cartCount" v-text="cartCount"></span>
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
            <ul class="listChildren" v-if="index==0&&num2==1">
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
            <ul class="listChildren showHide" v-if="index==0&&num2!=1">
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
          {path:'/'},
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
        ]
      }
    },
    computed:{
      ...mapState(['nickName','cartCount'])
    },
    mounted(){
      this.ss()
    },
    methods:{
      ss:function(){

      }

    }
  }
</script>
<style scoped>
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
</style>
