<template>
  <container>
    <section>
      <section-header
        title="Latest Info"
        :badge="{
          title: 'Global'
        }"
      ></section-header>

      <stats-display moduleName="GlobalModule"></stats-display>
    </section>

    <timeline-display moduleName="GlobalModule" />
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

    onMounted(async () => {
      await loadCases();
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
