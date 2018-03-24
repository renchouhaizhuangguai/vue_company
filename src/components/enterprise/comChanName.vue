<template>
  <div class="comChanName">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span>{{comTitile}}</span>
          <router-link :to="{path: '/comloginhead/comMessage'}" tag="span" class="goback">返回<i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
        </div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>上传营业执照</span>
        </div>
        <div class="baseMes conChangeMes">
          <!--<div class="thirdCol" v-if="comTitile==='更换公司名字'">-->
            <!--<div class="nameRow uploadNameRow">-->
              <!--<el-upload-->
                      <!--class="avatar-uploader"-->
                      <!--action="api/set-up/upload-file"-->
                      <!--:data="listName"-->
                      <!--list-type="picture-card"-->
                      <!--:limit="1"-->
                      <!--:before-upload="beforeAvatarUpload"-->
                      <!--:on-preview="handlePictureCardPreview"-->
                      <!--:on-success="handleSuccess"-->
                      <!--:on-remove="handleRemove">-->
                <!--<i class="el-icon-plus"></i>-->
              <!--</el-upload>-->
              <!--<el-dialog :visible.sync="dialogVisible">-->
                <!--<img width="100%" :src="dialogImageUrl" alt="">-->
              <!--</el-dialog>-->
              <!--<div class="explain"> 上传图片格式：*.jpeg|*.jpg| *.png|*.gif;最大限制1M;</div>-->
            <!--</div>-->
            <!--<div class="nameRow">-->
              <!--<span class="comName">公司名称 :</span>-->
              <!--<input class="comNameMes" name="" placeholder="请输入公司名称" v-model="comCony.name">-->
            <!--</div>-->
            <!--<div class="nameRow">-->
              <!--<span class="comName">社会信用统一代码 :</span>-->
              <!--<input class="comNameMes" name="" placeholder="请输入社会信用统一代码" v-model="comCony.num">-->
            <!--</div>-->
          <!--</div>-->
          <div class="thirdCol">
            <div class="nameRow uploadNameRow">
              <el-upload
                      class="avatar-uploader"
                      action="api/set-up/upload-file"
                      :data="list"
                      list-type="picture-card"
                      :limit="1"
                      :before-upload="beforeAvatarUpload"
                      :on-preview="handlePictureCardPreview"
                      :on-success="handleSuccess"
                      :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
              <div class="explain"> 上传图片格式：*.jpeg|*.jpg| *.png|*.gif;最大限制1M;</div>
            </div>
          </div>
        </div>
        <div class="combutton" @click="handlePhone">确认</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "com-chan-name",
    data(){
      return{
          dialogImageUrl: '',
          dialogVisible: false,
          comTitile:'',
          url:'',
          list:{
              path:'/license',
              isSaveQiniu:1
          },
      }
    },
    methods:{
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg'||file.type === 'image/png'||file.type === 'image/gif';
            const isLt2M = file.size / 1024 / 1024 < 1;
            if (!isJPG) {
                this.$message.error('上传图片只能是 jpeg|*.jpg| *.png|*.gif 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 1MB!');
            }
            return isJPG && isLt2M;
        },
        handleRemove(file, fileList) {
            this.url='';
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleSuccess(res, file, fileList){
            if(res.data.status===false){
                this.$message({
                    type:'warning',
                    message:res.data.info
                });
                return false;
            }

            this.url=res.data.title;
        },

        //跟换营业执照
        handlePhone(){
            if(this.url!==''){
                this.$http.post('set-up/upload-business-license',{
                    business_licence:this.url
                }).then(res=>{
                    if(res.data.respCode===1){
                        this.$message({
                            type:'success',
                            message:'上传成功，请等待后台审核'
                        })
                        setTimeout(()=>{
                            this.$router.push({
                                path:'/comloginhead/comMessage'
                            })
                        },2000)
                    }else{
                        this.$message({
                            type:'success',
                            message:'图片上传失败，请重新上传'
                        })
                    }
                }).catch(err=>console.log(err))
            }else{
                this.$message({
                    type:'warning',
                    message:'先上传营业执照在进行提交'
                })
            }
//            if(this.comTitile==='更换营业执照'){
//
//            }else if(this.comTitile==='更换公司名字'){
//                if(this.url!==''&&this.comCony.name!==''&&this.comCony.num!==''){
//                    this.$http.post('set-up/change-company-name',{
//                        business_licence:this.url,
//                        cpy_name:this.comCony.name,
//                        cpy_number:this.comCony.num,
//                    }).then(res=>{
//                        if(res.data.respCode===1){
//                            this.$message({
//                                type:'success',
//                                message:'更换公司名字成功,请等待后台审核'
//                            })
//                            setTimeout(()=>{
//                                this.$router.push({
//                                    path:'/comloginhead/comMessage'
//                                })
//                            },2000)
//                        }else{
//                            this.$message({
//                                type:'warning',
//                                message:res.data.respMsg
//                            })
//                        }
//                    }).catch(err=>console.log(err))
//                }else{
//                    this.$message({
//                        type:'warning',
//                        message:'营业执照、公司名称、社会信用统一代码不能为空'
//                    })
//                }


        }
    },
    created() {
      if(!this.$route.query.name){
          this.comTitile='更换公司名字';
      }else{
          this.comTitile=this.$route.query.name;
      }
      this.$store.commit('changeComIndex', 11);
    }
  }
</script>

<style scoped>
  .avatar-uploader{
    padding-left:135px;
  }
</style>
