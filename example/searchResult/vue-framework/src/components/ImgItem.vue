<template>
    <div>
        <a :href="childData.doc_url">
            <div class="img-wrap">
                <div v-if="!imgLazy" class="img js-picture">
                    <img :src="childData.image_url" :width="childData.width" :height="childData.height" />
                </div>
                <div v-else class="img js-picture">
                    <img :data-lazy="childData.image_url" :width="childData.width" :height="childData.height" v-lazyload />
                </div>
            </div>
            <div class="exp">{{ childData.display_sitename }}</div>
        </a>
    </div>
</template>
  
<script>
export default {
    name: 'ImgItem',
    props: {
        imgLazy: {
            type: Boolean,
            default: false
        },
        childData: {
            type: Object
        }
    }
}
</script>
