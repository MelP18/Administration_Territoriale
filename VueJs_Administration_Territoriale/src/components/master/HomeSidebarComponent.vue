/*=============================+++ HTML +++==============================*/
<template>
    <div class="sidebar__menu w-60 bg-lime-200 h-screen">
        <RouterLink to="">
            <img :src="logoSimple" alt="">
        </RouterLink>
        <ul class="sidebar__menu__list flex flex-col gap-2.5">
            <li class="sidebar__menu__list__item">
            
                <RouterLink to="/department/post">
                    <img src="" alt="">
                    <h4>Set Department</h4> 
                </RouterLink>
            </li>
            <li class="sidebar__menu__list__item">
                <RouterLink to="/department"> Get Department
                    <img src="" alt="">
                    <h4></h4> 
                </RouterLink>
            </li>
            <li class="sidebar__menu__list__item">
                <RouterLink to="">
                    <img src="" alt="">
                    <h4>Arrondissements</h4> 
                </RouterLink>
            </li>
        </ul>
    </div>
</template>



/*=============================++= JS +++==============================*/
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import logoSimple from '../../assets/images/logo-simple.png'
</script>