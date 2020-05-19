<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
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
            label="Select your country"
            behavior="menu"
        >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No country found
            </q-item-section>
          </q-item>
        </template>
        </q-select>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { countries } from 'src/countries'
export default defineComponent({
  name: 'CountrySelect',
  setup(props, {emit}) {
      const dialog: any = ref(null);
      const countriesList = ref(countries);
      const options = ref(countriesList.value);
      const selectedCountry = ref(options.value[0]);
      // following method is REQUIRED
    // (don't change its name --> "show")
    function show() {
      dialog.value.show();
    }

    // following method is REQUIRED
    // (don't change its name --> "hide")
    function hide() {
      dialog.value.hide();
    }

    function onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      emit('hide');
    }

    function onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      emit('ok', selectedCountry.value.Code);
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      hide();
    }

    function onCancelClick() {
      // we just need to hide dialog
      hide();
    }

    function filterFn (val: string, update: any) {
      update(() => {
        const needle = val.toLowerCase()
        options.value = countriesList.value.filter(v => v.Name.toLowerCase().includes(needle))
      })
    }

    return {
        dialog,
        show,
        hide,
        onDialogHide,
        onOKClick,
        onCancelClick,
        options,
        selectedCountry,
        filterFn
    }
  }
});
</script>

<style scoped></style>
