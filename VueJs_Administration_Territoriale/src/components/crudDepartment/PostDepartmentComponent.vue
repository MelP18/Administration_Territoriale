<template>
   <div class="flex justify-center items-center h-screen">
        <form @submit.prevent="setdepartment" 
        class=" flex flex-col gap-3 bg-indigo-300 w-2/5 p-5 rounded-md shadow-2xl">
            <div class="error">
                <span v-for="error in data.$errors" :key="error.$uid">
                    {{ error.$property }} : {{ error.$message }}
                </span>
            </div>
            <div class="flex flex-col gap-5">
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
            
            <div class="flex justify-center items-center">
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


const {data, res, departmentData } = storeToRefs(useSetDepartmentStore())

const {setdepartment} = useSetDepartmentStore() 

onMounted(() =>{
    setdepartment
})
</script>