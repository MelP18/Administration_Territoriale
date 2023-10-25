/*=============================+++ HTML +++==============================*/
<template>
    <div class="header__component">
        <header class="bg-lime-200 w-full shadow-xl shadow-lime-200/50 ">
            <div class="container mx-auto px-4 max-w-screen-xl">
                <div class="header__content flex justify-between items-center py-3">
                    <IndexMenusComponent/>
                    <AuthMenusComponent/>
                </div>
            </div>
        </header>  
    </div> 
   
</template>

/*=============================+++ JS +++==============================*/

<script lang="ts" setup>
    //import "@/assets/javascript/waves.js"
    import { onMounted } from 'vue';
  
import BeninIconComponent from '../icons/BeninIconComponent.vue'
import IndexMenusComponent from './IndexMenusComponent.vue';
import AuthMenusComponent from './AuthMenusComponent.vue';
    //import backImg from '../assets/images/etoileRouge.jpg'
   
</script>