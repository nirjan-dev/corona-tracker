<template>
    <div>
        <small>{{ label }}</small>
        <p class="text-h5">{{ count | comma }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: 'CounterBlock',
    props: {
        count: {
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
})
</script>