<template>
    <div>
        <Banner></Banner>
        <!--线上背调-->
        <section class="public_module">
            <div class="garden"></div>
            <div class="Square">
                <div class="Square_box"></div>
            </div>
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">线上背调，背景调查新方式</h4>
                    <p class="content">整合多家权威数据源为信息准确性保驾护航</p>
                </div>
                <div class="Online_back_tone">
                    <div class="Letter float">
                        <ul>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="0.3s"><span>百人背调，一键完成</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="0.9s"><span>2~320元超低价体验</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="1.5s"><span>随取随看，平台电子化备案</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="2.1s"><span>纯线上操作，企业背书真实性</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="2.7s"><span>最快1秒，最慢3天内交付报告</span></li>
                        </ul>
                        <div class="letter_box">
                            职信网
                        </div>
                    </div>
                    <div class="Letter tradition float">
                        <ul>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="0.6s"><span>重复接受背调，记录无法保存</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="1.2s"><span>2~1000~5000元昂贵费用</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="1.8s"><span>报告内容口口相传、准确性难以保证</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="2.4s"><span>到处打电话确认信息</span></li>
                            <li class="experience wow fadeInRight animated animated animated" data-wow-delay="2.7"><span>周期3~7天</span></li>
                        </ul>
                        <div class="tradition_box">
                            传统<br>背调
                        </div>
                    </div>
                    <img class="vs" :src="require('@/assets/img/n_vs.png')" alt="">
                </div>
            </div>
        </section>
        <!--背景图片-->
        <Back :back="require('@/assets/public_image/background-map2.jpg')" first-mes="大数据帮你解决背景调查问题" second-mes="全线上操作、流程记录，不存在人为篡改、主观判断"></Back>
        <!--线上背调-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">专业背景调查体系，30项维度</h4>
                    <p class="content">满足99%个性化需求</p>
                </div>
                <div class="enter_3d">
                    <svg :width='width' :height='height' @mousemove='listener($event)' xmlns="http://www.w3.org/2000/svg">
                        <a :href="tag.href" v-for='tag in tags' style="display: block">
                            <text :x='tag.x' :y='tag.y' :font-size='16' :stroke="tag.color" fill="#fff" :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
                        </a>
                    </svg>
                </div>
            </div>
        </section>
        <!--背景图片-->
        <Back :back="require('@/assets/public_image/background-map1.jpg')" first-mes="企业线上背书，保证职信报告真实性" second-mes="职信报告中每一段经历皆在对应的企业进行电子化备案"></Back>
        <!--Get&ndash-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">一键申请，轻松Get职信报告</h4>
                    <p class="content">30秒操作，坐等结果</p>
                </div>
                <div class="enter_get">
                    <ul class="enter_get_ul">
                        <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.3s">
                            <div class="li_top">
                                Step 01
                            </div>
                            <div class="li_bottom">
                                <i class="iconfont icon-faqi"></i>
                                <span>发起背景认证</span>
                            </div>
                            <p>企业</p>
                        </li>
                        <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.6s">
                            <div class="li_top">
                                Step 02
                            </div>
                            <div class="li_bottom">
                                <i class="iconfont icon-shouquan"></i>
                                <span>候选人授权</span>
                            </div>
                            <p>个人</p>
                        </li>
                        <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.9s">
                            <div class="li_top">
                                Step 03
                            </div>
                            <div class="li_bottom">
                                <i class="iconfont icon-jilu"></i>
                                <span>获得职信报告</span>
                            </div>
                            <p>企业/个人</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!--背景图片-->
        <Back :back="require('@/assets/public_image/background-map6.jpg')" first-mes="1秒～2天完成报告" second-mes="附加报告1秒即出，简历报告3天交付"></Back>
        <!--报告样式-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">背景调查报告样式</h4>
                </div>
                <div class="letter_report">
                    <ul class="nav_li float">
                        <li class="active" data-identifier="1">实名认证</li>
                        <li data-identifier="2">个人信息</li>
                        <li data-identifier="3">教育经历</li>
                        <li data-identifier="4">工作经历</li>
                        <li data-identifier="5">语言技能</li>
                        <li data-identifier="6">自定义问题</li>
                        <li data-identifier="7">个人工商</li>
                        <li data-identifier="8">不良记录</li>
                        <li data-identifier="9">职业技能</li>
                    </ul>
                    <div class="Computer float_right nav_Computer">
                        <div class="Computer_box">
                            <img :src="require('@/assets/public_image/n_1.png')" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--背景图片-->
        <Back :back="require('@/assets/public_image/background-map7.jpg')" first-mes="2~320元报告费用" second-mes="成本仅为传统背调10%"></Back>
        <!--职信独家逆向测评技术专利-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">职信独家逆向测评技术专利</h4>
                    <p class="content">1、智能解析 2、数据结构化拆分 3、结果精准提炼</p>
                </div>
                <div class="enter_Evaluation">
                    <ul>
                        <li>
                            <div class="li_box"><i>1</i><h4>独家首创</h4></div>
                            <p>首创性地将逆向思维运用于,人力资源 测评技术</p>
                        </li>
                        <li>
                            <div class="li_box"><i>2</i><h4>数据规模</h4></div>
                            <p>与超过3千万家企业展开合作,拥有近 60万组企业员工数据</p>
                        </li>
                        <li>
                            <div class="li_box"><i>3</i><h4>模型测评</h4></div>
                            <p>依托众多企业的人才性格及能力分布 与模型本身的预测进行对比验证，对 模型预测结论进行适当改善，目前测 评准确率已超过90%</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>
<script>
    import Back from '@/components/public/backImage'
    import Banner from '@/components/public/banner'
    import Footer from '@/components/public/footer'
    import {mapActions} from 'vuex'
    export default {
      name:'EnterAuntent',
      components:{Back,Banner,Footer},
      data() {
        return{
            width:700,
            height:400,
            tagsNum:20,
            list:['团队','工作类型','获奖','学历信息','离职时间','个人信息','学历信息','部门','获奖','部门','绩效','岗位','入职时间','绩效','岗位','职业风格','工作类型','个人信息','职业风格','团队'],
            RADIUS:150,
            speedX:Math.PI/360,
            speedY:Math.PI/360,
            tags: []
        }
      },
        computed:{
            CX(){
                return this.width/2;
            },
            CY(){
                return this.height/2;
            }
        },
        methods: {
            rotateX(angleX){
                var cos = Math.cos(angleX);
                var sin = Math.sin(angleX);
                for(let tag of this.tags){
                    var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
                    var z1 = tag.z * cos + (tag.y- this.CY) * sin;
                    tag.y = y1;
                    tag.z = z1;
                }
            },
            rotateY(angleY){
                var cos = Math.cos(angleY);
                var sin = Math.sin(angleY);
                for(let tag of this.tags){
                    var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
                    var z1 = tag.z * cos + (tag.x-this.CX) * sin;
                    tag.x = x1;
                    tag.z = z1;
                }
            },
            listener(event){//响应鼠标移动
                var x = event.clientX - this.CX;
                var y = event.clientY - this.CY;
                this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
                this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001);
            }
        },
        mounted(){//使球开始旋转
            setInterval(() => {
                this.rotateX(this.speedX);
                this.rotateY(this.speedY);
            }, 15)
        },
      created() {
          let tags=[];
          for(let i = 0; i < this.tagsNum; i++){
              let tag = {};
              let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
              let a = Math.acos(k);
              let b = a * Math.sqrt(this.tagsNum * Math.PI);
              tag.text = this.list[i] ;
              tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
              tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b);
              tag.z = this.RADIUS * Math.cos(a);
              tag.color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",0.9)";
              tags.push(tag);
          }
          this.tags = tags;
          this.$store.commit('changePage', 2);
          this.$store.commit('chanageUser', 1);
      }
    }
</script>
