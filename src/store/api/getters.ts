import { GetterTree } from "vuex";
import { APIState } from "./types";
import { RootState } from "../types";
import APIObject from "./models/APIObject";

export const getters: GetterTree<APIState, RootState> = {
  getApis(state: APIState) {
    return state.apis;
  },
  getCategories(state: APIState) {
    // Set to remove duplicate entries of categories
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
    // Track all of the indecis of the records
    const indecis: Array<number> = [];
    // Filter the apis on the category we want
    const apis = state.apis.filter(
      (api: APIObject) => api.category === category
    );

    // Loop until we have the amount of apis we want to return
    while (indecis.length < amount) {
      const random = Math.floor(Math.random() * apis.length);
      if (indecis.indexOf(random) === -1 && random !== id) {
        indecis.push(random);
      }
    }

    // Return the apis in an array found by their index
    return indecis.map(i => apis[i]);
  },
  getRandomApi: (state: APIState) => (): APIObject => {
    return state.apis[Math.floor(Math.random() * state.apis.length)];
  }
};
