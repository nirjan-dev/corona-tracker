<template>
  <div class="container q-px-md">
    <div class="row q-my-md justify-between items-center">
      <h2 class="text-h4 title">Latest Info</h2>
      <q-chip outline color="primary" class="text-uppercase">
        Global
      </q-chip>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api';
export default defineComponent({
  name: 'Home'
});
</script>

<style scoped lang="scss">
.title {
  margin: 0;
}

</style>
