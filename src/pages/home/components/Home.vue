<template>
  <toolbar title="Home"></toolbar>
</template>

<script>
import {Toolbar} from 'components/UIComponents'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: 'Home',
    components: {
      Toolbar
    }
})
</script>

<style>

</style>