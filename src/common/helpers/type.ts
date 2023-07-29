import { AxiosError } from "axios";

export type ApiResponse<T = any | undefined> = {
  success: boolean;
  status?: number;
  statusCode?: number | null;
  errorMessage?: string | null;
  response?: T;
  error?: AxiosError;
};

export interface ResponseJSONPlaceHolderType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ProductsType {
  data: ResponseJSONPlaceHolderType;
}

export interface ParsedDataItem {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
}
