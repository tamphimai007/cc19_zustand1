import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// Step 1 Create Store
const tamStore = (set) => ({
  num: 5,
  firstName: "phongphat",

  actionIncrease: () => {
    console.log("click zustand");
    set((state) => ({ num: state.num + 1 }));
  },
  resetNum: () => {
    set((state) => ({ num: 0 }));
  },
  setName: (newValue) => {
    console.log(newValue);
    // set((state) => ({ firstName: newValue }));
    set({ firstName: newValue });
  },
  isLoading: false,
  data: [],
  error: null,
  actionGetProduct: async () => {
    set({ isLoading: true, error: null });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log(res.data);
      set({ data: res.data });
      set({ isLoading: false });
      console.log("hello fetch");
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
      set({ isLoading: false });
    }
  },
});

const useTamStore = create(
  persist(tamStore, {
    name: "tam-store",
    partialize: (state) => ({
      num: state.num,
      data: state.data,
    }),
  })
);

export default useTamStore;
