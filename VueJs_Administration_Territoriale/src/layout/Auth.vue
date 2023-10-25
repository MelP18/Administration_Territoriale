/*=============================+++ HTML +++==============================*/
<template>
    <div class="block">
        <div class="block__content flex">
            <div class="block__left">
                <AuthSidebarComponent/>
            </div>
            <div class="block__right">
                <RouterView/>
            </div>
        </div>
    </div>
</template>


/*=============================+++ JS +++==============================*/

<script lang="ts" setup>
import AuthSidebarComponent from '@/components/master/AuthSidebarComponent.vue';
import { RouterView } from 'vue-router';

</script>