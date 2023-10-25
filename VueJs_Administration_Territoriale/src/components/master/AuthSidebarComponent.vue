/*=============================+++ HTML +++==============================*/
<template>
    <div class="sidebar w-96 bg-lime-200 h-screen">
        <div class="sidebar__content flex flex-col gap-10 pt-10 w-full">
            <div class="sidebar__content__bottom flex flex-col justify-center items-center gap-5">
                <div class="logo flex justify-center w-32 h-32">
                    <img :src="logo" alt="" class="w-full h-full object-coverl rounded-full">
                </div>
                <div class="sidebar__title">
                    <h1 class="text-center font-['Oleo-Script'] text-2xl italic tracking-widest">Bienvenue sur benin-Info</h1>
                </div>
                <div class="sidebar__description px-5 text-center">
                    <p class="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet, sunt ea fuga quae nam sapiente
                        labore exercitationem quasi?
                    </p>
                </div>
            </div>
            <div class="sidebar__content__bottom bg-amber-200 h-[calc(100vh_-_376px)] w-full">
                <div class="sidebar__video h-full w-full">
                    <video class="w-full h-full"  src="" controls loop ></video>
                </div>
            </div>
        </div>


    </div>
</template>



/*=============================++= JS +++==============================*/
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import logo from '../../assets/images/logo.png'
</script>