/*=============================+++ HTML +++==============================*/
<template>
    <div class="menu__content flex gap-8 items-center">
        <div class="header__logo w-10 h-10">
           <!--  <BeninIconComponent/> -->
            <img :src="logo" alt="" class="w-full h-full object-coverl rounded-full">
        </div>
        <div class="header__menus">
            <ul class="header__menu__list flex justify-center items-center gap-8">
                <li class="header__menu__list__item ">
                    <RouterLink to="" class="italic hover:border-b-2 border-amber-400">Accueil</RouterLink>
                </li>
                <li class="header__menu__list__item ">
                    <RouterLink to="" class="italic hover:border-b-2 border-amber-400">A Propos</RouterLink>
                </li>
                <li class="header__menu__list__item ">
                    <RouterLink to="" class="italic hover:border-b-2 border-amber-400">Contact</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

/*=============================+++ JS +++==============================*/

<script lang="ts" setup>
    //import "@/assets/javascript/waves.js"
    import logo from '../../assets/images/logo.png'
import BeninIconComponent from '../icons/BeninIconComponent.vue'
   
</script>