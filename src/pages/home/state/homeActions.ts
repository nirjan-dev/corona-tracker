import { loadCountryCases as loadCasesFromApi } from 'src/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadCases = async ({commit, state, rootState}:any) =>  {
  if (state.casesLoaded) {
    return
  }

  const cases = await loadCasesFromApi(rootState.countryCode);
  if (!cases) {
    commit('SET_LOADING_ERROR', true);
  } else {
    commit('SET_LOADING_ERROR', false);
    commit('LOAD_CASES', cases);
  }
  commit('FINISH_LOADING_CASES');
}
