<template>
    <div>
      <form>
        <div class="form-group">
          <!--accept=""  支持的文件类型,选择时只能显示相应类型的文件-->
          <input class="upImg" @change="getFile($event)" type="file" name="headImg" required=" required" accept=".jpg , .png , .gif" />
        </div>
        <input type="button" @click="submitForm($event)" value="上传头像"/>
      </form>
    </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
    export default {
        name: "upload",
      data(){
          return {
            file: ''
          }
      },
      computed:{
        ...mapState(['nickName','cartCount','userId'])
      },
      methods:{
        getFile(event) {
          this.file = event.target.files[0];
          console.log(this.file);
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
                  // location.reload()
                  this.$router.push({
                    path:'/'
                  })
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
