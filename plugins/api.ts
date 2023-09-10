import axios from "axios";
import API from "~/api";
export default defineNuxtPlugin((nuxtApp) => {
  const baseUrl: string = "";

  const request = axios.create({ baseURL: baseUrl });

  const errorHandler = (error: any) => {
    if (!error.response) {
      // store.dispatch("alert/showMessage", {
      //   type: "error",
      //   message: "Tidak bisa terkoneksi dengan API",
      // });
      throw new Error("Failed to connect API");
    }
    const errorMessage = error.response.data.message;
    // if (error.response.status === 401) {
    //   localStorage.removeItem('token')
    //   localStorage.removeItem('user')
    //   window.location = '/auth'
    // }
    // const alertMessage =
    //   error.response.data.code === "VALIDATION_ERROR"
    //     ? error.response.data.data[0].msg
    //     : errorMessage;
    // store.dispatch("alert/showMessage", {
    //   type: "error",
    //   message: alertMessage,
    // });
    throw new Error(errorMessage);
  };

  const successHandler = (response: any) => {
    return response;
  };

  const requestHandler = (request: any) => {
    request.headers.Authorization = localStorage.getItem("token");
    return request;
  };
  request.interceptors.request.use((request) => requestHandler(request));
  request.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
  );

  return {
    provide: {
      api: new API(request),
      axios: request,
    },
  };
});
