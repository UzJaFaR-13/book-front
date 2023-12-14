<script setup>
defineProps({
    labelName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        default: 'text'
    },
    modelValue: {}
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="mb-3">
        <label :for="id" class="form-label">{{ labelName }}</label>
        <input
            :type="inputType"
            class="form-control"
            :id="id"
            :value="modelValue"
            @input="$emit('modelValue', $event.target.value)"
        >
        <slot></slot>
    </div>
</template>

<style scoped>

</style>