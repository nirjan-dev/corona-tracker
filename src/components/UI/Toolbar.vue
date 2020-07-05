<template>
  <q-toolbar class="text-white bg-primary">
    <q-btn
      class="q-mr-md"
      flat
      round
      dense
      icon="settings"
      @click="onSettingsClicked"
    />
    <slot></slot>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { CountrySelect, SettingsDialog } from 'components/UI/UIComponents';
import { STORAGE_KEY } from '../../App.vue';
export default defineComponent({
  name: 'Toolbar',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    CountrySelect
  },
  methods: {
    onSettingsClicked() {
      this.$root.$q
        .dialog({
          component: SettingsDialog
        })
        .onOk((countryCode: string) => {
          this.$root.$store.dispatch('setCountryCode', countryCode);
          localStorage.setItem(STORAGE_KEY, countryCode);
          location.reload();
        });
    }
  }
});
</script>

<style></style>
