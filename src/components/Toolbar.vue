<template>
  <q-toolbar class="text-white bg-primary">
      <q-btn flat round dense icon="info" />
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
      <q-btn flat round dense icon="search" />
    </q-toolbar>
</template>

<script>
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
    name: 'Toolbar',
    props: {
      title: {
        type: String,
        required: true
      }
    }
})
</script>

<style>

</style>