import axios from "axios";
import { globalVars } from "../../../global/vars";

export const getAllTemplates = async (text) => {
  const params = text ? { searchText: text } : {};

  const { data } = await axios.get(
    `${globalVars.API_URL}templates/all-public`,
    {
      params,
    }
  );

  return data.data;
};
