<template>
    <div v-for="element in allDepartment" >
        <p class="text-3xl font-bold underline">{{ element.number }}</p>
        <p>{{ element.name }}</p>
        <p>{{ element.location }}</p>
    </div>
</template>


/*=============================+++ JS +++==============================*/
<script lang="ts" setup>

import {ref} from "vue"
import type {Error}  from "@/types/error";
import type {Department} from "@/types/department"
import clientHttp from "@/libs/clientHttp";

const allDepartment = ref<Department[]>([])
const error = ref<Error>('')


/*   
  import {useAxios} from '../../composables/useAxios'
   department = async ()=>{
          const getdepartment = await useAxios().get('/department')
            try{

                if(!getdepartment){
                    return error.value = 'Oops...! Qlqch s\'est mal passée !'
                }
                else if (getdepartment.length === 0){
                    return error.value = 'Donnée Non disponible!'
                }
                

                allDepartment.value = getdepartment.data;
                console.log( allDepartment.value);
                
                
                return  allDepartment.value;
            }catch (err){
                console.log(err);
                return err
            }
        } 

    department()
         */


const department = async ()=>{
   const getdepartment =  await clientHttp.get('/department')
    try{

        if(!getdepartment){
            return error.value = 'Oops...! Qlqch s\'est mal passée !'
        }
        else if (getdepartment.data.length === 0){
            return error.value = 'Donnée Non disponible!'
        }

        allDepartment.value = getdepartment.data;
        console.log( allDepartment.value);
        
        return  allDepartment.value;

    }catch (err:any){
        error.value = err
        console.log(err);
        return error.value 
    }
}

department()

</script>