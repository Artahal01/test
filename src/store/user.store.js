import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: {},
  update: (state) => set({ ...state }),
}))