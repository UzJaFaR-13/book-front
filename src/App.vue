<script setup>

import HeaderRow from "./components/HeaderRow.vue";
import CategoriesCol from "./components/CategoriesCol.vue";
import FooterRow from "./components/FooterRow.vue";
import HomePage from "./pages/HomePage.vue";
</script>

<template>
    <!--container boshlandi-->
    <div class="container-fluid">

        <!--header boshlandi-->
        <HeaderRow/>
        <!--header tugadi-->

        <!--Main boshlandi-->
        <div class="row mt-4">

            <!--Category boshlandi-->
            <CategoriesCol/>
            <!--Category tugadi-->

            <!--Kontent boshlandi-->
            <div class="col-12 col-md-10">

                <!--HomePage boshlandi-->
                    <router-view/>
                <!--HomePage tugadi-->

            </div>
            <!--Kontent tugadi-->
        </div>
        <!--Main tugadi-->

        <!--Footer qatori boshlandi-->
        <FooterRow/>
        <!--Footer qatori tugadi-->

    </div>
    <!--container tugadi-->
</template>

<style scoped>
</style>
