<template>
  <div id="q-app">
    <router-view v-if="currentCountryCode" />
    <div
      class="loading row justify-center items-center q-py-md"
      v-if="!currentCountryCode"
    >
      <q-spinner-hourglass color="primary" size="8rem" />
    </div>

    
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from '@vue/composition-api';
import { useCountryCode } from 'src/composition-functions/useCountryCode';
import { CountrySelectDialog } from './components/UI/UIComponents';
export default defineComponent({
  name: 'App',
  setup(props, { root }) {
    const { getCountryCode } = useCountryCode();

    const currentCountryCode = computed(() => {
      return root.$store.state.countryCode;
    });

    onMounted(async () => {
      const storageKey = 'CoronaApp-countryCode';
      // check if country code has already been saved
      let countryCode = localStorage.getItem(storageKey);

      if (!countryCode) {
        // if no country code found, use geoLocation to get country Code
        countryCode = await getCountryCode();

        // if geoLocation fails, show a dropdown of country names
        if (!countryCode) {
          root.$q.dialog({
            component: CountrySelectDialog
          }).onOk((countryCode: string) => {
              root.$store.dispatch('setCountryCode', countryCode);
              localStorage.setItem(storageKey, countryCode);
          })
        }
      }
      root.$store.dispatch('setCountryCode', countryCode);
      localStorage.setItem(storageKey, countryCode || '');
    });


    return {
      currentCountryCode,
    };
  }
});
</script>

<style lang="scss">
.loading {
  height: 100vh;
}
</style>
