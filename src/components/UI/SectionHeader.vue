<template>
  <header class="row justify-between items-center">
    <h2 class="text-h5 title text-dark">{{ title }}</h2>
    <q-chip v-if="badge" outline color="primary" class="text-uppercase">
      <q-avatar v-if="badge.flag">
        <span :class="`flag flag-${badge.flag} q-ml-sm`"></span>
      </q-avatar>
      {{ badge.title }}
    </q-chip>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

interface Ibadge {
  title: string;
  flag?: string;
}

export default defineComponent({
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    badge: {
      required: false,
      type: Object as PropType<Ibadge>
    }
  }
});
</script>

<style scoped>
  h2 {
    margin: 0;
  }

  header {
    padding: 0.5rem 0;
  }
</style>
