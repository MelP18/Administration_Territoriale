/*=============================+++ HTML +++==============================*/
<template>
    <div class="welcome__comonent">
        <div class="welcome__background">
            <div class="welcome__background__content absolute w-full h-64 bg-lime-200">
            </div>
        </div>
        <div class="container mx-auto max-w-screen-xl px-4">
            <div class="welcome__foreground py-10 w-full">
                <div class="welcome__foreground__content flex flex-col gap-10  w-full">
                    <div class="title">
                        <h1 class="text-2xl text-center font-['Saira-Stencil-One'] italic">Doo nu mi do Danhomey gbasa</h1>
                    </div>
                    <div class="content flex justify-center gap-10 items-center w-full">
                        <div class="imagen w-64 h-64">
                            <img :src="benin" alt="Houégbadja" class="rounded-full w-full h-full shadow-2xl shadow-blue-500/50 object-full">
                        </div>
                        <div class="description max-w-lg flex flex-col gap-4 px-10 w-[calc(100%_-_296px)]">
                            <div class="title">
                                <h2 class="italic">Le Bénin</h2>
                            </div>
                            <p class="text-justify italic leading-relaxed">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur ullam
                                repudiandae laborum, rem et perferendis adipisci, ipsum fuga consequuntur libero?
                                Voluptatibus.
                            </p>
                            <div class="see__more flex justify-end italic">
                               <RouterLink to="" class="italic">Voir Plus</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="others">
                        <ul class="other__list flex justify-center gap-10 flex-wrap">
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Art</RouterLink>
                            </li>
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Histoire</RouterLink>
                            </li>
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Santé</RouterLink>
                            </li>
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Démographie</RouterLink>
                            </li>
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Economie</RouterLink>
                            </li>
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Culture</RouterLink>
                            </li>
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Adminsistration Territoriale</RouterLink>
                            </li>
                          
                            
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Langues</RouterLink>
                            </li>
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Réligion</RouterLink>
                            </li>
                             
                            <li class="other__list__item">
                                <RouterLink to="" class="py-3 px-10 border border-lime-600 bg-lime-200 hover:bg-lime-400 active:text-white">Géographie</RouterLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

/*=============================+++ JS +++==============================*/
<script lang="ts" setup>
import houegbadja from '@/assets/images/houegbadja.jpg'
import benin from '@/assets/images/ben.png'
</script>
