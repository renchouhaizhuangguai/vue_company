<template>
    <div class="public_banner" id="js_banner">
        <ul class="banner" id="js_banner_img">
            <li>
                <div class="fx_banner_inner fx_grid_c1">
                    <div class="child child0" data-z="1" :style="{backgroundImage: 'url(' + img.banner1 + ')' }"></div>
                    <a href="#" class="banner3 banner1"><span class="hide">抢先领取</span></a>
                </div>
            </li>
        </ul>
        <div class="banner_foot">
            <div class="garden"></div>
        </div>
    </div>
</template>
<script>
    import banner1 from '../../assets/public_image/banner1.jpg'
    export default {
        name:'Banner',
        data(){
            return{
                img:{
                    'banner1':banner1
                }
            }
        }
    }
</script>