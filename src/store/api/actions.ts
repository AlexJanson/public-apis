import { ActionTree } from 'vuex';
import { APIState } from './types';
import { RootState } from '../types';
import { API_BASE_URL } from '@/constants';
import APIResponseModel from './models/APIResponseModel';

export const actions: ActionTree<APIState, RootState> = {
  async fetchAPIs({ commit }) {
    const data = await fetch(`${API_BASE_URL}/entries`);
    const result = await data.json() as Promise<APIResponseModel>;
  }
};