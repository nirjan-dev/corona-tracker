import * as actions from './globalActions';
import * as getters from './globalGetters';
import * as mutations from './globalMutations';

const state = {
  totalCaseStats: {
    total: 0,
    deaths: 0,
    active: 0,
    recoveries: 0
  },
  todayCaseStats: {
    total: 0,
    deathsToday: 0,
    newCases: 0,
    recoveriesToday: 0
  },
  casesLoaded: false,
  loadingError: false,
  timeline: null,
  timelineError: false,
  timelineLoaded: false
};

export const GlobalModule = {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};