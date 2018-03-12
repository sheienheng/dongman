<template>
    <div>
      <div style="width: 500px;height: 600px;text-align: center;background-color: #969696;margin: 0 auto;">
        <h1 style="text-align: center;margin-bottom: 50px;">更换头像</h1>
        <form>
          <div class="form-group" style="position: relative;">
            <span style="position: absolute;display: inline-block;width: 100px;border: 1px solid #ea6f5a;
            padding: 5px 10px;color: greenyellow">更换头像</span>
          <!--accept=""  支持的文件类型,选择时只能显示相应类型的文件-->
            <input class="upImg" @change="getFile($event)" type="file" name="headImg" required=" required"
                   accept=".jpg , .png , .gif" style="width: 100px;opacity: 0"/>
          </div>
          <input type="button" @click="submitForm($event)" value="上传头像"/>
        </form>
          <div class="img" style="margin-top: 50px;"></div>
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
    export default {
        name: "upload",
      data(){
          return {
            file: '',
            imgUrl:''
          }
      },
      computed:{
        ...mapState(['nickName','cartCount','userId'])
      },
      methods:{
        getFile(event) {
          this.file = event.target.files[0];
          var freader = new FileReader(this.file);
          freader.readAsDataURL(this.file);
          freader.onload = function(e) {
            this.imgUrl=e.target.result;
            console.log(this.imgUrl)
            var textHtml= "<img src='"+this.imgUrl+"' style='width:200px;height:200px;'/>";
            document.querySelector('.img').innerHTML=textHtml
          }
        },
        submitForm(event){
            event.preventDefault();
            let formData = new FormData();
            formData.append('file', this.file);
            console.log(formData.get('file'))
            if(formData.get('file')){
              let config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }
              axios.post("/users/upload", formData, config).then((response)=>{
                var res = response.data;
                console.log(res)
                if(res.status=='0'){
                  console.log(111111111)
                  // this.$router.push({
                  //   path:'/'
                  // })
                  document.querySelector('.img').innerHTML=''
                  window.location.href='/'
                }else{
                  console.log(22222222)
                }
              })
            }
          }
      }
    }
</script>

<style scoped>

</style>
