import { create } from "zustand";
import {axiosInstance} from '../lib/axios'; 


export const useAuthStore = create((set) => ({
  authUser:null,

  login: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(`Response to login: `, res);
      set({authUser: res.data});
    } catch (error) {
      console.log("error with login: ", error.response.data.message);
    }
  },

  signup: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(`Response to signup: ${res}`);
      set({authUser: res.data});
    } catch (error) {
      console.log(`Error with signup: ${error.response.data.message}`);
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post("/auth/logout");
      console.log("Response to logout: ", res);
      set({authUser: null});
    } catch (error) {
      console.log("Error with logout:", error.response.data.message)
    }
  },

}))