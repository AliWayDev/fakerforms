import axios from "axios";
import { globalVars } from "../../../global/vars";

export const loginToAccount = async (username, password) => {
  try {
    const { data } = await axios.post(`${globalVars.API_URL}user/login`, {
      username,
      password,
    });

    return { ok: true, data };
  } catch (error) {
    return { ok: false, msg: error.response.data.msg };
  }
};
