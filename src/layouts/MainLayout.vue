<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <toolbar title="Home"></toolbar>
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

import { createComponent } from '@vue/composition-api';
export default createComponent({
  name: 'MainLayout',

  components: {
    Toolbar,
    BottomNav
  }
});
</script>
