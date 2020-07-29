export default interface APIModel {
  name: string;
  description: string;
  category: string;
  apikey: 'apiKey' | 'OAuth' | '';
  https: boolean;
  cors: boolean | 'unknown';
  url: string;
}