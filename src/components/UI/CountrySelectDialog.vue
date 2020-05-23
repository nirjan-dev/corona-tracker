<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <country-select @valueChange="onSelectChange"></country-select>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn v-if="enableCancel" color="default" text-color="dark" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { CountrySelect } from 'components/UI/UIComponents'
export default defineComponent({
  name: 'CountrySelectDialog',
  props: {
    enableCancel: {
      type: Boolean,
      required: false
    },
    behaviour: {
      type: String,
      required: false,
      default: 'menu'
    }
  },
  setup(props, { emit }) {
    const dialog: any = ref(null);
    const selectedCountry: any = ref(null);
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

    function onSelectChange(newValue: any) {
        selectedCountry.value = newValue
    }


    return {
      dialog,
      show,
      hide,
      onDialogHide,
      onOKClick,
      onCancelClick,
      selectedCountry,
      onSelectChange
    };
  },
  components: {
      CountrySelect
  }
});
</script>

<style scoped></style>
