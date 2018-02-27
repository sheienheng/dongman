<template>
    <div class="classityMore" style="background-color: #f5f7fa;">
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
            <div class="title" style="">
              <h2 style="color: #434a45;font-size: 24px;
              line-height: 50px;padding-left:10px;border-bottom: 1px solid #dcdcdc;">十元专区</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import Header from '../../components/header'
  export default {
    name: "tenyuan",
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
.classityMore .row .aside .title{
  background-color: #fff;
  border-radius: 5px;
}
</style>
