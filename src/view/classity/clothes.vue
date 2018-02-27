<template>
  <div>
    <Header :num="classityNum" :num2="activeNum"></Header>
    <div class="container">
      <div class="row">
        <div class="col-3 main" style="padding-right: 5px">
          <div style="margin-top: 400px;width: 100%;height: 80px;
background-color: #fff;padding: 10px">
            ggggg
          </div>
        </div>
        <div class="col-9 aside">
          yifu
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '../../components/header'
  export default {
    name: "colthes",
    data(){
      return{
        classityNum:null,
        activeNum:1,
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
      }
    }
  }
</script>

<style scoped>

</style>
