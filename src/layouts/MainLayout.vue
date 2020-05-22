<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <toolbar :title="title"></toolbar>
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
import { Toolbar } from 'components/UIComponents';
import { BottomNav } from 'components/UIComponents';

import { defineComponent, ref, watchEffect, computed, watch } from '@vue/composition-api';
export default defineComponent({
  name: 'MainLayout',

  components: {
    Toolbar,
    BottomNav
  },

  setup(props, context) {
    const name: string = context.root.$route.name || 'Home';
    const title = ref(name);
    return {
      title
    }
  },

  watch: {
    '$route.name'(value: string) {
      this.title = value;
    }
  }



});
</script>
