<template>
  <article>
    <div v-if="casesLoaded && !loadingError">
      <section class="q-my-md">
        <q-btn-toggle
          v-model="activeTab"
          spread
          toggle-color="primary"
          color="white"
          rounded
          text-color="dark"
          :options="[
            {
              label: 'Total',
              value: 'total'
            },
            {
              label: 'Today',
              value: 'today'
            }
          ]"
        >
        </q-btn-toggle>
      </section>

      <section>
        <q-tab-panels v-model="activeTab" animated>
          <q-tab-panel name="total">
            <div class="row q-col-gutter-x-lg q-col-gutter-y-sm">
              <counter-block
                class="col-6"
                v-for="caseBlock in totalCaseData"
                :key="caseBlock.label"
                :count="caseBlock.count"
                :label="caseBlock.label"
              ></counter-block>
            </div>
          </q-tab-panel>

          <q-tab-panel name="today">
            <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
              <counter-block
                class="col-6"
                v-for="caseBlock in todayCaseData"
                :key="caseBlock.label"
                :count="caseBlock.count"
                :label="caseBlock.label"
              ></counter-block>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </section>
    </div>

    <div class="row justify-center items-center q-py-md" v-if="!casesLoaded && !loadingError">
      <q-spinner-hourglass color="primary" size="lg" />
    </div>

    <div v-if="casesLoaded && loadingError">
    <q-banner inline-actions class="text-white bg-red">
      Sorry, we can't get the info for this location right now, Please try another location.
    </q-banner>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import { CounterBlock } from 'components/UI/UIComponents';
export default defineComponent({
  setup({ moduleName }, { root: { $store } }) {
    const activeTab = ref('total');

    const todayCaseData = computed(() => {
      return [
        {
          label: 'Total Cases',
          count: $store.state[moduleName].totalCaseStats.total,
        },
        {
          label: 'Deaths Today',
          count: $store.state[moduleName].todayCaseStats.deathsToday,
        },
        {
          label: 'New Cases',
          count: $store.state[moduleName].todayCaseStats.newCases,
        },
        {
          label: 'Recoveries Today',
          count: $store.state[moduleName].todayCaseStats.recoveriesToday,
        }
      ];
    });

    const totalCaseData = computed(() => {
      return [
        {
          label: 'Total Cases',
          count: $store.state[moduleName].totalCaseStats.total,
        },
        {
          label: 'Deaths',
          count: $store.state[moduleName].totalCaseStats.deaths,
        },
        {
          label: 'Active Cases',
          count: $store.state[moduleName].totalCaseStats.active,
        },
        {
          label: 'Recoveries',
          count: $store.state[moduleName].totalCaseStats.recoveries,
        }
      ];
    });

    const casesLoaded = computed(() => {
      return $store.state[moduleName].casesLoaded;
    });

    const loadingError = computed(() => {
      return $store.state[moduleName].loadingError;
    })

    return {
      activeTab,
      totalCaseData,
      todayCaseData,
      casesLoaded,
      loadingError
    };
  },
  components: {
    CounterBlock
  },
  props: {
    moduleName: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped></style>
