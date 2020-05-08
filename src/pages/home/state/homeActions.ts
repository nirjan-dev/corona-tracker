import { loadCases as loadCasesFromApi } from "../api"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadCases = async ({commit, state}:any) =>  {
  if (state.casesLoaded) {
    return
  }

  const cases = await loadCasesFromApi();
  commit('LOAD_CASES', cases);
  commit('FINISH_LOADING_CASES');
}
