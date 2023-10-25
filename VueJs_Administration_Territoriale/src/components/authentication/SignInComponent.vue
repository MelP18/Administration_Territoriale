/*=============================+++ HTML +++==============================*/
<template>
    <div class="block 
        w-[calc(100vw_-_384px)] h-screen overflow-y-scroll overflow-x-hidden">
        <div class="block__content flex flex-col gap-10">
            <!-- <RouterLink to="/" class="block mt-10 ml-10">
                <i class="fa-solid fa-left-long  p-3 border border-lime-400 rounded-full hover:bg-lime-400"></i>
            </RouterLink> -->
            <BackComponent/>
            <div class="connection 
            w-full h-full flex flex-col justify-center items-center">
                <div class="connection__content 
                flex flex-col gap-5 px-8 w-2/4 shadow-[0_3px_20px] shadow-gray-300 rounded-2xl">
                    <div class="title mt-10">
                        <h2 class="font-['Saira-Stencil-One'] text-2xl text-center">CONNEXION</h2>
                    </div>
                    <form @submit.prevent="connection">
                        <div class="fields w-full flex flex-col gap-5 w-full h-full">
                            <div class="field_list w-full flex flex-col gap-5"> 
                                <div class="field__list__item ">
                                    <label for="email" class="text-sm text-lime-950 font-bold">E-mail</label>
                                    <input type="email" class="px-4 py-2 mt-2 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                    v-model="connectionData.email">
                                    <span class="text-xs text-red-500"
                                        v-for="error in connectData.email.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>
                                <div class="field__list__item ">
                                    <label for="password" class="text-sm text-lime-950 font-bold">Mot de Passe</label>
                                    <div class="flex flex-col justify-end items-end">
                                        <RouterLink to="" class="text-xs italic underline text-lime-800 font-bold">Mot de passe oublié ?</RouterLink>
                                        <input type="password" class="px-4 py-2 mt-2 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                        v-model="connectionData.password">
                                    </div>
                                    <span class="text-xs text-red-500"
                                        v-for="error in connectData.password.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>  
                            </div>
                            <div class="field__btn">
                                <button class="cursor-pointer px-4 py-1.5 mt-2 font-bold border rounded-full outline-none w-full bg-lime-400"> Se connecter</button>
                            </div>
                            <div class="other flex justify-center gap-1">
                                <p class="text-sm">Pas de compte?</p>
                                <RouterLink to="/signup" class="text-sm underline italic text-lime-800 font-bold mb-10">S'inscrire</RouterLink>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


/*=============================+++ JS +++==============================*/

<script lang="ts" setup>

import { onMounted } from 'vue';
/* import {useconnectionStore} from '../../stores/connection' */
import { useAuthenticationStore } from '../../stores/authenicationStore'
import { storeToRefs } from "pinia";
import BackComponent from '../BackComponent.vue';
const {connectionData, connectData } = storeToRefs(useAuthenticationStore())
const {connection} = useAuthenticationStore()
onMounted(()=>{
    connection
})
</script>