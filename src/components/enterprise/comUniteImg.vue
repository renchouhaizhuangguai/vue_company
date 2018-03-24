<template>
  <div class="comUniteImg">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span>统一模板</span>
          <router-link :to="{path: '/comloginhead/comCardManage'}" tag="span" class="goback">返回<i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
        </div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>上传名片模板</span>
        </div>

        <div class="baseMes">
          <div class="thirdCol">
            <div class="nameRow uploadLogo">
              <div class="addBorders" :style="{backgroundImage: 'url(' + imageUrl + ')' }">
                <span class="iconText" v-show="!imageUrl">立即上传</span>
              </div>
              <span class="explains" v-show="!imageUrl">请上传背景图</span>
              <el-upload
                      class="avatar-uploader"
                      action="api/set-up/upload-file"
                      :data="upload"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                <i class="el-icon-plus  avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="explain">
              请上传背景图片，尺寸大小为 <span style="color: #fe3d36;">750*330</span>px，图片格式：jpg、jpeg、
              png，gif等格式
            </div>
            <div class="combutton" @click="handleComfig">确认</div>
          </div>
          <div class="thirdCol" style="margin-left: 140px;">
            <img src="../../assets/public_image/preview.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "com-unit-img",
        data() {
            return {
                imageUrl: '',
                submitUrl:'',
                upload:{
                    path:'/template',
                }
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                console.log(res.data.title)
                this.submitUrl=res.data.title
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg'||file.type === 'image/png'||file.type === 'image/gif';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG||PNG||GIF 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleComfig(){
                if(this.submitUrl.trim()!==''){
                    this.$http.post('vcard/set-card-template',{
                        templateName:this.submitUrl
                    })
                        .then(res=>{
                            if(res.data.respCode===1){
                                this.$message({
                                    type:'success',
                                    message:'上传名片模板成功'
                                });
                            }else{
                                this.$message({
                                    type:'warning',
                                    message:'公司模板不能为空'
                                });
                            }
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                }else{
                    this.$message({
                        type:'warning',
                        message:'公司模板不能为空'
                    });
                }
            }
        }
    }
</script>

<style scoped>
  .avatar-uploader{
    width: 100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 10;
    opacity: 0;
  }
  .avatar-uploader .el-upload.el-upload--text{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 375px;
    height: 165px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
