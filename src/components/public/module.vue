<template>
    <div ref="module" class="module" >
        <div class="module_box" :style="{width:isWidth+'px',height:isHeight+'px'}">
            <div class="module_head">
                <span>{{moduleTitle}}</span>
                <i class="iconfont icon-iconfontguanbi" @click="handleClose"></i>
            </div>
            <div class="module_content">
                <slot name="zx_content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import '@/assets/css/module.css'
    export default {
        name:'module',
        props:{
            isWidth:{
              default:500
            },
            isHeight:{
                default:200
            },
            moduleTitle:{
                type: String,
                default: '这是一个模态框'
            }

        },
        methods:{
            handleClose(){
                this.$emit('close')
            }
        }
    }
</script>
