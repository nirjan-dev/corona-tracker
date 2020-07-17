<template>
  <container>
    <section>
      <section-header
        title="Latest Info"
        :badge="{
          title: countryCode,
          flag: countryCode
        }"
      ></section-header>

      <stats-display moduleName="HomeModule"></stats-display>
    </section>

    <vue-frappe
      id="test"
      :labels="[
        '12am-3am',
        '3am-6am',
        '6am-9am',
        '9am-12pm',
        '12pm-3pm',
        '3pm-6pm',
        '6pm-9pm',
        '9pm-12am'
      ]"
      title="My Awesome Chart"
      type="axis-mixed"
      :height="300"
      :colors="['purple', '#ffa3ef', 'light-blue']"
      :dataSets="data"
    >
    </vue-frappe>
  </container>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from '@vue/composition-api';
import { StatsDisplay } from 'components/containers/ContainerComponents';
import { SectionHeader } from 'components/UI/UIComponents';
import { Container } from 'components/UI/UIComponents';

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

    const data = [
      {
        name: 'Some Data',
        chartType: 'bar',
        values: [25, 40, 30, 35, 8, 52, 17, -4]
      },
      {
        name: 'Another Set',
        chartType: 'bar',
        values: [25, 50, -10, 15, 18, 32, 27, 14]
      },
      {
        name: 'Yet Another',
        chartType: 'line',
        values: [15, 20, -3, -15, 58, 12, -17, 37]
      }
    ];

    return {
      countryCode,
      data
    };
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

.flag {
  border-radius: 50%;
  padding: 0.2em;
}
</style>
