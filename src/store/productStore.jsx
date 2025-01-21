import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Step 1 Create Store
const productStore = (set) => ({
  firstName: "phongphat",
  lastName: "japhichom",
  address: { street: "123", zipcode: "456" },
  profile: ["phongphat", "japhichom"],
  products: [
    { id: 1, title: "Asus", price: 30000 },
    { id: 2, title: "Lenovo", price: 20000 },
  ],
  number: 0,
  actionIncrease: () => {
    set((state) => ({ number: state.number + 1 }));
  },
  actionDecrease: () => {
    set((state) => ({ number: state.number - 1 }));
  },
  data: [],
  actionGetData: async () => {
    console.log("Hello, GET data");
    try {
      const resp = await axios.get("https://dummyjson.com/products");
      //   console.log(resp);
      set({ data: resp.data.products });
    } catch (error) {
      console.log(error.message);
    }
  },
  cart: [],
  actionAddtoCart: (newValue) => {
    console.log(newValue);
    set((state) => ({ cart: [...state.cart, newValue] }));
  },
    actionDeleteFromCart: (id) => {
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      }));
    },
});
const persisStore = {
  name: "product-store",
  partialize: (state) => ({
    cart: state.cart,
    data: state.data,
  }),
};
const useProductStore = create(persist(productStore, persisStore));

export default useProductStore;
