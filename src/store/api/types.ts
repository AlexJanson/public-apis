import APIObject from '../api/models/APIObject';

export interface APIState {
  apis: Array<APIObject> | [];
  count: number;
};