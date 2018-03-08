<template>
    <div class="sign">
        <!--logo-->
        <div class="logo">
            <router-link to="/">
              <img src="../../static/img/gua2.jpg">
            </router-link>
        </div>
      <h1>{{mes}}</h1>
        <!--登录表单-->
        <div class="main">
            <div class="title">
                <h4>
                    <router-link to="/sign-in">登录</router-link>
                    <b>·</b>
                    <router-link class="active" to="/sign-out">注册</router-link>
                </h4>
            </div>
            <div class="js-sign-in">
                <form method="post" >
                    <div class="input-prepend">
                        <input class="top-radius userName" type="text" name="userName" placeholder="设置用户名">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="input-prepend">
                        <input class="bottom-radius userPwd" type="password" name="userPwd" placeholder="设置密码">
                        <i class="fa fa-lock"></i>
                    </div>
                    <div class="input-prepend" style="margin-bottom: 60px;">
                      <input class="bottom-radius userPPwd" type="password" name="userPPwd" placeholder="确认密码">
                      <i class="fa fa-lock"></i>
                    </div>
                    <input type="button" class="btn sign-up-btn" value="注册"
                           @click="reg()" style="background-color: #ff7e00;color: #fff">
                    <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br>
                        用户协议 和 隐私政策 。</p>

                </form>
                <div class="more-sign">
                    <p>社交账号直接注册</p>
                    <ul>
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
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import '../assets/css/sign.css'
  import axios from 'axios'
  export default{
    layout:'sign',//当前页面所使用的默认模板是layouts文件夹下的sign.vue
    data () {
      return{
        title:"注册",
        meta:[
          {hid: 'description',name:'description',content:'注册页面'}
        ],
        mes:''
      }
    },
    methods:{
      reg(){
        var userName=document.querySelector('.userName').value;
        var userPwd=document.querySelector('.userPwd').value;
        var userPPwd=document.querySelector('.userPPwd').value;
        axios.post("/users/reg",{
          userName:userName,
          userPwd:userPwd,
          userPPwd:userPPwd
        }).then((response)=>{
          let res = response.data;
        if(res.status=="0"){
          this.$router.push({
            path:'/sign-in'
          })
        }else{
          this.mes=res.msg;
        }
      });
      }
    }
  }
</script>
