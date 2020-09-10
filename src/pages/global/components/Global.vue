<template>
  <container>
    <section class="q-mb-md">
      <section-header
        title="Latest Info"
        :badge="{
          title: 'Global'
        }"
      ></section-header>

      <stats-display moduleName="GlobalModule"></stats-display>
    </section>

    <section>
      <section-header title="History"></section-header>
      <timeline-display moduleName="GlobalModule" />
    </section>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { StatsDisplay, TimelineDisplay } from 'components/containers/ContainerComponents';
import { SectionHeader, Container } from 'components/UI/UIComponents';

export default defineComponent({
  name: 'Home',
  setup(props, { root: { $store } }: any) {
    const loadCases = async () => {
      await $store.dispatch('GlobalModule/loadCases');
    };

    const loadTimeline = async () => {
      await $store.dispatch('GlobalModule/loadTimeline');
    };

    onMounted(async () => {
      await loadCases();
      await loadTimeline();
    });
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
</style>
