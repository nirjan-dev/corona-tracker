<template>
  <article>
    <div v-if="casesLoaded">
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
            <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
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

    <div class="row justify-center items-center q-py-md" v-if="!casesLoaded">
      <q-spinner-hourglass color="primary" size="lg" />
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

    return {
      activeTab,
      totalCaseData,
      todayCaseData,
      casesLoaded
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
