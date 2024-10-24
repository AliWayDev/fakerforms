import axios from "axios";
import { globalVars } from "../../../global/vars";

export const getTemplate = async (templateId) => {
  const res = await axios.get(`${globalVars.API_URL}templates/one`, {
    params: { templateId },
  });

  return res.data.data;
};
