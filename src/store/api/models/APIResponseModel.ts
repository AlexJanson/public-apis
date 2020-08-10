import { APIResponseObject } from "./APIResponseObject";

// Api response with a count (number of records) and entries (the records)
export default interface APIResponseModel {
  count: number;
  entries: Array<APIResponseObject>;
}
