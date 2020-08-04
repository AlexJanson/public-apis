import { GetterTree } from "vuex";
import { APIState } from "./types";
import { RootState } from "../types";
import APIObject from "./models/APIObject";

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
  getRecommendedApis: (state: APIState) => (
    category: string,
    amount: number,
    id: number
  ): Array<APIObject> | null => {
    const indecis: Array<number> = [];
    const apis = state.apis.filter(
      (api: APIObject) => api.category === category
    );

    while (indecis.length < amount) {
      const random = Math.floor(Math.random() * apis.length);
      if (indecis.indexOf(random) === -1 && random !== id) {
        indecis.push(random);
      }
    }

    return indecis.map(i => apis[i]);
  },
  getRandomApi: (state: APIState) => (): APIObject => {
    return state.apis[Math.floor(Math.random() * state.apis.length)];
  }
};
