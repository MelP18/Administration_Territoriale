import { defineStore } from "pinia";
import { computed, ref } from "vue"
import type { Error } from "@/types/error";
import { required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import clientHttp from "@/libs/clientHttp";
import axios from 'axios'
import { toast, toastContainers } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export const useSetDepartmentStore = defineStore('departments', () => {
    let res = ref<Error>('')

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
        console.log(departmentData.value);

        if (datavalidate) {

            await clientHttp.post('department/post', {
                'name': departmentData.value.name,
                'location': departmentData.value.location

            }).then((response) => {
                console.log(response.data);
                toast.success(response.data)
                return res.value = response.data

            }).catch(err => {
                toast.error(err.message)
                /* toast.error(err.message,{
                    toastStyle:{
                        background:'red',
                        color: 'white'
                    }
                }) */
            })

        }else{
            toast.POSITION.TOP_CENTER
            
            return toast.error('Echec de l\'envoi'!,{
                toastStyle:{
                    background:'green'
                }
            })
        }
    }


    return { setdepartment, data, departmentData, res}
})