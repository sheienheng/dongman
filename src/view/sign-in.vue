<template>
    <div class="sign">
        <!--logo-->
        <div class="logo">
            <router-link to="/">
                <img src="../../static/img/gua2.jpg">
            </router-link>
        </div>
        <h2>{{mes}}</h2>
        <!--登录表单-->
        <div class="main">
            <div class="title">
                <h4>
                <router-link class="active" to="/sign-in">登录</router-link>
                <b>·</b>
                <router-link to="/sign-out">注册</router-link>
                </h4>
            </div>
            <div class="js-sign-in">
                <form method="post" >
                    <div class="input-prepend">
                        <input class="top-radius userName" type="text" value="lucancan"  name="userName" placeholder="用户名">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="input-prepend">
                        <input class="bottom-radius userPwd" type="password" value="123456" name="userPwd" placeholder="密码">
                        <i class="fa fa-lock"></i>
                    </div>
                    <div class="remember">
                        <input type="checkbox">&nbsp;
                        <span>记住我</span>
                    </div>
                    <div class="help">
                        <router-link to="/help">
                            登录遇到问题?
                        </router-link>
                    </div>
                    <input type="button" class="btn" value="登录" style="background-color: #ff7e00;color: #fff"
                           @click="login()">
                </form>
                <div class="more-sign">
                    <p>社交账号登录</p>
                    <ul>
                        <li class="sign-weibo">
                            <a href="#">
                                <i class="fa fa-weibo" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="sign-wechat">
                            <a href="#">
                                <i class="fa fa-wechat" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="sign-qq">
                            <a href="#">
                                <i class="fa fa-qq" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="another">
                            <a href="#">
                                其它
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import '../assets/css/sign.css'
    import { mapState } from 'vuex'
    import axios from 'axios'
    export default{
        layout:'sign',//当前页面所使用的默认模板是layouts文件夹下的sign.vue
        data () {
          return{
            title:"登录",
            meta:[
              {hid: 'description',name:'description',content:'登录页面'}
            ],
            mes:''
          }
        },
      computed:{
        ...mapState(['nickName','cartCount','userId'])
      },
      methods:{
          login(){
            var userName=document.querySelector('.userName').value;
            var userPwd=document.querySelector('.userPwd').value;
            axios.post("/users/login",{
                userName:userName,
                userPwd:userPwd
              }).then((response)=>{
                let res = response.data;
              if(res.status=="0"){
                this.$store.commit("updateUserInfo",res.result.userName);
                this.$store.commit("updateUserId",res.result.userId)
                console.log(this.userId)
                this.$router.push({
                  path:'/'
                })
              }else{
                this.mes=res.msg;
              }
            });
          }
      }
    }
</script>
