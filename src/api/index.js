import axios from "axios";
import env from "react-dotenv";

export default axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${env.TOKEN}`,
  },
});
