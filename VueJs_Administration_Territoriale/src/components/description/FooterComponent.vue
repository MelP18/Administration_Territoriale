
/*=============================+++ HTML +++==============================*/
<template>
    <div class="footer__component">
        <footer >
            <div class="footer__content bg-lime-200">
                <div class="container mx-auto max-w-screen-xl px-4">
                    <div class="footer__content__top flex justify-between items-center">
                    <div class="footer__left">
                        <div class="footer__left__content"> 
                            <RouterLink to="" class="block p-5 border border-gray-800 text-center hover:border-lime-400 active:bg-lime-600 focus:outline-none focus:ring-lime-400">
                                <p class="text-center ">Accéder au</p>
                                <strong class="text-center">PROJET SUR GitHub</strong>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="footer__middle__content flex flex-col gap-5">
                        <div class="title">
                            <h4 class="text-center">SUIVEZ-NOUS</h4>
                        </div>
                        <div class="link">
                            <div class="icons flex items-center">
                                <RouterLink to="" class="px-5 py-2 border-r-2 border-gray-800">
                                    <i class="fa-brands fa-x-twitter text-2xl text-stone-950"></i>
                                </RouterLink>
                                <RouterLink to="" class="px-5 py-2 border-r-2 border-gray-800">
                                    <i class="fa-brands fa-instagram text-2xl text-pink-900"></i>
                                </RouterLink>
                                <RouterLink to="" class="px-5 py-2">
                                    <i class="fa-brands fa-linkedin text-2xl text-blue-600"></i>
                                </RouterLink>  
                            </div>
                        </div>
                    </div>
                    <div class="footer__right__content flex gap-10 items-end">
                        <div class="menus">
                            <ul class="menu__list flex flex-col gap-2 p-5">
                                <li class="menu__list__item ">
                                    <RouterLink to="" class="hover:border-b border-lime-400 active:text-lime-700 focus:outline-none focus:ring-lime-400">Accueil</RouterLink>
                                </li>
                                <li class="menu__list__item ">
                                    <RouterLink to="/sign-up" class="hover:border-b border-lime-400 active:text-lime-700 focus:outline-none focus:ring-lime-400">S'inscrire</RouterLink>
                                </li>
                                <li class="menu__list__item ">
                                    <RouterLink to="" class="hover:border-b border-lime-400 active:text-lime-700 focus:outline-none focus:ring-lime-400">Se connecter</RouterLink>
                                </li>
                                <li class="menu__list__item ">
                                    <RouterLink to="" class="hover:border-b border-lime-400 active:text-lime-700 focus:outline-none focus:ring-lime-400">A Propos</RouterLink>
                                </li>
                                <li class="menu__list__item ">
                                    <RouterLink to="" class="hover:border-b border-lime-400 active:text-lime-700 focus:outline-none focus:ring-lime-400">Contact</RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div class="flex items-end">
                        <RouterLink to="/" class="block w-12 h-15 text-xs text-center p-2 border-2 border-gray-400 hover:border-lime-400 active:bg-lime-700 focus:outline-none focus:ring-lime-400"> Haut de page</RouterLink>    
                        </div> 
                    </div>  
                    
                    </div>
                    <div class="footer__content__bottom">
                        <p class="text-center p-2 border-t border-gray-400"><i class="fa-regular fa-copyright font-bold"></i> - Benininfo 2023 Tous droits réservés</p>         
                    </div>
                </div> 
            </div>
        </footer>
    </div>
</template>

/*=============================+++ JS +++==============================*/
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>