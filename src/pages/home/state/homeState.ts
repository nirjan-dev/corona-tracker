import * as actions from './homeActions';
import * as getters from './homeGetters';
import * as mutations from './homeMutations';

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
  timeLineError: false,
  timeLineLoaded: false
};

export const HomeModule = {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};