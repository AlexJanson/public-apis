import { GetterTree } from 'vuex';
import { APIState } from './types';
import { RootState } from '../types';
import APIObject from './models/APIObject';

export const getters: GetterTree<APIState, RootState> = {
  getApis(state: APIState) {
    return state.apis;
  },
  getCategories(state: APIState) {
    const categories = new Set();
    state.apis.forEach((api: APIObject) => {
      categories.add(api.category);
    });
    return Array.from(categories);
  },
  getApisCount(state: APIState) {
    return state.count;
  },
  isLoading(state: APIState) {
    return state.isLoading;
  },
  getApiById: (state: APIState) => (id: number): APIObject | null => {
    const api = state.apis.find(api => api.id === id);
    return api || null;
  },
  getRecommendedApis: (state: APIState) => (category: string, amount: number, id: number): Array<APIObject> | null => {
    const ids: Array<number> = [];
    const apis = state.apis.filter((api: APIObject) => api.category === category);

    while (ids.length < amount) {
      const random = Math.floor(Math.random() * apis.length);
      if (ids.indexOf(random) === -1 && random !== id) {
        ids.push(random);
      }
    }

    return state.apis.filter((api: APIObject) => ids.includes(api.id));
  },
  getRandomApi: (state: APIState) => (): APIObject => {
    return state.apis[Math.floor(Math.random() * state.apis.length)];
  }
};