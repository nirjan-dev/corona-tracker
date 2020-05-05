<template>
  <div class="container q-px-md">
    <div class="row q-my-md justify-between items-center">
      <h2 class="text-h3 title">Latest Info</h2>
      <q-chip outline color="primary">
        <q-avatar>
        <!-- TODO: use local icon set for flags  -->
          <span class="flag flag-np q-ml-sm"></span>
        </q-avatar>
        NP
      </q-chip>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'Home'
});
</script>

<style scoped lang="scss"> 
  .title {
    margin: 0;
  }

  .flag {
    border-radius: 50%;
    padding: 0.2em;
  }
</style>
