export default interface APIObject {
  name: string;
  description: string;
  category: string;
  apikey: 'apiKey' | 'OAuth' | '';
  https: boolean;
  cors: boolean | 'unknown';
  url: string;
  id: number;
}