<template>
  <div class="comUpLicence">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span>上传营业执照</span>
          <router-link :to="{path: '/comloginhead/comMessage'}" tag="span" class="goback">返回>></router-link>
        </div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>上传照片</span>
        </div>
        <div class="baseMes conChangeMes">
          <div class="thirdCol">
            <div class="nameRow uploadNameRow">
              <div class="addBorder"><i class="iconfont icon-jia"></i></div>
              <div class="explain"> 上传图片格式：*.jpeg|*.jpg| *.png|*.gif;最大限制1M;</div>
              <input class="inputFile" type="file" value="导入">
            </div>
            <div class="nameRow">
              <span class="comName">公司名称 :</span>
              <input class="comNameMes" name="" placeholder="请输入公司名称">
            </div>
            <div class="nameRow">
              <span class="comName">社会信用统一代码 :</span>
              <input class="comNameMes" name="" placeholder="请输入社会信用统一代码">
            </div>
          </div>
        </div>
        <div class="combutton">确认</div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "com-up-licence"
    }
</script>

<style scoped>

</style>
