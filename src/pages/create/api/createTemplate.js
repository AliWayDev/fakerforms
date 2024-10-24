import axios from "axios";
import { globalVars } from "../../../global/vars";

export const createTemplate = async (data) => {
  const res = await axios.post(`${globalVars.API_URL}templates/create`, data, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

  return res.data;
};
