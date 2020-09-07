<template>
  <section>
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
      :class="selectedColorClass"
    >
    </vue-frappe>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted
} from '@vue/composition-api';

export default defineComponent({
  name: 'TimelineDisplay',
  setup({ moduleName }, { root: { $store } }: any) {
    const selectedTimelineOption = ref('cases');
    const timelineOptions = ['cases', 'recoveries', 'deaths'];
    const timeLineColors = ref(new Map());
    timeLineColors.value.set('cases', 'primary-chart');
    timeLineColors.value.set('recoveries', 'positive-chart');
    timeLineColors.value.set('deaths', 'negative-chart');

    const selectedColorClass = computed(() => {
      return timeLineColors.value.get(selectedTimelineOption.value);
    });

    const loadTimeline = async () => {
      await $store.dispatch(`${moduleName}/loadTimeline`);
    };

    const timeline = computed(() => {
      return $store.state[moduleName].timeline;
    });

    onMounted(async () => {
      await loadTimeline();
    });

    const tooltipOptions = {
      formatTooltipY: (d: any) => d
    };

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
      data,
      labels,
      tooltipOptions,
      timelineOptions,
      selectedTimelineOption,
      selectedTimelineData,
      selectedColorClass
    };
  },
  props: {
    moduleName: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
::v-deep .primary-chart {
  path {
    stroke: $primary !important;
  }
  circle {
    fill: darken($primary, 5) !important;
  }
}

::v-deep .negative-chart {
  path {
    stroke: $negative !important;
  }
  circle {
    fill: darken($negative, 5) !important;
  }
}

::v-deep .positive-chart {
  path {
    stroke: $positive !important;
  }
  circle {
    fill: darken($positive, 5) !important;
  }
}
</style>
