import { placeHolder } from "../api/PlaceHolder";
import { ApiResponse, ParsedDataItem } from "../helpers";
import { parserData } from "../parser";

export const getTodosApi = async (): Promise<
  ApiResponse<ParsedDataItem[] | null>
> => {
  try {
    const response = await placeHolder.get("/todos");

    return { success: true, response: parserData(response.data) };
  } catch (error: any) {
    return { success: false, errorMessage: error };
  }
};
