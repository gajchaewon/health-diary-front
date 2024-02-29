//baseUrl 만들어서 api 만들어놓기~
import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:8080/",
});

export default axios;
