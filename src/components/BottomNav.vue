<template>
          <q-tabs
        v-model="tab"
        class="bg-white text-dark"
        active-color="primary"
      >
        <q-route-tab name="home" icon="home" label="Home" to="/home" />
        <q-route-tab name="global" icon="language" label="Global" to="/global" />
        <q-route-tab name="news" icon="list" label="News" to="/home" />
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