<template>
  <div class="comUpLogo">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span>企业logo上传</span>
          <router-link :to="{path: '/comloginhead/comCardManage'}" tag="span" class="goback">返回<i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
        </div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>上传照片</span>
          <span class="explain" style="font-size: 12px;">logo必须透明无底的png图片</span>
        </div>
        <div class="baseMes">
          <div class="thirdCol">
            <div class="nameRow uploadLogo" >
              <div class="addBorders" :style="{backgroundImage: 'url(' + imageUrl + ')' }">
                <span class="iconImg" v-show="!imageUrl"><i class="iconfont icon-jia"></i></span>
                <span class="iconText" v-show="!imageUrl">请上传logo</span>
                <el-upload
                        class="avatar-uploader"
                        action="api/set-up/upload-file"
                        :data="{path:'/logo'}"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                  <i class="el-icon-plus  avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
            <div class="combutton" style="margin-left:15px;margin-top:20px;width: 120px;height:34px;line-height: 34px;font-size: 14px" @click="handleComfig">确认</div>
          </div>
          <div class="thirdCol">
            <img style="width: 450px" src="../../assets/img/wetch_20180315162412.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "com-up-logo",
      data() {
          return {
              imageUrl: '',
              submitUrl:''
          };
      },
      methods: {
          handleAvatarSuccess(res, file) {
              this.imageUrl = URL.createObjectURL(file.raw);
              this.submitUrl=res.data.title
          },
          beforeAvatarUpload(file) {
              const isJPG = file.type === 'image/png';
              const isLt2M = file.size / 1024 / 1024 < 2;

              if (!isJPG) {
                  this.$message.error('上传logo图片只能是 PNG 格式!');
              }
              if (!isLt2M) {
                  this.$message.error('上传logo图片大小不能超过 2MB!');
              }
              return isJPG && isLt2M;
          },
          handleComfig(){
              if(this.submitUrl!==''){
                  this.$http.post('vcard/set-company-logo',{
                      logoName:this.submitUrl
                  })
                      .then(res=>{
                          if(res.data.respCode===1){
                              this.$message({
                                  type:'success',
                                  message:'上传logo成功'
                              });
                          }else{
                              this.$message({
                                  type:'warning',
                                  message:'logo图片上传失败，请重新上传'
                              });
                          }
                      })
                      .catch(err=>{
                          console.log(err)
                      })
              }else{
                  this.$message({
                      type:'warning',
                      message:'logo不能为空'
                  });
              }
          },
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
    width: 148px;
    height: 148px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
