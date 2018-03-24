<template>
  <div class="admin">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">管理员</div>
        <!--<div class="baseMesTitle">-->
          <!--<span class="red"></span>-->
          <!--<span>职趣名片数据管理员 &nbsp;&nbsp;<span class="mark">注:名片数据管理员可在个人端查看企业所有员工的好友添加数据与添加的客户信息。</span></span>-->
        <!--</div>-->
        <!--<div class="cardAdmin" v-show="hascarduser === 1">-->
          <!--<div class="cardArea">-->
            <!--<img src="../../assets/public_image/admin1.png" alt="">-->
            <!--<span>您还未设置名片数据管理员</span>-->
          <!--</div>-->
          <!--<router-link :to="{path:'/comloginhead/comCardSetUser'}" tag="div" class="combutton">现在设置</router-link>-->
        <!--</div>-->
        <!--<div class="cardAdmin" v-show="hascarduser === 2">-->
          <!--<div class="cardArea">-->
            <!--<div class="cardAreaTitle">管理员</div>-->
            <!--<div class="cardUserName">-->
              <!--<img src="../../assets/public_image/adminUserName.png" alt="">-->
              <!--<span class="cardName">姓名 :</span>-->
              <!--<span class="nameText">{{adminInfo.name}}</span>-->
            <!--</div>-->
            <!--<div class="cardUserName">-->
              <!--<img src="../../assets/public_image/adminUserPhone.png" alt="">-->
              <!--<span class="cardName">手机 :</span>-->
              <!--<span class="nameText">{{adminInfo.phone}}</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<router-link :to="{path: '/comloginhead/comCardSetUser'}" tag="div" class="combutton">更换管理员</router-link>-->
        <!--</div>-->

        <div class="baseMesTitle">
          <span class="red"></span>
          <span>企业认证管理员 &nbsp;&nbsp;<span class="mark">注:名片数据管理员可在个人端查看企业所有员工的好友添加数据与添加的客户信息。</span></span>
         </div>
        <div class="list" style="overflow: hidden">
          <div class="cardAdmin" style="float: left;margin-right:20px;" v-for="view in certifiedList" :key="view.ca_id">
            <div class="cardArea">
              <div class="cardAreaTitle">
                管理员
              </div>
              <div class="cardUserName">
                <img src="../../assets/public_image/adminUserName.png" alt="">
                <span class="cardName">姓名 :</span>
                <span class="nameText">{{view.rename===''?view.user_name:view.rename}}</span>
              </div>
              <div class="cardUserName">
                <img src="../../assets/public_image/adminUserPhone.png" alt="">
                <span class="cardName">手机 :</span>
                <span class="nameText">{{view.retelephone}}</span>
              </div>
            </div>
            <div class="combuttons">
              <div class="combutton" @click="handleDelete(view.ca_id)">删除</div>
            </div>
          </div>
          <div class="cardAdmin"  style="float: left;margin-right:20px;">
            <div class="cardArea">
              <img src="../../assets/public_image/admin1.png" alt="">
              <span>您还未设置企业认证管理员</span>
            </div>
            <div class="combuttons">
              <div class="combutton" @click="moduleShow1 = 1">单人添加</div>
              <div class="combutton" @click="moduleShow2 = 1">批量添加</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--单人添加企业认证管理-->
    <Module moduleTitle="单人添加企业认证管理员" isWidth="400" isHeight="300" v-show="moduleShow1===1" @close="handleClose1">
      <div class="zx_Choice" slot="zx_content">
        <div class="authen">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">姓&nbsp;&nbsp; 名 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入姓名" ref="username">
        </div>
        <div class="authen authen1">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">手机号 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入手机号" ref="cellphone">
        </div>
        <div class="authen authen1">
          <div class="styleImg">
            <span>冻结服务费 : &nbsp;</span>
            <span class="serverCost">￥2</span>
            <span class="mark">(注: 注册使用后扣除)</span>
          </div>
        </div>
        <div class="combutton" @click="handleAdd">确认</div>
      </div>
    </Module>

    <!--批量添加企业认证管理员-->
    <Module moduleTitle="批量添加企业认证管理员" isWidth="680" isHeight="265" v-show="moduleShow2===1" @close="handleClose2">
      <div class="zx_Choice" slot="zx_content">
        <div class="authen">
          <a class="styleImg" href="">excel模板下载</a>
          <input class="inputFile" type="file" value="导入">
          <div class="combutton">导入</div>
          <input class="nameText comNameMes" name="" value="未上传excel文件" readonly>
          <span class="edit line">删除</span>
          <span class="line">|</span>
          <span class="edit line">预览</span>
        </div>
        <div class="authen authen1">
          <div class="styleImg">
            <span>冻结服务费 : &nbsp;</span>
            <span class="serverCost">￥2</span>
            <span class="mark">(注: 注册使用后扣除)</span>
          </div>
        </div>
        <div class="combutton">确认</div>
      </div>
    </Module>
  </div>
</template>

<script>
  import Module from '../../components/public/module';
  export default {
    name: "admin",
    components: {
      Module
    },
    data() {
      return{
        hascarduser: 1,   //判断是否有名片数据管理员 1是没有， 2 是有
        moduleShow1: 0,    //判断单人添加名片数据管理员弹框是否现实  0 不显示， 1 显示
        moduleShow2: 0,    //判断单人添加名片数据管理员弹框是否现实  0 不显示， 1 显示
//        adminInfo:{
//            name:'',
//            phone:'',
//        },
        certifiedList:[{
            ca_id:'',
            user_name:'',
            retelephone:'',
            rename:''
        }]
      }
    },
    methods: {
      handleClose1() {
        this.moduleShow1 = 0;
      },
      handleClose2() {
        this.moduleShow2 = 0;
      },

      //单人添加管理员
        handleAdd(){
        if(this.$refs.username.value!==''&&this.$refs.cellphone.value!==''){
            this.$http.post('set-up/save-single-certified-manage',{
                username:this.$refs.username.value,
                cellphone:this.$refs.cellphone.value
            })
                .then(res=>{
                    if(res.data.respCode===1){
                        this.$message({
                            type:'success',
                            message:'添加成功'
                        })
                        //获取企业认证管理员
                        this.$http.get('set-up/certified-manage')
                            .then(res=>{
                                if(res.data.respCode===1){
                                    this.certifiedList=res.data.data
                                }
                            })
                            .catch(err=>{
                                console.log(err)
                            })
                        this.moduleShow1 = 0;
                    }else {
                        this.$message({
                            type:'warning',
                            message:res.data.respMsg
                        })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        }else{
            this.$message({
                type:'warning',
                message:'姓名或者手机号不能为空'
            })
        }
      },
        //删除
        handleDelete(id){
            this.$confirm('你确认删除此管理员吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$http.post('set-up/delete-certified-manage',{
                    id:id
                })
                    .then(res=>{
                        if(res.data.respCode===1){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.certifiedList=this.certifiedList.filter(view=>{
                                return view.ca_id!== id
                            })
                        }else{
                            this.$message({
                                type: 'warning',
                                message: res.data.respMsg
                            });
                        }

                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    },
    created() {
        //获取企业认证管理员
       if(this.certifiedList[0].ca_id===''){
          this.$http.get('set-up/certified-manage')
              .then(res=>{
                  if(res.data.respCode===1){
                      this.certifiedList=res.data.data
                  }
              })
              .catch(err=>{
                  console.log(err)
              })
      }
//       //获取职趣名片管理员
//       if(this.adminInfo.name===''){
//          this.$http.get('vcard/card-manage')
//              .then(res=>{
//                  if(res.data.respCode===0){
//                      this.hascarduser=1
//                  }else if(res.data.respCode===1){
//                      this.hascarduser=2;
//                      this.adminInfo=res.data.data
//                  }
//              })
//              .catch(err=>{
//                  console.log(err)
//              })
//      }
      this.$store.commit('changeComIndex', 12);
    }
  }
</script>

<style scoped>

</style>
