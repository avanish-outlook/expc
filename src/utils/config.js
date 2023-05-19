import { Platform } from "react-native";


const BACKEND_HOST_URL = "http://192.168.50.251:8000";
export default config = {
  APP_NAME: 'Mini',
  BACKEND_HOST_URL,
  API_BASE_URL: Platform.OS === 'android' ? `${BACKEND_HOST_URL}/api` : 'http://localhost:8000/api',

};
