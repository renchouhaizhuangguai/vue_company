<template>
  <div class="comShow">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span>企业“秀”</span>
          <router-link :to="{path: '/comloginhead/comCardManage'}" tag="span" class="goback">返回<i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
        </div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>设置秀内容</span>
        </div>
        <div class="thirdCol">
          <div class="title" style="font-size: 14px;margin-top:10px;">企业介绍、产品推广、企业动态,编辑后可在名片“秀”展示</div>
          <div class="textEdit">
            <vue-html5-editor
                    class="editor"
                    :content="content"
                    :height="400"
                    :z-index="100"
                    :auto-height="true"
                    :show-module-name="false"
                    @change="handleChange"
            ></vue-html5-editor>
          </div>
          <div class="combutton mv" @click="submit">确认</div>
        </div>
        <div class="thirdCol" style="margin-left: 90px;">
          <img src="../../assets/public_image/comShow.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "com-show",
    data(){
       return{
           content:''
        }
    },
    methods:{
        submit(){
            if(document.querySelector('.vue-html5-editor .content').innerHTML!==''){
                this.$http.post('vcard/save-company-show',{
                    show_details:document.querySelector('.vue-html5-editor .content').innerHTML
                }).then(res=>{
                    if (res.data.respCode===1){
                        this.$message({type:'success',message:'上传成功，请等待后台审核'})
                    }else{
                        this.$message({type:'warning',message:res.data.respMsg})
                    }
                }).catch(err=>console.log(err))
            }else{
                this.$message({
                    type:'warning',
                    message:'请先编辑内容在进行上传'
                })
            }
        },
    },
    created(){
        this.$store.commit('changeComIndex', 7);
    }
  }
</script>

<style scoped lang="scss">
  .combutton.mv{
  margin-left: 80px; margin-top: 20px; width: 120px; height: 34px; line-height: 34px; font-size: 14px;border-radius: 30px
  }
  .textEdit{
    width: 305px;height: 440px;border: 1px solid #ccc;margin-top: 20px;border-radius: 5px;position: relative
  }
  .vue-html5-editor>.toolbar>ul>li .icon{
   line-height: 1;
  }
</style>
