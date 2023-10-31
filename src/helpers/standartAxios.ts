import axios from "axios";

const instance = axios.create();
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const standartAxios = (url:string, lang:string, type:string, data?:object) => {
  if (type === "POST") {
    return instance({
      method: "POST",
      data:data,
      baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}${url}/`,
      headers: {
        "Accept-Language": `${lang}`,
      },
    });
  }
  else if (type === "GET") {
    return instance({
      method: "GET",
      baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}${url}/`,
      headers: {
        "Accept-Language": `${lang}`,
      },
    });
  }
};