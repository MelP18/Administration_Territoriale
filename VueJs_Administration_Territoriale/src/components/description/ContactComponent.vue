/*=============================+++ HTML +++==============================*/
<template>
    <div class="contact__component">
        <div class="welcome__background absolute h-screen w-full flex flex-col">
            <div class="block__background__top h-72 w-full bg-black bg-black">
                <img :src="etoileRouge" alt="EtoileRouge" class="h-full w-full object-cover opacity-40">
            </div>
        </div>
        <div class="container mx-auto max-w-screen-xl px-4">
            <div class="contact__foreground pt-6">
                <div class="contact__foreground__content flex flex-col gap-5">
                    <div class="contact__foreground__content__top flex flex-col gap-5">
                        <div class="title">
                            <h1 class="font-['Saira-Stencil-One'] text-2xl text-white text-center">CONTACT</h1>
                        </div>
                        <p class="text-center italic leading-relaxed text-white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur ullam
                            repudiandae laborum, rem et perferendis adipisci, ipsum.
                        </p>
                    </div>  
                    <div class="contact__foreground__content__bottom 
                    flex justify-left gap-10 bg-white w-4/5 p-6 ">
                        <div class="contact__foreground__content__bottom__left 
                        flex flex-col gap-10">
                            <div class="contact__foreground__content__bottom__left__top 
                            flex gap-10 items-center p-6 shadow-[0_3px_20px] shadow-gray-300">
                                <div class="icon w-10 h-10 border border-amber-400 rounded-full flex items-center justify-center">
                                    <i class="fa-solid fa-phone text-amber-400"></i>
                                </div>
                                <div class="description flex flex-col gap-5">
                                    <h5 class="whitespace-nowrap text-center">Appellez-nous</h5>
                                    <p class="whitespace-nowrap text-sm text-amber-500 font-bold">+229 61 76 68 64</p> 
                                </div>
                            </div>
                            <div class="contact__foreground__content__bottom__left__bottom
                            flex gap-10  p-6 shadow-[0_3px_20px] shadow-gray-300">
                                <div class="icon w-10 h-10 bg-lime-200 rounded-full flex items-center justify-center">
                                    <i class="fa-regular fa-comments text-lime-700"></i>
                                </div>
                                <div class="description flex flex-col gap-5">
                                    <h5 class="whitespace-nowrap text-center">Ecrivez-nous</h5>
                                    <RouterLink to="" class="whitespace-nowrap px-10 py-3 text-sm border border-lime-200 bg-lime-200 hover:bg-lime-300">Contact-ici</RouterLink>
                                </div>
                            </div>
                        </div>
                        <div class="contact__foreground__content__bottom__right
                        flex flex-col gap-5 p-5 shadow-[0_3px_20px] shadow-gray-300">
                            <div class="title">
                                <h5 class="font-['Oleo-Script'] text-xl text-center">Entrevue</h5>
                            </div>
                            <div class="mail">
                                <form>
                                    <div class="fields flex flex-col gap-5">
                                        <div class="field__list
                                        flex flex-wrap gap-4 w-full justify-center">
                                            <div class="field__list__item
                                                flex flex-col gap-1 w-full">
                                                    <label for="" class="text-sm">Nom</label>
                                                    <input type="email" placeholder="MANKPON Patrick"
                                                    class="w-full border py-0.5 px-2 outline-none text-gray-500 italic placeholder:text-gray-300">
                                            </div>
                                            <div class="w-full flex gap-5">
                                                <div class="field__list__item
                                                flex flex-col gap-3 w-full">
                                                    <label for="" class="text-sm">Email</label>
                                                    <input type="email" placeholder="no_reply@gmail.com"
                                                    class="w-full border py-0.5 px-2 outline-none text-gray-500 italic placeholder:text-gray-300">
                                                </div>
                                                <div class="field__list__item
                                                flex flex-col gap-3 w-full">
                                                    <label for="" class="text-sm">Objet</label>
                                                    <input type="text" placeholder="Demande de service"
                                                    class="w-full border py-0.5 px-2 outline-none text-gray-500 italic placeholder:text-gray-300">
                                                </div>   
                                            </div>
                                            <div class="field__list__item
                                            flex flex-col gap-1 w-full">
                                                <label for="" class="text-sm">Message</label>
                                                <textarea name="" id="" rows="2" cols="" placeholder="maximum 500 caractères"
                                                class="w-full border p-1.5 outline-none text-gray-500 italic placeholder:text-gray-300"></textarea>
                                            </div>
                                          
                                        </div>
                                        <div class="field__btn text-right">
                                            <button class="py-1 px-14 border hover:border-lime-400 font-['Oleo-Script']">Envoyez</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

/*=============================+++ JS +++==============================*/
<script lang="ts" setup>

import etoileRouge from '@/assets/images/etoileRouge.jpg'
</script>
