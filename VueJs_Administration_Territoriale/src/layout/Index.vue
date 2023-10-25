/*=============================+++ HTML +++==============================*/
<template>
    <div class="block">
        <div class="block__content h-full">
            <div class="wrapper overflow-x-hidden h-full">
                <IndexHeaderComponent/>
                <main class="h-[calc(100vh_-_56px)] overflow-y-scroll
                scrollbar:w-1.5 scrollbar:bg-transparent scrollbar-thumb:rounded">
                    <div class="main__content">
                        <RouterView />
                        
                    </div>
                    <FooterComponent/>
                </main>
              <!--   <FooterComponent/>  -->
            </div>
        </div>
    </div>
</template>


/*=============================+++ JS +++==============================*/

<script lang="ts" setup>
//import "@/assets/javascript/waves.js"
import BeninIconComponent from '../components/icons/BeninIconComponent.vue'
import IndexHeaderComponent from '@/components/master/IndexHeaderComponent.vue'
import FooterComponent from '@/components/description/FooterComponent.vue';
//import backImg from '../assets/images/etoileRouge.jpg'

import { RouterView } from 'vue-router';
</script>