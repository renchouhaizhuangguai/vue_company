<template>
  <div class="startProfAuthen" @click="ulFlag=false">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">发起背景认证</div>
        <div class="baseMesTitles">
          <div class="baseMesTitle">
            <span class="red"></span>
            <span>请输入需认证人信息</span>
          </div>
          <router-link class="startBatch" :to="{path:'/comloginhead/batchApplication'}" tag="div"> <span>发起批量认证</span> <i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
        </div>
        <div class="authenMes">
          <div class="thirdCol">
            <div class="nameRow" style="margin-left: 15px;">
              <span class="comName">姓名</span>
              <input class="comNameMes" name="" placeholder="请输入原姓名" v-model="info.name">
            </div>
            <div class="nameRow">
              <span class="comName">手机</span>
              <input class="comNameMes" name="" placeholder="请输入手机号" v-model="info.phone" @input="handleInput">
            </div>
          </div>
        </div>
        <div class="baseMesTitle">
            <span class="red"></span>
            <span>个性化选择调查内容、2元~662元想查哪个查哪个</span>
            <div class="checkReport" style="margin-left: 30px;color: #647cd8;font-size: 13px;" @click="handleSee">
              <i class="iconfont icon-shiyongbangzhu"></i>
              <span>查看报告说明</span>
            </div>
          </div>


        <div class="resume" >
          <div class="report-title">简历报告 &nbsp;&nbsp;(3天内完成报告交付)</div>
          <div class="resume-border" style="padding:20px 30px;">
            <div class="nameRowBorder one" :class="{doubleCircle: doubleCircley1 === 1}" @click="doubleCircleyOne">
              <div class="nameRow">
                <div class="col-start"><span class="circle"></span><span class="bold">简历认证</span></div>
                <div class="col-center">近10年内工作履历全面调查、候选人没有职信报告时需企业上传简历</div>
                <div class="font-color-red">2元</div>
              </div>
              <div class="nameRow">
                <div class="col-start"><span class="bold" style="margin-left:24px">国内高等学历</span></div>
                <div class="col-center">国内个人最新高等教育的学历、学历类型、毕业结论等信息</div>
                <div class="font-color-red">简历认证赠送</div>
              </div>
              <div class="nameRow">
                <div class="col-start"><span class="bold" style="margin-left:24px">电子简历</span></div>
                <div class="col-center">该候选人尚未上传简历，请代为上传</div>
                <div class="font-color-red">
                  <el-upload
                          v-show="resumeFlag"
                          class="avatar-uploader "
                          action="api/set-up/change-company-name"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload">
                    <div class="btn-resume">上传简历</div>
                  </el-upload>
                  <div class="upState">{{resumeText}}</div>
                  <!--<div class="Mask" @click.stop="handleMask" v-show="info.phone.trim()===''?true:false"></div>-->
                </div>
              </div>
            </div>
            <div class="nameSpecial" style="margin-bottom: 15px;">
              <input :class="{focus:SpecialValue===''?false:true}" type="text" v-model="SpecialValue" placeholder="如有特殊调查需求，请在此说明"/>
            </div>
            <div class="nameRowBorder" style="border: 0"  v-for="view in problem">
              <div class="nameRow" style="margin-top:15px;border: 1px solid #fc725e;background: #fff8f7">
                  <div class="col-start">
                    <span class="circle close_jian" @click="handleDelete(view.companyName)">-</span>
                    <span class="bold" :title="view.companyName">{{view.companyName}}</span>
                  </div>
                  <div class="col-center">{{view.content}}</div>
                  <div class="font-color-red">20元</div>
              </div>
            </div>
            <div class="addSelfQuestion" style="margin-top: 15px;" @click="addProblem">
              <i class="iconfont icon-jia"></i>
              <span>添加自定义问题</span>
            </div>
          </div>
        </div>


        <div class="resume">
          <div class="report-title">附加报告 &nbsp;&nbsp;(1秒出结果，多家权威信息源对比，真是可靠)</div>
          <div class="resume-border" style="padding:20px 30px;padding-top:10px;">
            <div class="nameRowBorders" v-for="view in options3" :key="view.id" style="margin-top: 15px;" v-if="view.id!=='9'">
              <input type="checkbox" class="check" :checked="view.id==='1'?true:false" :disabled="view.id==='1'?true:false" :value="view.id" v-model="additional" @click="handleAdditional(view.id)">
              <div class="nameRow">
                <div class="col-start"><span class="circle"></span><span class="bold">{{view.projectName}}</span></div>
                <div class="col-center">{{view.projectDes}}</div>
                <div class="font-color-red">{{view.price}}元</div>
              </div>
            </div>

            <div class="nameRowBorders solid" :class="{doubleCircle: doubleCircley2 === 1}" style="margin-top: 15px;" v-else="view.id==='9'">
              <div class="nameRow" @click="handleCircley(view.id) " style="border: 0">
                <div class="col-start"><span class="circle"></span><span class="bold">{{view.projectName}}</span></div>
                <div class="col-center">失信被执行、网贷黑名单、税务负面信息中长期实时监控、实时反馈结果</div>
                <div class="font-color-red">{{view.price}}元/月</div>
              </div>
              <div class="nameRow nameRowSpecial" @click="handleCircley(view.id)">
                <div class="col-start">
                  <div class="block"  @click.stop="">
                    <span class="name demonstration">起始月份：</span>
                    <el-date-picker
                            :disabled="doubleCircley2===1?false:true"
                            class="selectAll"
                            v-model="value4"
                            type="month"
                            value-format="yyyy-MM-dd"
                            placeholder="请选择起始月份">
                    </el-date-picker>
                  </div>
                </div>
                <div class="col-start  col-center">
                  <span class="name">有效期：</span>
                  <el-select  @click.stop=""  :disabled="doubleCircley2===1?false:true" v-model="comTime" placeholder="请选择有效期" @change="inputChange(view.id)" @visible-change="inputFocus">
                    <el-option v-for="(item,index) in options1" :key="index" :value="item" ></el-option>
                  </el-select>
                </div>
                <div class="col-start">
                  <span class="name">是否自动续费：</span>
                  <el-select  @click.stop=""  :disabled="doubleCircley2===1?false:true" v-model="comRenew" placeholder="请选择是否自动续费">
                    <el-option v-for="(item,index) in options2" :key="index" :value="item"></el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="resume">
          <div class="resume-border resume-borders">
              <div class="nameRow"><span style="font-size: 13px;">冻结服务费:</span> <span style="color: #fc725e; font-size: 18px;font-weight: bold;">￥{{Money}}</span><span style="color: #ccc;font-size: 13px;margin-left: 30px;">(申请费用暂时冻结，待背调人成功授权后扣除，否则7天过后返还)</span></div>
          </div>
        </div>
        <div class="baseMesTitles">
          <div class="baseMesTitle">
            <span class="red"></span>
            <span>被调查人授权方式选择</span>
            <span style="margin-left: 20px;">(按法律要求、背调涉及私人信息、需经本人授权)</span>
          </div>
        </div>
        <div class="selects">
          <div class="nameRows" style="margin-top: 15px;">
            <div @click="fileLoad=false" class="col-start">
              <input type="radio" name="fileLoad" value="1" v-model="authMode">
              <span class="circle"></span>
              <span class="bolds">短信告知被调查人、登录平台授权</span>
            </div>
            <div  @click="double" class="col-start">
              <input type="radio" name="fileLoad" value="2" v-model="authMode">
              <span class="circle" ></span>
              <span class="bolds" >已与被调查人达成一致、上传授权书后直接背调</span>
            </div>
          </div>
          <div class="filePhone" v-show="fileLoad">
            <p class="phone"><i class="iconfont icon-icon--"></i>上传授权文件照片 <input type="file"></p>
            <span class="text">支持jpg、png、gif、jpeg等格式</span>
            <div class="download" >
              <input type="file" id="file3">
              <label for="file3">授权文件模板下载</label>
            </div>
          </div>
        </div>
        <div class="combutton" @click="handleLaunch">发起申请</div>
      </div>
    </section>


    <Module class="news_white" :moduleTitle="moduleTitle" :isWidth="isWidth" :isHeight="isHeight" v-show="moduleFlag" @close="moduleFlag=false">
      <div class="zx_Choice white news_Choice" :class="{active:zxActive===1}" slot="zx_content">
        <p class="amygdala_See">
          您在职信网完成杏仁任务后，即可获得相对数量的杏仁，在杏仁商城可随意兑换福利商品，商品一旦兑换可以退换。积分规则由职信网制定，并依据国家相关法律法规予以解释和修改。规则以网站公布为准，职信网保留解释权。
        </p>
      </div>
      <div class="zx_Choice news_Choice" slot="zx_content" :class="{active:zxActive===2}">
          <div class="Custom">
            <label for="">公司名字：</label>
            <div class="inputs">
              <input type="text" placeholder="请选择公司名字" v-model="comName" @input="getCompany">
              <ul class="enterName" v-show="ulFlag">
                　 <li @click="handleName(item.entName)" v-for="(item,index) in myData">{{item.entName}}</li>
              </ul>
            </div>
            <textarea @keyup="handleNum" v-model="Custom" maxlength="50" name="" id="" cols="30" rows="10" placeholder="请输入问题内容" ></textarea>
            <div class="bottom">
              <button @click="handleAdd">确认</button>
              <button @click="moduleFlag=false" class="hui">取消</button>
            </div>
            <span class="num">
                {{remian}}/50
            </span>
          </div>
      </div>
    </Module>

  </div>
</template>

<script>
  import Module from '../../components/public/module'
  export default {
    name: "start-prof-authen",
    data() {
          return{
              doubleCircley1:0,//是否选择简历申请
              doubleCircley2:0,
              //模态框
              moduleTitle:'',
              moduleFlag:false,
              isWidth:'',
              isHeight:'',
              info:{name:'',phone:''},//手机和姓名
              zxActive:1,
              remian:0,
              doubleCircles: [],   //判读但自定义问题显示
              fileLoad:false,//上传营业执照是否出现
              comName:'',//附加问题公司名字
              Custom:'',//附加问题内容
              SpecialValue:'',//特殊调查
              value4: '',//日期
              comTime:"",//有效期
              comRenew:"",//是否自动续费
              options1: ['1个月', '2个月', '3个月' ,'4个月' ,'5个月' ,'6个月' ,'7个月' ,'8个月' ,'9个月' ,'10个月' ,'11个月' ,'12个月' ,],
              options2: ['是', '否' ],
              options3:null,
              additional:['1'],//附加版
              authMode:'',//是否是授权书和短信
              authBook:'',//授权书
              myData:[],
              ulFlag:false,//公司名字
              resumeFlag:false,//上传简历按钮是否出现
              resumeText:'未上传',//判断简历是否上传
              Money:0,//冻结服务费
              news:''
          }
    },
    components:{Module},
    computed:{
        problem(){
            return this.doubleCircles
        },
    },
    methods: {
      handleSee(){
          this.moduleTitle='报告说明';
          this. moduleFlag=true;
          this.isWidth=400;
          this.isHeight=170;
          this.zxActive=1;
          let head=window.document.querySelector('.module_head');
          head.style.background='#fff'
          head.querySelector('span').style.color='#333'
          head.querySelector('.iconfont').style.color='#999'
      },
      addProblem(){
          if(this.doubleCircley1===1){
              this.moduleTitle='自定义附加问题';
              this. moduleFlag=true;
              this.isWidth=585;
              this.isHeight=280;
              this.zxActive=2;
              let head=window.document.querySelector('.module_head');
              head.style.background='#fc725e'
              head.querySelector('span').style.color='#fff'
              head.querySelector('.iconfont').style.color='#fff'
          }else{
              this.$message({
                  message:'请先选择简历',
                  type:'warning'
              })
          }
      },
      doubleCircleyOne(){
          this.doubleCircley1=this.doubleCircley1===1?0:1;
          if(this.doubleCircley1===1){
              this.Money+=2;
          }else{
              this.Money-=2;
          }
          if(this.info.phone.trim().length===11&& this.doubleCircley1===1){
              if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.info.phone))){
                  this.$message({
                      type:'warning',
                      message:'不是完整的11位手机号或者正确的手机号前七位'
                  })
                  return false;
              }
              this.$http.post('credit-certification/is-have-resume',{phone:this.info.phone})
                  .then(res=>{
                      if(res.data.respCode===1){
                          if(res.data.data[0]===0){
                              this.resumeFlag=true;
                              this.resumeText='未上传';
                          }else{
                              this.resumeFlag=false;
                              this.resumeText='已上传';
                          }
                      }
                  })
                  .catch(err=>{
                      console.log(err)
                  })
          }else{
              this.resumeFlag=false;
              this.resumeText='未上传';
          }
          if(this.doubleCircley1===0){
              this.doubleCircles=[];
          }
      },
      handleNum(){
          this.remian=this.Custom.length
      },
      double(){
        this.fileLoad=true
      },
      //添加自定义问题
      handleAdd(){
          if(this.comName===''||this.Custom===''){
              this.$message({
                  type:'warning',
                  message:'不能为空'
              });
              return false;
          }else{
              this.doubleCircles.push({companyName:this.comName,content:this.Custom});
              this.comName='';
              this.Custom='';
              this.moduleFlag=false;
              this.remian=0;
              this.Money+=20;
          }
      },
      //删除自定义问题
      handleDelete(name){
          this.$confirm('确认删除此条数据吗？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              this.doubleCircles=this.doubleCircles.filter(v=>{
                  return v.comName!==name
              })
              this.$message({
                  type: 'success',
                  message: '删除成功!'
              });
              this.Money-=20;
          }).catch(() => {
              this.$message({
                  type: 'info',
                  message: '已取消删除'
              });
          });
      },
      //点击附加信息id添加到数组
      handleAdditional(id){
          let m=this.options3.filter(view=>{
              return view.id===id
          });
          if(this.additional.some(view=>view===id)){
              this.Money-=parseFloat(m[0].price)
          }else{
              this.Money+=parseFloat(m[0].price)
          }
      },
      handleCircley(id){
          let m=this.options3.filter(view=>{
              return view.id===id
          });
          this.doubleCircley2 === 0 ? this.doubleCircley2 = 1 : this.doubleCircley2 = 0;
          if(this.doubleCircley2 === 0){
              this.value4='';
              let hou=this.comTime.substring(0,this.comTime.length-2);
              this.Money-=parseFloat(hou*m[0].price)
              this.comTime='';
              this.comRenew='';
          }
          if(this.additional.some(view=>view===id)){
              this.additional=this.additional.filter(view=>view!==id)
          }else{
              this.additional.push(id)
          }
      },
      inputFocus(){
        if(!window.document.querySelector('.el-select .el-input--suffix').classList.contains('is-focus')){
            this.news=this.comTime;
        }
      },
      inputChange(id){
          let m=this.options3.filter(view=>{
              return view.id===id
          });
          let qian=this.news.substring(0,this.news.length-2),hou=this.comTime.substring(0,this.comTime.length-2);
          this.Money=parseFloat(this.Money-qian*m[0].price)+parseFloat(hou*m[0].price);
      },
      //公司名字模糊查询
      getCompany(){
          this.$http.get('/thirdparty/get-company-name',{params: { 'company_name': this.comName }}).then(res=>{
              if(res.data.data.length>0){
                  this.ulFlag=true
              }else{
                  this.ulFlag=false
              }
              this.myData=res.data.data;
          }).catch(error=> console.log(error))
      },
      handleName(name){
          this.ulFlag=false
          this.comName=name
      },
      //上传简历
      handleAvatarSuccess(res, file) {
        if(URL.createObjectURL(file.raw)){

        }
//            this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
          let testmsg=file.name.substring(file.name.lastIndexOf('.')+1);
          let extension = testmsg === 'doc'|| testmsg === 'pdf';
          const isLt2M = file.size / 1024 / 1024 < 10;

          if (!extension) {
              this.$message.error('简历只能上传word、pdf格式的文件!');
          }
          if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 10MB!');
          }
          return extension && isLt2M;
      },
      //判断是否有简历
      handleInput(){
          if(this.info.phone.trim().length===11){
              if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.info.phone))){
                  this.$message({
                      type:'warning',
                      message:'不是完整的11位手机号或者正确的手机号前七位'
                  })
                  return false;
              }
              this.$http.post('credit-certification/is-have-resume',{phone:this.info.phone})
                  .then(res=>{
                      if(res.data.respCode===1){
                          if(res.data.data[0]===0){
                              if(this.doubleCircley1===1){
                                  this.resumeFlag=true;
                                  this.resumeText='未上传';
                              }
                          }else{
                              this.resumeFlag=false;
                              this.resumeText='已上传';
                          }
                      }
                  })
                  .catch(err=>{
                      console.log(err)
                  })
          }else if(this.info.phone.trim().length!==11){
              this.resumeFlag=false;
              this.resumeText='未上传';
          }
      },
      //点击提交
      handleLaunch(){
          if(this.info.name.trim()===''||this.info.phone.trim()===''){
              this.$message({
                  type:'warning',
                  message:'姓名或手机号不能为空'
              });
              return false;
          }
          if(this.authMode.trim()===''){
              this.$message({
                  type:'warning',
                  message:'请选择被调查人授权方式'
              });
              return false;
          }
//          if(this.){
//
//          }
          if(this.authMode==='2'&&this.authBook===''){
              this.$message({
                  type:'warning',
                  message:'请上传授权书'
              });
              return false;
          }
          if(this.doubleCircley2===1&&(this.value4===''||this.comTime===''||this.comRenew==='')){
              this.$message({
                  type:'warning',
                  message:'已勾选个人负面信息实时监控则起始月份、有效期和是否自动续费不能为空'
              });
              return false;
          }
          this.$http.post('credit-certification/initiating-background-auth',{
              name:this.info.name,
              phone:this.info.phone,
              resumeApply:this.doubleCircley1,
              additionalApply:JSON.stringify(this.additional),
              authMode:this.authMode,
              authBook:'',
              resumeFile:'',
              specialDescription:this.SpecialValue,
              negativeInfoControl:JSON.stringify({startMonth:this.value4,termOfValidity:this.comTime.slice(0,1),autoRenewal:this.comRenew.trim()==='是'?1:0}),
              customProblem:JSON.stringify(this.doubleCircles),
          }).then(res=>{
              if(res.data.respCode===1){
                  this.$message({
                      type:'success',
                      message:'发起背景调查成功'
                  })
              }else{
                  this.$message({
                      type:'warning',
                      message:res.data.respMsg
                  });
              }
          })
              .catch(err=>console.log(err))
      }
    },
    created() {
      this.$http.post('credit-certification/add-edition',{source:1})
          .then(res=>{
              if(res.data.respCode===1){
                  this.options3=res.data.data
              }else{
                  this.$message({
                      type:'warning',
                      message:res.data.respMsg
                  })
              }
          })
          .catch(err=>{
              console.log(err)
          })
      this.$store.commit('changeComIndex', 2);
    },
  }
</script>
<style scoped="">
  .inputs{
    width: 300px;
    height: 30px;
    position: absolute;
    top: 16px;
    left: 106px;
  }
  .enterName{
    width: 100%;
    max-height: 200px;
    background: #fff;
    position: absolute;
    top: 30px;
    z-index: 100;
    border: 1px solid #ededed;
    left: 0;
    border-radius: 10px;
    overflow-y: scroll;
  }
  .enterName::-webkit-scrollbar{
    display: none;
  }
  .enterName li{
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #333;
    padding-left: 20px;
    cursor: pointer;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .enterName li:hover{
    background: #fc725e;
    color: #fff;
  }
</style>
