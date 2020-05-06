<template>
  <div class="container q-px-md">
    <div class="row q-my-md justify-between items-center">
      <h2 class="text-h4 title">Latest Info</h2>
      <q-chip outline color="primary">
        <q-avatar>
        <!-- TODO: use local icon set for flags  -->
          <span class="flag flag-np q-ml-sm"></span>
        </q-avatar>
        NP
      </q-chip>
    </div>

    <div class="q-my-md">
      <q-btn-toggle v-model="state.activeTab" spread toggle-color="primary" color="white" rounded text-color="dark" :options="[
        {
          label: 'Total',
          value: 'total'
        },
        {
          label: 'Today',
          value: 'today'
        }
      ]">
      </q-btn-toggle>
    </div>

    <div>
      <q-tab-panels v-model="state.activeTab" animated >
        <q-tab-panel name="total">
        <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
              <counter-block class="col-6" v-for="caseBlock in state.todayCaseData" :key="caseBlock.label" :count="caseBlock.count" :label="caseBlock.label" :textColor="caseBlock.textColor"></counter-block>
        </div>
      
        </q-tab-panel>

        <q-tab-panel name="today">
            <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
              <counter-block class="col-6" v-for="caseBlock in state.totalCaseData" :key="caseBlock.label" :count="caseBlock.count" :label="caseBlock.label" :textColor="caseBlock.textColor"></counter-block>
        </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { CounterBlock } from 'components/UIComponents'
export default defineComponent({
  name: 'Home',
  setup() {
    const state = reactive({
      activeTab: 'total',
      todayCaseData: [
        {
          label: 'Total Cases',
          count: '5,234,221',
          textColor: 'text-warning'
        },
        {
          label: 'Deaths',
          count: '234,221',
          textColor: 'text-negative'
        },
        {
          label: 'Active Cases',
          count: '403,212',
          textColor: 'text-info'
        },
        {
          label: 'Recoveries',
          count: '25,234',
          textColor: 'text-positive'
        },
      ],
      totalCaseData: [
        {
          label: 'Total Cases',
          count: '8,234,221',
          textColor: 'text-warning'
        },
        {
          label: 'Deaths',
          count: '434,221',
          textColor: 'text-negative'
        },
        {
          label: 'Active Cases',
          count: '3,212',
          textColor: 'text-info'
        },
        {
          label: 'Recoveries',
          count: '55,234',
          textColor: 'text-positive'
        },
      ]
    })
    return {
      state,
    }
  },
  components: {
    CounterBlock
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
