<template>
  <div class="container q-px-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: 'Container'
});
</script>

<style scoped></style>
