<template>
  <q-select
    :class="lightText ? 'light-select full-width' : 'full-width'"
    v-model="selectedCountry"
    use-input
    id="country-select"
    hide-selected
    fill-input
    input-debounce="0"
    :options="options"
    @filter="filterFn"
    option-value="Code"
    option-label="Name"
    behavior="menu"
    placeholder="Search country"
    @input="onValueChange"
    :input-style="{
      color: lightText ? 'white' : 'inherit'
    }"
    :borderless="borderless"
    :label="label"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No country found
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { countries } from 'src/countries';
import * as fuzzysearch from 'fuzzysearch';
export default defineComponent({
  name: 'CountrySelect',
  setup(props, { emit }) {
    const countriesList = ref(countries);
    const options = ref(countriesList.value);
    const selectedCountry = ref(null);

    function filterFn(val: string, update: any) {
      update(() => {
        const needle = val.toLowerCase();
        options.value = countriesList.value.filter(country =>
          // country.Name.toLowerCase().includes(needle)
          {
            return fuzzysearch(needle, country.Name.toLowerCase());
          }
        );
      });
    }

    function onValueChange() {
      emit('valueChange', selectedCountry.value);
      const input = document.querySelector('#country-select input');
      if (input) {
        (input as HTMLInputElement).blur();
      }
    }

    function resetCountry() {
      selectedCountry.value = null;
    }

    return {
      options,
      selectedCountry,
      filterFn,
      onValueChange,
      resetCountry
    };
  },
  props: {
    lightText: {
      type: Boolean,
      required: false,
      default: false
    },
    borderless: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: undefined
    }
  },

  watch: {
    $route: 'resetCountry'
  }
});
</script>

<style scoped>
.light-select >>> .q-field__marginal {
  color: white;
}
</style>
