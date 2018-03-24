<template>
    <!--背景图片-->
    <section class="public_effect crossbanenr">
        <div class="fisrtbg"
             style="background-position:50% 10%;background-attachment: fixed;background-repeat: no-repeat;background-size: 100% 100%;"
             :style="{backgroundImage: 'url(' + img.backgroundMap + ')' }"></div>
        <div class="letter_content">
          <h4>{{firstMes}}</h4>
          <p>{{secondMes}}</p>
        </div>
        {{img.backgroundMap}}
    </section>
</template>
<script>
    export default {
        name:'backImage',
        props:['back', 'firstMes', 'secondMes'],
        data(){
            return{
                img:{backgroundMap:this.back}
            }
        }
    }
</script>
