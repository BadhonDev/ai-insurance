import { create } from "zustand"

export const useStateData = create((set) => ({
  data: {},
  setData: (items) => set(() => ({ data: items })),
}))
