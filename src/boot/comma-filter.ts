// import something here

import { boot } from "quasar/wrappers";
import VueCommaFilter from 'vue-comma-filter'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default boot(({Vue}) => {
  Vue.use(VueCommaFilter);
})
