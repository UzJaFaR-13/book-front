<script setup>

import HeaderRow from "@/components/HeaderRow.vue";
import FooterRow from "@/components/FooterRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
</script>

<template>

    <div class="container-fluid">
        <HeaderRow/>

        <div class="row mt-4">
            <CategoriesCol/>
            <div class="col-12 col-md-10">
                <router-view/>
            </div>
        </div>

        <FooterRow/>
    </div>
</template>

<style scoped>

</style>