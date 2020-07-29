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
    return categories;
  },
  getApisCount(state): number {
    return state.count;
  }
};