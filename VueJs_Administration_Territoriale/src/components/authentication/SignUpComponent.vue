/*=============================+++ HTML +++==============================*/
<template>
    <div class="block 
    w-[calc(100vw_-_384px)] h-screen overflow-y-scroll overflow-x-hidden">
        <div class="block__content flex flex-col gap-10">
            <BackComponent/>
            <div class="registration 
            w-full h-full flex flex-col justify-center items-center">
                <div class="registration__content 
                flex flex-col gap-5 px-8 mb-10 w-2/4 shadow-[0_3px_20px] shadow-gray-300 rounded-2xl">
                    <div class="title mt-10">
                        <h2 class="font-['Saira-Stencil-One'] text-2xl text-center">INSCRIPTION</h2>
                    </div>

                    <form @submit.prevent="registration">
                        <div class="fields w-full flex flex-col gap-5 w-full h-full">
                            <div class="field_list w-full flex flex-col gap-5">
                                <div class="field__list__item">
                                    <label for="username" class="text-sm text-lime-950 font-bold text-lime-950 font-bol">Pseudo</label>
                                    <input type="text"
                                        class="px-4 py-2 mt-1 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                        v-model="registrationData.username">
                                    <span class="text-xs text-red-500 text-red-500"
                                        v-for="error in data.username.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>
                                
                                <div class="field__list__item">
                                    <label for="surname" class="text-sm text-lime-950 font-bold text-lime-950 font-bol">Nom</label>
                                    <input type="text"
                                        class="px-4 py-2 mt-1 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                        v-model="registrationData.surname">
                                    <span class="text-xs text-red-500"
                                        v-for="error in data.surname.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>
                                <div class="field__list__item ">
                                    <label for="firstname" class="text-sm text-lime-950 font-bold text-lime-950 font-bol">Prénom(s)</label>
                                    <input type="text"
                                        class="px-4 py-2 mt-1 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                        v-model="registrationData.firstname">
                                    <span class="text-xs text-red-500"
                                        v-for="error in data.firstname.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>
                                <div class="field__list__item ">
                                    <label for="email" class="text-sm text-lime-950 font-bold text-lime-950 font-bol">E-mail</label>
                                    <input type="email"
                                        class="px-4 py-2 mt-2 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                        v-model="registrationData.email">
                                    <span class="text-xs text-red-500"
                                        v-for="error in data.email.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>
                                <div class="field__list__item">
                                    <label for="password" class="text-sm text-lime-950 font-bold text-lime-950 font-bol">Mot de Passe</label>
                                    <input type="password"
                                        class="px-4 py-2 mt-2 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                        v-model="registrationData.password">
                                    <span class="text-xs text-red-500"
                                        v-for="error in data.password.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>
                                <div class="field__list__item">
                                    <label for="confirm_password" class="text-sm text-lime-950 font-bold text-lime-950 font-bol">Confirmez Mot de Passe</label>
                                    <input type="password"
                                        class="px-4 py-2 mt-2 border rounded-xl outline-none w-full bg-lime-50 text-sm"
                                        v-model="registrationData.confirm_password">
                                    <span class="text-xs text-red-500"
                                        v-for="error in data.confirm_password.$errors" :key="error.$uid" >
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="field__btn">
                                <button
                                    class="cursor-pointer px-4 py-1.5 mt-2 font-bold border rounded-full outline-none w-full bg-lime-400">
                                    S'inscrire</button>
                            </div>

                            <div class="other flex justify-center gap-1">
                                <p class="text-sm text-lime-950 text-lime-950 ">Déjà un compte?</p>
                                <RouterLink to="/signin" 
                                class="text-sm text-lime-950 font-bold text-lime-950 font-bol underline italic text-lime-800 font-bold mb-10">Se connecter
                                </RouterLink>
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
import BackComponent from '../BackComponent.vue';

import { onMounted } from 'vue';
import { useAuthenticationStore } from '../../stores/authenicationStore'
import { storeToRefs } from "pinia";

const { registrationData, data } = storeToRefs(useAuthenticationStore())
const { registration } = useAuthenticationStore()

onMounted(() => {
    registration
})
</script>