import axios from "axios";
import { globalVars } from "../../../global/vars";

export const getMyTemplates = async (text) => {
  const params = { creator_id: localStorage.getItem('id') };
  if (text) params.searchText = text;

  const { data } = await axios.get(`${globalVars.API_URL}templates/all`, {
    params,
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });

  return data.data;
};
