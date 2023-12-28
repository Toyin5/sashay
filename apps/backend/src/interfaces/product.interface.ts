import { Document } from "mongoose";

export interface productInterface extends Document {
  productName: string;
  price: number;
  productDescription: string;
  color: string;
  type: string;
  quantity: number;
  category: string;
  image: string;
  imageCloudId: string;
  admin: object
};


export interface productDataInterface {
  productName: string;
  price: number;
  productDescription: string;
  color: string;
  type: string;
  quantity: number;
  category: string;
  image: string;
  imageCloudId: string;
  admin: object | null
};

export interface productInputInterface {
  productName: string;
  price: string;
  productDescription: string;
  color: string;
  type: string;
  quantity: string;
  category: string;
};