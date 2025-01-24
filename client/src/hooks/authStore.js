import { create } from "zustand";
import { useAuth0 } from "@auth0/auth0-react";

export const useAuthStore = create((set) => ({
  authUser:null,

  login: async (data) => {

  },
  signup: async (data) => {

  },

  logout: async () => {
    try {
      
    } catch (error) {
      
    }
  },

}))