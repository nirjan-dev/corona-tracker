<template>
          <q-tabs
        v-model="tab"
        class="bg-white text-dark"
        active-color="primary"
      >
        <q-tab name="home" icon="home" label="Home" />
        <q-tab name="global" icon="language" label="Global" />
        <q-tab name="news" icon="list" label="News" />
      </q-tabs>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api'

    export default defineComponent({
        name: 'BottomNav',
        data() {
            return {
                tab: 'home'
            }
        },    
    })
</script>

<style scoped>

</style>