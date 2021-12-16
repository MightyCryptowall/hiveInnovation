import axios from "axios";

let backendURL = "http://139.162.8.174/api";


const baseURL = axios.create({
  baseURL: backendURL,
});



baseURL.interceptors.request.use(
  (config) => {
    const authStorage: string | null = localStorage.getItem("auth");

    if (authStorage) {
      const auth = JSON.parse(authStorage);

      try {
          if(config.headers){
            config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
          }
      } catch (error) {
        console.log(error);
        // throw Error ("Something Went Wrong!")
      }

    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);



baseURL.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    console.log(JSON.stringify(error.response));
    return Promise.reject(error);
  }
);

export default baseURL;