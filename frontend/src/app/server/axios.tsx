import axios from "axios";
import { toast } from "react-toastify";

export default function Api() {
  const appClient = axios.create({
    baseURL: process.env.PATH_URL_BACKEND,
    headers: {
      Accept: "application/json",
      ContentType: "application/json",
    },
  });
  appClient.interceptors.response.use((response: any) => {
    if (response.data.success != false) {
      toast.success("save successfull");
      return response.data;
    } else {
      response.data.data.email
        ? toast.error(response.data.data?.email[0])
        : toast.error(response.data.data.phone[0]);
      return response.data.success;
    }
  });

  return appClient;
}
