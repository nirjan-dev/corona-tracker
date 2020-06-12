import { loadCountryCases as loadCasesFromApi } from 'src/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadCases = async ({commit, state}:any) =>  {
  if (state.casesLoaded) {
    return
  }

  const cases = await loadCasesFromApi(state.searchCountryCode);
  commit('LOAD_CASES', cases);
  commit('FINISH_LOADING_CASES');
}


export const setCountryCode = ({commit}: any, countryCode:string) => {
  commit('RESET_LOADING_CASES');
  commit('SET_COUNTRY_CODE', countryCode);
}