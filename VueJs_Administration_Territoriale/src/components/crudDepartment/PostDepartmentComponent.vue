<template>
   <div class="flex justify-center items-center h-screen">
        <form @submit.prevent="setdepartment" 
        class=" flex flex-col bg-indigo-300 w-2/5 pt-0 pb-5 rounded-md shadow-2xl">
            <div class="error">
                <span v-for="error in data.$errors" :key="error.$uid">
                    {{ error.$property }} : {{ error.$message }}
                </span>
            </div>
            <div class="title bg-sky-950  px-5 py-2 mb-5">
                <h2 class="font-bold text-gray-50">Ajouter un Département</h2>
            </div>
            <div class="flex flex-col gap-5  px-5">
                <div class="flex flex-col gap-2.5">
                    <label for="">Nom</label>
                    <input type="text"
                    class="border border-gray-500 rounded outline-none pl-1.5"
                    v-model="departmentData.name">
                </div>
                <span style="color: rgb(156, 18, 18);" v-for="error in data.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>

                <div class="flex flex-col gap-2.5">
                    <label for="">Situation Géographique</label>
                    <input type="text"
                    class="border border-gray-500 rounded outline-none pl-1.5"
                    v-model="departmentData.location">
                </div>
                <span style="color: rgb(156, 18, 18);" v-for="error in data.location.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>
            
            <div class="flex justify-center items-center mt-5">
                <button>Envoyez</button>
            </div>
        </form>
   </div>
</template>


/*=============================+++ JS +++==============================*/
<script lang="ts" setup>

import { onMounted, ref} from "vue"
import { storeToRefs } from "pinia";
import{ useSetDepartmentStore} from '@/stores/setdepartment'


const {data,departmentData } = storeToRefs(useSetDepartmentStore())

const {setdepartment} = useSetDepartmentStore() 

onMounted(() =>{
    setdepartment
})
</script>