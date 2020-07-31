import { GetterTree } from 'vuex';
import { APIState } from './types';
import { RootState } from '../types';
import APIObject from './models/APIObject';

export const getters: GetterTree<APIState, RootState> = {
  getApis(state) {
    return state.apis;
  },
  getCategories(state) {
    const categories = new Set();
    state.apis.forEach((api: APIObject) => {
      categories.add(api.category);
    });
    return Array.from(categories);
  },
  getApisCount(state) {
    return state.count;
  },
  isLoading(state) {
    return state.isLoading;
  }
};