<template>
    <div>
      <Header :num2="activeNum"></Header>
    </div>
</template>

<script>
  import Header from '../components/header'
    export default {
      name: "sale",
      components:{
        Header:Header,
      },
      data(){
        return{
          activeNum:2,
        }
      }
    }
</script>

<style scoped>
</style>
