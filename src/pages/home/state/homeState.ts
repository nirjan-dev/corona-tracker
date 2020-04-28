import * as actions from './homeActions';
import * as getters from './homeGetters';
import * as mutations from './homeMutations';

const state = {};

export const HomeModule = {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
};