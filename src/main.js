import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from "@/plagins/router";
import {createPinia} from "pinia";


createApp(App)
    .use(createPinia)
    .use(router)
    .mount('#app')