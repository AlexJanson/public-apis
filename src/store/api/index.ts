import { APIState } from './types';
import { Module } from 'vuex';
import { RootState } from '../types';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const state: APIState = {
  apis: []
};

const namespaced: boolean = true;

export const api: Module<APIState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}