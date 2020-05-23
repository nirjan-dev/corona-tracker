<template>
  <q-select
    filled
    v-model="selectedCountry"
    use-input
    hide-selected
    fill-input
    input-debounce="0"
    :options="options"
    @filter="filterFn"
    option-value="Code"
    option-label="Name"
    label="Select country"
    behavior="menu"
    @input="onValueChange"
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
export default defineComponent({
  name: 'CountrySelect',
  setup(props, { emit }) {
    const countriesList = ref(countries);
    const options = ref(countriesList.value);
    const selectedCountry = ref(options.value[0]);
  

    function filterFn(val: string, update: any) {
      update(() => {
        const needle = val.toLowerCase();
        options.value = countriesList.value.filter(v =>
          v.Name.toLowerCase().includes(needle)
        );
      });
    }

    function onValueChange() {
      emit('valueChange', selectedCountry.value);
    }

    return {
      options,
      selectedCountry,
      filterFn,
      onValueChange
    };
  }
});
</script>

<style scoped></style>
