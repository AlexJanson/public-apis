import { MutationTree } from 'vuex';
import { APIState } from './types';
import APIObject from './models/APIObject';

export const mutations: MutationTree<APIState> = {
  apisFetched(state, apis: Array<APIObject>) {
    state.apis = apis;
  },
  apisCount(state, count: number) {
    state.count = count;
  },
  isLoading(state, value) {
    state.isLoading = value;
  }
};