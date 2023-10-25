import { defineStore } from "pinia";
import { computed, ref } from "vue"
import type { Error } from "@/types/error";
import { required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import clientHttp from "@/libs/clientHttp";
import axios from 'axios'
import type { Department } from "@/types/department"
import { toast, toastContainers } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export const useSetDepartmentStore = defineStore('departments', () => {
    const departmentData = ref({
        name: '',
        location: ''
    })

    const departmentRequire = computed(() => {
        return {
            name: {
                required,
                minLength: minLength(3)
            },
            location: {
                required
            }
        }
    })

    const data = useVuelidate(departmentData, departmentRequire)

    const setdepartment = async () => {

        const datavalidate = await data.value.$validate();
        console.log(departmentData);

        if (datavalidate) {
            clientHttp.post('department/post', departmentData.value)
            .then((response) => {
                toast.success(response.data)
            }).catch(err => {
                toast.error(err.message)
            })
        } else {

            return toast.error('Echec de l\'envoi'!, {
              /*   toastStyle: {
                    background: 'green'
                } */
            })
        }
    }


    /* const allDepartment = ref<Department[]>([])
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
    } */
    


    return { setdepartment, data, departmentData}
})