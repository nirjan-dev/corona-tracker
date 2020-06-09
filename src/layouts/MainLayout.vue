<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <toolbar :title="title">
    
        <country-select @valueChange="onCountrySelect" :lightText="true" :borderless="true"></country-select>

      </toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <bottom-nav></bottom-nav>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Toolbar } from 'components/UI/UIComponents';
import { BottomNav, CountrySelect } from 'components/UI/UIComponents';

import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  name: 'MainLayout',

  components: {
    Toolbar,
    BottomNav,
    CountrySelect
  },

  setup(props, context) {
    const name: string = context.root.$route.name || 'Home';
    const title = ref(name);
    function onCountrySelect(country: any) {
      context.root.$router.push(`search/${country.Code}`);
    }
    return {
      title,
      onCountrySelect
    }
  },

  watch: {
    '$route.name'(value: string) {
      this.title = value;
    }
  }



});
</script>

<style lang="scss">
</style>