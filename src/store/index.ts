import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import { HomeModule } from 'pages/home/state/homeState';
// import example from './module-example'
// import exampleState from './module-example/state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  // example: typeof exampleState;
  example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store({
    modules: {
      HomeModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
    state: {
      countryCode: null
    },
    actions: {
      setCountryCode (context, countryCode) {
        context.commit('SET_COUNTRY_CODE', countryCode);
      }
    },
    mutations: {
      SET_COUNTRY_CODE (state, countryCode) {
        state.countryCode = countryCode;
      }
    }
  });

  return Store;
})
