import axios from "axios";
const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const cmsAxiosGet = async (endPoint: string, params: any = {}) => {
  const jwtToken = localStorage.getItem("jwt_token") || "";
  const headers = {
    Authorization: `${jwtToken}`,
    "Content-Type": "application/json",
  };

  try {
    const res = await axios.get(backendUrl + endPoint, {
      params: params,
      headers: headers,
    });
    return res.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const cmsAxiosPost = async (endPoint: string, data: any) => {
  const jwtToken = localStorage.getItem("jwt_token") || "";
  const headers = {
    Authorization: `${jwtToken}`,
    "Content-Type": "application/json",
  };

  try {
    const res = await axios.post(backendUrl + endPoint, data, {
      headers: headers,
    });
    return res.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const cmsAxiosPut = async (endPoint: string, data: any) => {
  const jwtToken = localStorage.getItem("jwt_token") || "";
  const headers = {
    Authorization: `${jwtToken}`,
    "Content-Type": "application/json",
  };

  try {
    const res = await axios.put(backendUrl + endPoint, data, {
      headers: headers,
    });
    return res.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
