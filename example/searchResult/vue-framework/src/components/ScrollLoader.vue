<template>
    <div class="flick_loading await_loading">
        <div class="loading__dimmed"></div>
        <div class="loading__body">
            <div class="loading__wrapper">
                <span tabindex="0" data-focus>로딩중...</span>
                <div class="loading_bar">
                    <span class="dot dot1"></span>
                    <span class="dot dot2"></span>
                    <span class="dot dot3"></span>
                    <span class="dot dot4"></span>
                    <span class="dot dot5"></span>
                    <span class="dot dot6"></span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ScrollLoader'
}
</script>

<style scoped>
[data-focus] {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
}
</style>