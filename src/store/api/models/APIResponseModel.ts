import { APIResponseObject } from './APIResponseObject';

export default interface APIResponseModel {
  count: number;
  entries: Array<APIResponseObject>
}