import { loadCountryCases as loadCasesFromApi, loadCountryTimeline as loadTimelineFromApi } from 'src/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadCases = async ({commit, state}:any) =>  {
  if (state.casesLoaded) {
    return
  }

  const cases = await loadCasesFromApi(state.searchCountryCode);
  if (!cases) {
    commit('SET_LOADING_ERROR', true);
  } else {
    commit('SET_LOADING_ERROR', false);
    commit('LOAD_CASES', cases);
  }
  commit('FINISH_LOADING_CASES');
}


export const setCountryCode = ({commit}: any, countryCode:string) => {
  commit('RESET_LOADING_CASES');
  commit('RESET_LOADING_TIMELINE');
  commit('SET_COUNTRY_CODE', countryCode);
}

export const loadTimeline = async ({commit, state}: any) => {
  
  if(state.timelineLoaded) {
    return;
  }

  const timeline = await loadTimelineFromApi(state.searchCountryCode);

  if (!timeline){
    commit('SET_TIMELINE_ERROR', true);
  } else {
    commit('SET_TIMELINE_ERROR', false);
    commit('LOAD_TIMELINE', timeline);
  }
  commit('FINISH_LOADING_TIMELINE');
}