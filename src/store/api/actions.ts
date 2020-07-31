import { ActionTree } from 'vuex';
import { APIState } from './types';
import { RootState } from '../types';
import { API_BASE_URL } from '@/constants';
import APIResponseModel from './models/APIResponseModel';
import { APIResponseObject } from './models/APIResponseObject';
import APIObject from './models/APIObject';

export const actions: ActionTree<APIState, RootState> = {
  async fetchAPIs({ commit }) {
    commit('isLoading', true);
    const data = await fetch(`${API_BASE_URL}/entries`);
    const result = await (data.json() as Promise<APIResponseModel>);
    const apis: Array<APIObject> = result.entries.map((api: APIResponseObject, index) => {
      return {
        name: api.API,
        description: api.Description,
        category: api.Category,
        cors: (api.Cors === "yes" ? true : api.Cors === "no" ? false : "unknown"),
        https: api.HTTPS,
        apikey: api.Auth,
        url: api.Link,
        id: index
      } as APIObject;
    });
    commit('apisFetched', apis);
    commit('apisCount', result.count);
    commit('isLoading', false);
  }
};