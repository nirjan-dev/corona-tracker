import { loadGlobalCases as loadCasesFromApi, loadGlobalTimeline as loadTimelineFromApi } from 'src/api'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadCases = async ({commit, state, rootState}:any) =>  {
  if (state.casesLoaded) {
    return
  }

  const cases = await loadCasesFromApi();
  if (!cases) {
    commit('SET_LOADING_ERROR', true);
  } else {
    commit('SET_LOADING_ERROR', false);
    commit('LOAD_CASES', cases);
  }
  commit('FINISH_LOADING_CASES');
}


export const loadTimeline = async ({commit, state}: any) => {
  
  if(state.timelineLoaded) {
    return;
  }

  const timeline = await loadTimelineFromApi();

  if (!timeline){
    commit('SET_TIMELINE_ERROR', true);
  } else {
    commit('SET_TIMELINE_ERROR', false);
    commit('LOAD_TIMELINE', timeline);
  }
  commit('FINISH_LOADING_TIMELINE');
}