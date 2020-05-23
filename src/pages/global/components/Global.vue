<template>
  <div class="container q-px-md">
    <div class="row q-my-md justify-between items-center">
      <h2 class="text-h4 title">Latest Info</h2>
      <q-chip outline color="primary" class="text-uppercase">
        Global
      </q-chip>
    </div>

      <stats-display moduleName="GlobalModule"></stats-display>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted
} from '@vue/composition-api';
import { StatsDisplay } from 'components/containers/ContainerComponents'
export default defineComponent({
  name: 'Home',
   setup(props, { root: { $store } }: any) {
    const loadCases = async () => {
      await $store.dispatch('GlobalModule/loadCases');
    };


    onMounted(async () => {
      await loadCases();
    });
  },

  components: {
    StatsDisplay
  }
});
</script>

<style scoped lang="scss">
.title {
  margin: 0;
}

</style>
