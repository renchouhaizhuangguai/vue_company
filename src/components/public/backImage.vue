<template>
    <!--背景图片-->
    <section class="public_effect crossbanenr"  style="background-position:50% 10%;background-attachment: fixed;background-repeat: no-repeat;background-size: 100% 100%;" :style="{backgroundImage: 'url(' + img.backgroundMap + ')' }">
        <div class="fisrtbg" ></div>
        <div class="letter_content">
            <h4>企业背书、保证数据权威性</h4>
            <p>全线上操作、流程记录，不存在人为篡改、主观判断</p>
        </div>
    </section>
</template>
<script>
    export default {
        name:'backImage',
        props:['back'],
        data(){
            return{
                img:{'backgroundMap':this.back}
            }
        },

    }
</script>