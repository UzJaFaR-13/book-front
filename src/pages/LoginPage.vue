<script setup>

import FormInput from "../components/tags/FormInput.vue";
import ButtonTag from "../components/tags/ButtonTag.vue";

import {ref, reactive} from "vue";

let isLogin = ref(true)

let registration = reactive({
    email: '',
    password: '',
    confirmPassword: '',
})

function signUp() {
    let data = {
        email: registration.email,
        password: registration.password
    }
}
</script>

<template>
    <div class="row vh-100 justify-content-center align-content-center">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <div class="row mb-3">
                <div class="col-6 ">
                    <ButtonTag @click="isLogin = true" text="Kirish" class="btn btn-outline-success w-100"/>
                </div>
                <div class="col-6 ">
                    <ButtonTag @click="isLogin = false" text="Ro'yxatdan o'tish" class="btn btn-outline-success w-100"/>
                </div>
            </div>
            <form v-if="isLogin">
                <FormInput id="signInEmail" label-name="Email" input-type="email"/>
                <FormInput id="signInPassword" label-name="Password"/>
                <ButtonTag text="Kirish" class="btn btn-primary w-100"/>
            </form>
            <form v-else>
                <FormInput v-model="registration.email" id="signUpEmail" label-name="Email" type="email"/>
                <FormInput v-model="registration.password" id="signUpPassword" label-name="Password"/>
                <FormInput v-model="registration.confirmPassword" id="signUpPasswordConfirm"
                           label-name="Confirm Password">
                    <small v-if="registration.password !== registration.confirmPassword" class="text-danger">
                        Paroll mos kelmadi !
                    </small>
                </FormInput>
                <ButtonTag @click="signUp" text="Ro'yxatdan o'tish" class="btn btn-primary w-100"/>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>