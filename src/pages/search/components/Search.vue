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

      <stats-display moduleName="SearchModule"></stats-display>
    </section>
  </container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { StatsDisplay } from 'components/containers/ContainerComponents';
import { SectionHeader, Container } from 'components/UI/UIComponents';
export default defineComponent({
  name: 'Search',

  setup(props, context) {
    const countryCode = ref(
      context.root.$route.params.countryCode.toLowerCase()
    );
    async function reloadCases() {
      context.root.$store.dispatch(
        'SearchModule/setCountryCode',
        countryCode.value
      );
      await context.root.$store.dispatch('SearchModule/loadCases');
    }

    async function onChangeCountryCode(newCountryCode: string) {
      console.log('onChangeCountryCode -> countryCode', countryCode);
      countryCode.value = newCountryCode.toLowerCase();
      await reloadCases();
    }

    onMounted(async () => {
      await reloadCases();
    });

    return {
      onChangeCountryCode,
      countryCode
    };
  },

  watch: {
    '$route.params.countryCode': 'onChangeCountryCode'
  },

  components: {
    StatsDisplay,
    SectionHeader,
    Container
  }
});
</script>

<style scoped></style>
