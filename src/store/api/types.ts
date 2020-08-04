import APIObject from "../api/models/APIObject";

export interface APIState {
  isLoading: boolean;
  apis: Array<APIObject> | [];
  count: number;
}
