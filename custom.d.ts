// This is needed for tsc to not throw an error when importing svg files
declare module "*.svg" {
  const content: any;
  export default content;
}
