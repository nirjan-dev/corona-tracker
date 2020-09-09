<template>
  <container>
    <section class="q-mb-md">
      <section-header
        title="Latest Info"
        :badge="{
          title: countryCode,
          flag: countryCode
        }"
      ></section-header>

      <stats-display moduleName="HomeModule"></stats-display>
    </section>

    <section>
      <section-header title="History"></section-header>
      <timeline-display moduleName="HomeModule" />
    </section>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from '@vue/composition-api';
import {
  StatsDisplay,
  TimelineDisplay
} from 'components/containers/ContainerComponents';
import { Container, SectionHeader } from 'components/UI/UIComponents';

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
    StatsDisplay,
    SectionHeader,
    Container,
    TimelineDisplay
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
