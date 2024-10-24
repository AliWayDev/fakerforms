import axios from "axios";
import { globalVars } from "../../../global/vars";

export const registerToAccount = async (name, email, password) => {
  try {
    const { data } = await axios.post(`${globalVars.API_URL}user/register`, {
      username: name,
      email,
      password,
    })

    return { ok: true, data };
  } catch (error) {
    return { ok: false, msg: error.response.data.msg };
  }
};
