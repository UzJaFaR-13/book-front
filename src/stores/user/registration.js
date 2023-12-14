import {defineStore} from "pinia";
import axios from "axios";

export const useRegistration = defineStore('registration', {
    actions: {
        createUser(data){
            return new Promise((resolve, reject)=>{
                axios.post('')
            })
        }
    },
})