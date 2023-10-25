/*=============================+++ HTML +++==============================*/
<template>
    <div class="about__component">
        <div class="container mx-auto max-w-screen-base px-4">
            <div class="about__content py-10 flex flex-col gap-10" id="above-us">
                <div class="title">
                    <h1 class="font-['Saira-Stencil-One'] text-2xl text-center">A PROPOS</h1>
                </div>
                <div class="above__content__top  py-5 ">
                    <div class="values flex justify-evenly items-center gap-10">
                        <div class="values__imagen w-80 h-80 ">
                            <img :src="colline" alt="" class="one w-full h-full object-full absolute top-[-16px] right-[-24px]">
                            <img :src="tanougou" alt="" class="three w-full h-full object-cover absolute right-20 bottom-[-70px] ">
                            <img :src="ganvie" alt="" class="two w-full h-full object-cover absolute left-20 bottom-[-80px]">
                            
                        </div>
                        <div class="values__description w-[calc(100%_-_320px)]">
                            <div class="values__description__content flex flex-col gap-1">
                                <div class="title">
                                    <h3 class="text-center">Nos Valeurs</h3>
                                </div>
                                <div class="values__description__list flex flex-col gap-5">
                                    <div class="values__description__item flex gap-5 w-full items-center">
                                        <div class="icon icon w-16 h-16 flex justify-center items-center">
                                           <TeamComponent/> 
                                        </div>
                                        <div class="description">
                                            <h4 class="font-['Oleo-Script'] text-lg">Equipe</h4>
                                            <p class="text-sm text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernaturreprehenderit neque ius.</p>
                                        </div>
                                    </div> 
                                    <div class="values__description__item flex gap-5 w-full items-center">
                                        <div class="icon w-16 h-16 flex justify-center items-center">
                                           <ConfidentialityComponent/> 
                                        </div>
                                        <div class="description flex flex-col gap-1">
                                            <h4 class="font-['Oleo-Script'] text-lg">Confidentialité</h4>
                                            <p class="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernaturreprehenderit.</p>
                                        </div>
                                    </div>
                                    <div class="values__description__item flex gap-5 w-full items-center">
                                        <div class="icon icon w-16 h-16 flex justify-center items-center">
                                           <InnovationComponentVue/> 
                                        </div>
                                        <div class="description">
                                            <h4 class="font-['Oleo-Script'] text-lg">Innovation</h4>
                                            <p class="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernaturreprehenderit neque ius.</p>
                                        </div>
                                    </div>
                                    <div class="values__description__item flex gap-5 w-full items-center">
                                        <div class="icon icon w-16 h-16 flex justify-center items-center">
                                           <GrowthComponent/> 
                                        </div>
                                        <div class="description">
                                            <h4 class="font-['Oleo-Script'] text-lg">Croissance</h4>
                                            <p class="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernaturreprehenderit neque ius.</p>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="above__content__bottom py-5">
                    <div class="mink">
                        <div class="mink__content">
                            <ul class="mink__content__list">

                            </ul>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>



<script lang="ts" setup>
import houegbadja from '@/assets/images/houegbadja.jpg'
import ganvie from '../../assets/images/ganvie.jpg'
import tanougou from '../../assets/images/tanougou.jpeg'
import colline from '../../assets/images/colline.jpg'
import ConfidentialityComponent from '../icons/ConfidentialityComponent.vue';
import InnovationComponentVue from '../icons/InnovationComponent.vue';
import ExcellencyComponent from '../icons/ExcellencyComponent.vue';
import GrowthComponent from '../icons/GrowthComponent.vue'
import TeamComponent from '../icons/TeamComponent.vue'
</script>