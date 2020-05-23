<template>
  <div class="container q-px-md">
    <div class="row q-my-md justify-between items-center">
      <h2 class="text-h4 title">Latest Info</h2>
      <q-chip outline color="primary" class="text-uppercase">
        <q-avatar>
          <!-- TODO: use local icon set for flags  -->
          <span :class="`flag flag-${countryCode} q-ml-sm`"></span>
        </q-avatar>
        {{ countryCode }}
      </q-chip>
    </div>


    <stats-display moduleName="HomeModule"></stats-display>
   
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  computed
} from '@vue/composition-api';
import { StatsDisplay } from 'components/containers/ContainerComponents'
export default defineComponent({
  name: 'Home',
  setup(props, { root: { $store } }: any) {
    const loadCases = async () => {
      await $store.dispatch('HomeModule/loadCases');
    };
     const countryCode = computed(() => {
        return $store.state.countryCode.toLowerCase();
      });

    onMounted(async () => {
      await loadCases();
    });

    return {
      countryCode
    };
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

.flag {
  border-radius: 50%;
  padding: 0.2em;
}
</style>
