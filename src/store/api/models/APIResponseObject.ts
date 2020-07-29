export interface APIResponseObject {
  API: string;
  Description: string;
  Auth: 'apiKey' | 'OAuth' | '';
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};