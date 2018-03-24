<template>
    <div class="comMesChange">
      <section class="section">
        <div class="comBaseMes">
          <div class="mesTitle">
            <span>修改企业资料</span>
            <router-link :to="{path: '/comloginhead/comMessage'}" tag="span" class="goback">返回<i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
          </div>
          <div class="baseMes conChangeMes">
            <div class="thirdCol">
              <div class="nameRow">
                <span class="comName">企业性质 :</span>
                <el-select  v-model="inforList.cpm_property" placeholder="请选择企业性质" >
                  <el-option v-for="(item,index) in options1" :key="index" :value="item.val"></el-option>
                </el-select>
              </div>
              <div class="nameRow">
                <span class="comName">所属行业 :</span>
                <el-select  v-model="inforList.profession" placeholder="请选择所属行业">
                  <el-option v-for="(item,index) in options2" :key="index" :value="item"></el-option>
                </el-select>
              </div>
              <div class="nameRow">
                <span class="comName">企业规模 :</span>
                <el-select  v-model="inforList.cpm_scale" placeholder="请选择企业规模">
                  <el-option v-for="(item,index) in options3" :key="index" :value="item.val"></el-option>
                </el-select>
              </div>
              <div class="nameRow">
                <span class="comName">注&nbsp;&nbsp;册&nbsp;地 :</span>
                <el-cascader
                        style="width: 40%;margin-left:13px;"
                        :options="options4"
                        v-model="regArea"
                        @active-item-change="handleItemChange"
                        :props="props"
                ></el-cascader>
              </div>
              <div class="nameRow">
                <span class="comName">企业网址 :</span>
                <input class="comNameMes" name="" v-model="inforList.web" placeholder="请输入企业网址">
              </div>

              <div class="nameRow">
                <span class="comName">详细地址 :</span>
                <input class="comNameMes" name="" v-model="inforList.address" placeholder="请输入详细地址">
              </div>
              <div class="nameRow">
                <span class="comName">企业邮箱 :</span>
                <input class="comNameMes" name="" v-model="inforList.contact_email" placeholder="请输入企业邮箱">
              </div>

              <div class="nameRow">
                <span class="comName">固定电话 :</span>
                <input class="comNameMes" name="" v-model="inforList.contact_tel" placeholder="固定电话">
              </div>
          </div>
          </div>
          <div class="combutton" @click="handleConfirm">确认</div>
        </div>
      </section>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        name: "com-mes-change",
        data(){
          return{
              options1:[{val:'外资',label:1},{val:'合资',label:2},{val:'民营',label:3},{val:'国企',label:4},{val:'上市公司',label:5},{val:'事业单位',label:6},{val:'政府机关',label:7},{val:'公益组织/非盈利机构',label:8}],
              options2:['1','2'],
              options3:[{val:'1~50人',label:1},{val:'100~500人',label:2},{val:'1000~2000人',label:3},{val:'5000~10000人',label:4},{val:'10000以人',label:5}],
              inforList:[
                  {cpm_property:''},
                  {profession:''},
                  {cpm_scale:''},
//                  {regArea:''},
                  {web:''},
                  {address:''},
                  {contact_email:''},
                  {contact_tel:''}
              ],
              regArea:[],

              /*数据源*/
              options4: [{
                  value:1,
                  label: '江苏',
                  cities: []
              }],
              props: {
                  value: 'label',
                  children: 'cities'
              }
          }
      },
        computed:{
            //转换公司性质为数字
            cpm_propertyID(){
               return this.options1.filter(view=>{
                   return view.val===this.inforList.cpm_property
               })[0].label
            },
            //转换企业规模为数字
            cpm_scale(){
                return this.options3.filter(view=>{
                    return view.val===this.inforList.cpm_scale
                })[0].label
            },
            //转换
        },
        methods: {
            handleItemChange(val) {
                console.log(val);
//                if (val.indexOf('江苏') > -1 && !this.options4[0].cities.length) {
//                    this.options4[0].cities = [{
//                        label: '南京'
//                    }];
//                }
            },
            //确认修改
            handleConfirm(){
                this.$http.post('enterprise/update-company',{
                    cpm_property:this.cpm_propertyID,
                    cpm_scale:this.cpm_scale,
                    profession:this.inforList.profession,
                    regArea:'55,44',
                    web:this.inforList.web,
                    address:this.inforList.address,
                    contact_email:this.inforList.contact_email,
                    contact_tel:this.inforList.contact_tel,
                })
                    .then(res=>{
                        if(res.data.respCode===0){
                            this.$message({
                                type:'warning',
                                message:res.data.respMsg
                            })
                        }else if(res.data.respCode===1){
                            this.$message({
                                type:'success',
                                message:res.data.respMsg
                            });
                            let token=this.$local.fetch('company_token');
                                token.cpm_property=this.inforList.cpm_property;
                                token.cpm_scale=this.inforList.cpm_scale;
                                token.profession=this.inforList.profession;
                                token.regArea='55,44';
                                token.web=this.inforList.web;
                                token.address=this.inforList.address;
                                token.contact_email=this.inforList.contact_email;
                                token.contact_tel=this.inforList.contact_tel;
                                this.$local.save('company_token',token);
                            setTimeout(()=>{
                                this.$router.push({
                                    path:'/comloginhead/comMessage'
                                })
                            },2000)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        },
        created() {
            this.inforList=this.$local.fetch('company_token');
            this.$store.commit('changeComIndex', 11);
      }
    }
</script>

<style scoped>
.el-select{
  width: 40%;
  margin-left:10px;
}
</style>
