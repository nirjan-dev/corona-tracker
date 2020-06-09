<template>
    <div>
        search
    </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, onUpdated, watch, onMounted } from '@vue/composition-api'
    export default defineComponent({
        name: 'Search',

        setup(props, context) {
            function onChangeCountryCode(countryCode: string) {
            console.log("onChangeCountryCode -> countryCode", countryCode)
                
            }

            onMounted(() => onChangeCountryCode(context.root.$route.params.countryCode))
        return {
            onChangeCountryCode
        }
        

        },

        watch: {
            '$route.params.countryCode': 'onChangeCountryCode'
        }
    })
</script>

<style scoped>

</style>