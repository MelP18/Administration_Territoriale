/*=============================+++ HTML +++==============================*/
<template>
    <div class="block">
        <div class="block__content flex">
            <div class="block__content__left">
                <HomeSidebarComponent/>
            </div>
            <div class="block__content__right">
                <RouterView/>
            </div>
        </div>
        
    </div>
</template>


/*=============================++= JS +++==============================*/
<script lang="ts" setup>
    import { RouterView } from 'vue-router';
    import HomeSidebarComponent from '../components/master/HomeSidebarComponent.vue';
</script>