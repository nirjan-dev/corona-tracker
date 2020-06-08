<template>
  <q-toolbar class="text-white bg-primary">
    <q-btn class="q-mr-md" flat round dense icon="settings" />
    <slot></slot>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { CountrySelect } from 'components/UI/UIComponents';
export default defineComponent({
  name: 'Toolbar',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    CountrySelect
  }
});
</script>

<style></style>
