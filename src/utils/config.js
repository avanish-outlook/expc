import { Platform } from "react-native";


const BACKEND_HOST_URL = "https://expense-api-uj2s.onrender.com";
export default config = {
  APP_NAME: 'Expense Manager',
  BACKEND_HOST_URL,
  API_BASE_URL: Platform.OS === 'android' ? `${BACKEND_HOST_URL}/api` : 'http://localhost:8000/api',

};
