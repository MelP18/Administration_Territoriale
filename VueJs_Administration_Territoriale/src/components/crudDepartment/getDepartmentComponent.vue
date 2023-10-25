/*=============================+++ HTML +++==============================*/
<template>
    <div class="block">
        <div class="container">
            <table class="mt-10">
                <thead>
                    <th class="p-2.5">Nom du Département</th>
                    <th class="p-2.5">Localisation</th>
                </thead>
                <tbody>
                    <tr v-for="element in allDepartment">
                      
                        <td class="p-2.5 ">{{ element.name }}</td>
                        <td class="p-2.5 ">{{ element.location }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


/*=============================+++ JS +++==============================*/
<script lang="ts" setup>

import { onMounted, ref } from "vue"
import type { Error } from "@/types/error";
import type { Department } from "@/types/department"
import clientHttp from "@/libs/clientHttp";

const allDepartment = ref<Department[]>([])
const error = ref<Error>('')


const department = async () => {
    const getdepartment = await clientHttp.get('/department')
    try {

        if (!getdepartment) {
            return error.value = 'Oops...! Qlqch s\'est mal passée !'
        }
        else if (getdepartment.data.length === 0) {
            return error.value = 'Donnée Non disponible!'
        }

        allDepartment.value = getdepartment.data;
        console.log(allDepartment.value);

        return allDepartment.value;

    } catch (err: any) {
        error.value = err
        console.log(err);
        return error.value
    }
} 
department()

/* import{ useSetDepartmentStore} from '@/stores/setdepartment'
const {department} = useSetDepartmentStore()
onMounted(async ()=>{
   await department()
})
 */

</script>