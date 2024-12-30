import config from "@/config";
import axios from "axios";

// Create Axios instance with base configuration
const axiosInstance = axios.create({
    baseURL: config.backendApi,
  });

  export default axiosInstance;