import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { useRouter } from "vue-router";
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import clientHttp from "@/libs/clientHttp";
import { toast } from 'vue3-toastify';


export const useAuthenticationStore = defineStore('authentication', ()=>{
    const router = useRouter()
    const registrationData = reactive({
        username:'',
        surname: '',
        firstname:'',
        email:'',
        password:'',
        confirm_password:''
    })

    const registrationRequired = computed(() =>{
        return{
            username:{
                required,
                minLength: minLength(3)
            },
            surname:{
                required,
                minLength: minLength(3)
            },
            firstname:{
                required,
                minLength: minLength(3)
            },
            email:{
                required,
                email
            },
            password:{
                required
                
            },
            confirm_password:{
                required,
                sameAs: sameAs(registrationData.password)
            }
        }
    })

    const data = useVuelidate( registrationRequired,registrationData)

    const registration = async () =>{

        const datavalid = await data.value.$validate();
        console.log(datavalid);
        
        if(datavalid){
            clientHttp.post('/auth/signup',registrationData)
            
            .then((response) => {
                toast.success(response.data)

                registrationData.username = '';
                registrationData.surname = '';
                registrationData.firstname = '';
                registrationData.email = '';
                registrationData.password = '';
                registrationData.confirm_password = '';

                data.value.$reset()
            })
            .catch(error => {
                toast.error(error.message)
            })
            
        }else { 
           toast.error('Echec d\'inscription...   Données indisponible!')
        }
    }


    const connectionData = reactive({
        email:'',
        password:'',
    })

    const connectionRequired = computed(() =>{
        return{ 
            email:{
                required,
                email
            },
            password:{
                required
                
            },
        }
    })

    const connectData = useVuelidate( connectionRequired,connectionData)

    const connection = async () =>{

        const datavalid = await connectData.value.$validate();
        console.log(datavalid);
        
        if(datavalid){
            /* clientHttp.post('/auth/signin',connectionData)
            
            .then((response) => {
                toast.success(response.data)
            
                connectionData.email = '';
                connectionData.password = '';

                connectData.value.$reset();
                
                router.replace('/home')
            })
            .catch(error => {
                toast.error(error.message)
            }) */

            const identifiant = btoa(connectionData.email+":"+connectionData.password)
            console.log(identifiant);
            
            const identifiantD = atob(identifiant)

            console.log(identifiantD);
            
            clientHttp.post('/auth/signin',/*  { identifiant}, */
            {
                headers: {
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization: "Basic "+ identifiant
                }
            })
            .then((response) => {
                toast.success(response.data)
            
                connectionData.email = '';
                connectionData.password = '';

                connectData.value.$reset();
                
                router.replace('/home')
            })
            
            
        }else { 
           toast.error('Echec de Connexion... Données indisponible !')
        }
    }

    return { registration, registrationData, data, connection, connectionData, connectData}

})