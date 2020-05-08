<template>
    <div>
        <small>{{ label }}</small>
        <p class="text-h3" :class="[textColor]">{{ count }}</p>
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
        },
        textColor: {
            type: String,
            required: true
        }
    }
})
</script>