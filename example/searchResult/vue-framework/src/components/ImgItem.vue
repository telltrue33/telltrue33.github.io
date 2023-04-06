<template>
    <div>
        <a :href="childData.doc_url">
            <div class="img-wrap">
                <div class="img js-picture" data-lazy><img :src="childData.image_url" :width="childData.width" :height="childData.height" /></div>
            </div>
            <div class="exp">{{ childData.display_sitename }}</div>
        </a>
    </div>
</template>
  
<script>
export default {
    name: 'ImgItem',
    props: {
        childData: {
            type: Object
        }
    }
}
</script>
