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
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { StatsDisplay } from 'components/containers/ContainerComponents';
import { SectionHeader } from 'components/UI/UIComponents';
import { Container } from 'components/UI/UIComponents';

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
    Container
  }
});
</script>

<style scoped lang="scss">
.title {
  margin: 0;
}
</style>
