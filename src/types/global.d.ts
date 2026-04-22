declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.webp";

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

export {};
