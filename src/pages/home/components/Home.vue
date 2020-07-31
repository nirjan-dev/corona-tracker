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

    <q-select
      v-model="selectedTimelineOption"
      :options="timelineOptions"
      label="Select timeline type"
      behavior="menu"
    />

    <vue-frappe
      v-if="selectedTimelineData"
      id="timeline"
      :labels="labels"
      type="line"
      :height="200"
      :dataSets="selectedTimelineData"
      :tooltipOptions="tooltipOptions"
    >
    </vue-frappe>
  </container>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  computed,
  ref
} from '@vue/composition-api';
import { StatsDisplay } from 'components/containers/ContainerComponents';
import { SectionHeader } from 'components/UI/UIComponents';
import { Container } from 'components/UI/UIComponents';

export default defineComponent({
  name: 'Home',
  setup(props, { root: { $store } }: any) {
    const selectedTimelineOption = ref('cases');
    const timelineOptions = ['cases', 'recoveries', 'deaths'];
    // const timeLineColors = ref(new Map());
    // timeLineColors.value.set('cases', 'blue');
    // timeLineColors.value.set('recoveries', 'green');
    // timeLineColors.value.set('deaths', 'red');

    // const selectedColors = computed(() => {
    //   return [timeLineColors.value.get(selectedTimelineOption.value)];
    // })

    const loadCases = async () => {
      await $store.dispatch('HomeModule/loadCases');
    };

    const loadTimeline = async () => {
      await $store.dispatch('HomeModule/loadTimeline');
    };

    const countryCode = computed(() => {
      return $store.state.countryCode.toLowerCase();
    });

    const timeline = computed(() => {
      return $store.state.HomeModule.timeline;
    });

    onMounted(async () => {
      await loadCases();
      await loadTimeline();
    });

    const tooltipOptions = {
      formatTooltipY: (d: any) => d
    };

    // const data = [
    //   {
    //     name: 'cases',
    //     values: [25000, 400000, 3000000, 3500000, 8000, 520000, 1700000]
    //   },
    //   {
    //     name: 'deaths',
    //     values: [20000, 40000, 450000, 35000, 1000, 1520, 19000]
    //   },
    //   {
    //     name: 'recoveries',
    //     values: [1500, 2000, 30000, 3200, 50, 20, 1100]
    //   }
    // ];
    interface Itimeline {
      name: string;
      values: number[];
    }
    const data = computed(() => {
      if (!timeline.value) {
        return null;
      }
      const timelineData: Itimeline[] = [
        {
          name: 'cases',
          values: []
        },
        {
          name: 'deaths',
          values: []
        },
        {
          name: 'recoveries',
          values: []
        }
      ];
      for (const key in timeline.value.cases) {
        if (Object.prototype.hasOwnProperty.call(timeline.value.cases, key)) {
          const cases = timeline.value.cases[key];
          const deaths = timeline.value.deaths[key];
          const recoveries = timeline.value.recovered[key];

          timelineData[0].values.push(cases);
          timelineData[1].values.push(deaths);
          timelineData[2].values.push(recoveries);
        }
      }

      return timelineData;
    });

    const selectedTimelineData = computed(() => {
      if (!data.value) return;

      return data.value.filter(dataPoint => {
        return dataPoint.name === selectedTimelineOption.value;
      });
    });

    const labels = computed(() => {
      if (!timeline.value) return null;

      const labels = [];
      for (const key in timeline.value.cases) {
        if (Object.prototype.hasOwnProperty.call(timeline.value.cases, key)) {
          const date = key;
          const dateParts = date.split('/');
          const formatteDate = dateParts[0] + '/' + dateParts[1];
          labels.push(formatteDate);
        }
      }
      return labels;
    });

    return {
      countryCode,
      data,
      labels,
      tooltipOptions,
      timelineOptions,
      selectedTimelineOption,
      selectedTimelineData
      // timeLineColors,
      // selectedColors
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
