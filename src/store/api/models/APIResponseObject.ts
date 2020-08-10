// Interface to reflect how the data in the records
// are laid out that are returned from the api
export interface APIResponseObject {
  API: string;
  Description: string;
  Auth: "apiKey" | "OAuth" | "";
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}
