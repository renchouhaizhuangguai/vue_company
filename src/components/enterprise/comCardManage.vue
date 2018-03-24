<template>
  <div class="cardManager">
    <section class="section">
      <div class="comBaseMes">
        <div class="thirdCol">
          <span class="circleBg"><i class="iconfont icon-iconfontpaixingbang"></i></span>
          <div class="func">
            <div class="goSet">
              <span class="setUser">名片管理员</span>
              <router-link tag="span" :to="{path: '/comloginhead/comCardSetUser'}" class="goback">去设置</router-link>
            </div>
            <div class="goSetExplain">企业名片数据一手掌控</div>
          </div>
        </div>
        <div class="thirdCol">
          <span class="circleBg"><i class="iconfont icon-iconfontpaixingbang"></i></span>
          <div class="func">
            <div class="goSet">
              <span class="setUser">统一模板</span>
              <router-link tag="span" :to="{path: '/comloginhead/comUniteImg'}" class="goback">去上传</router-link>
            </div>
            <div class="goSetExplain">彰显企业独特气质</div>
          </div>
        </div>
        <div class="thirdCol">
          <span class="circleBg"><i class="iconfont icon-iconfontpaixingbang"></i></span>
          <div class="func">
            <div class="goSet">
              <span class="setUser">企业logo</span>
              <router-link tag="span" :to="{path: '/comloginhead/comUpLogo'}" class="goback">去上传</router-link>
            </div>
            <div class="goSetExplain">彰显企业独特气质</div>
          </div>
        </div>
        <div class="thirdCol">
          <span class="circleBg"><i class="iconfont icon-iconfontpaixingbang"></i></span>
          <div class="func">
            <div class="goSet">
              <span class="setUser">企业“秀”</span>
              <router-link tag="span" :to="{path: '/comloginhead/comShow'}" class="goback">去设置</router-link>
            </div>
            <div class="goSetExplain">深度推广、宣传</div>
          </div>
        </div>
        <div class="thirdCol thirdSpecial">
          <div class="funcs">
            <div class="goSet"><span>专属客户顾问:</span> <span>单梦莹</span></div>
              <div class="goSetExplain"><span>联系电话:</span> <span>13223456342</span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" style="padding-top:0;">
      <div class="comBaseMes">
        <div class="mesTitle">员工名片管理</div>
        <div class="Auth_content">
          <div class="content_head">
            <ul class="ul_option" id="option">
              <li class="active" @click="moduleShow1=1;moduleTitle='单人添加员工名片'">单人添加</li>
              <li class="active">批量添加</li>
            </ul>
            <div class="search">
              <input class="search_input" type="text" placeholder="搜索人才姓名、手机号">
              <i class="button iconfont icon-sousuo2"></i>
            </div>
            <a class="downLoadFile"><i class="iconfont icon-xiazai"></i> 批量添加模板下载</a>
          </div>
          <div class="content_table active">
            <table class="list">
              <thead>
              <tr>
                <th>添加时间</th>
                <th>员工姓名</th>
                <th>手机号</th>
                <th>员工职位</th>
                <th>员工部门</th>
                <th>名片状态</th>
                <th>移除</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="view in list" :key="view.vc_id">
                <td>{{view.create_time}}</td>
                <td>{{view.user_name}}</td>
                <td>{{view.phone}}</td>
                <td>{{view.post}}</td>
                <td>{{view.department}}</td>
                <td v-if="view.status==='3'"><span class="Not_generated">未认证</span></td>
                <td v-if="view.status==='1'" class="text_color">已认证</td>
                <td><a class="a_jump" href="javascript:void(0);" @click="handleDelete(view.vc_id)"><i class="iconfont icon-shanchu"></i><span>删除</span></a></td>
              </tr>
              </tbody>
            </table>
            <page :total="100" :display="10" :currentPage="currentPage"></page>
          </div>
        </div>
      </div>
    </section>
    <!--单人添加企业认证管理-->
    <Module :moduleTitle="moduleTitle" isWidth="500" isHeight="410" v-show="moduleShow1===1" @close="handleClose1">
      <div class="zx_Choice" slot="zx_content">
        <div class="authen">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">姓&nbsp;&nbsp; 名 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入姓名" v-model="AddCard.name">
        </div>
        <div class="authen authen1">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">手机号 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入手机号" v-model="AddCard.phone">
        </div>
        <div class="authen authen1">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">部门 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入部门" v-model="AddCard.department">
        </div>
        <div class="authen authen1">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">岗位 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入岗位" v-model="AddCard.post">
        </div>
        <div class="combutton" @click="handleSubmit">确认</div>
      </div>
    </Module>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  import Page from '../public/pagination'
  import Module from '../public/module'
  export default {
    name: "com-card-manage",
    components: {
      Page,
      Module
    },
    data() {
      return{
        currentPage: 1,
        moduleShow1: 0,      //单人添加弹框
        moduleTitle:'',
        list:[],
        AddCard:{name:'',phone:'',department:'',post:''}
      }
    },
    methods: {
      handleClose1() {
        this.moduleShow1 = 0;
      },
        //删除名片
      handleDelete(id){
          this.$confirm('你确认删除这条数据吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              this.$http.post('vcard/delete-vcard',{
                  vcId:id
              })
                  .then(res=>{
                      if(res.data.respCode===1){
                          this.$message({
                              type: 'success',
                              message: '删除成功!'
                          });
                          this.list=this.list.filter(view=>{
                              return view.vc_id!== id
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
      },
        //单人添加名片
        handleSubmit(){
          if(this.AddCard.name!==''&&this.AddCard.phone!==''&&this.AddCard.department!==''&&this.AddCard.post!==''){
            this.$http.post('vcard/single-add-card',{
                name:this.AddCard.name,
                phone:this.AddCard.phone,
                department:this.AddCard.department,
                post:this.AddCard.post,
            }).then(res=>{
                if(res.data.respCode===1){
                    this.$message({
                        type:'success',
                        message:'添加名片成功',
                    });
                    this.AddCard={};
                    this.$http.get('vcard/vcard-list').then(res=>{
                        if(res.data.respCode===1){
                            this.list=res.data.data
                        }
                    }).catch(err=>console.log(err))
                    this.moduleShow1 = 0;
                }else{
                    this.$message({
                        type:'warning',
                        message:res.data.respMsg
                    });
                }
            })
          }else{
              this.$message({
                  type:'warning',
                  message:'姓名、手机号、职位及部门不能为空'
              })
          }
        }
    },
    created() {
      this.$http.get('vcard/vcard-list').then(res=>{
          if(res.data.respCode===1){
              this.list=res.data.data
          }
      }).catch(err=>console.log(err))
      this.$store.commit('changeComIndex', 7);
    }
  }
</script>

<style scoped>

</style>
