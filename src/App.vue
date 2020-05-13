<template>
  <div id="q-app">
    <router-view v-if="currentCountryCode" />
        <div class="loading row justify-center items-center q-py-md" v-if="!currentCountryCode">
      <q-spinner-hourglass color="primary" size="8rem" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "@vue/composition-api"
import {useCountryCode} from 'src/composition-functions/useCountryCode'
export default defineComponent({
  name: 'App',
  setup(props, {root: {$store}}: any) {
    const { getCountryCode } = 
    useCountryCode({defaultCode: 'US'});
    
    const currentCountryCode = computed(() => {
      return $store.state.countryCode;
    })

    onMounted(async () => {
      const countryCode = await getCountryCode();
      $store.dispatch('setCountryCode', countryCode);
    })

    return {
      currentCountryCode
    }


  }
})
</script>


<style lang="scss">
  .loading {
    height: 100vh;
  }
</style>