import { loadCases as loadCasesFromApi } from "../api"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadCases = async ({commit, state, rootState}:any) =>  {
  if (state.casesLoaded) {
    return
  }

  const cases = await loadCasesFromApi(rootState.countryCode);
  commit('LOAD_CASES', cases);
  commit('FINISH_LOADING_CASES');
}
