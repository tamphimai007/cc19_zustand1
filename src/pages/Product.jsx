import { create } from "zustand";
import useProductStore from "../store/productStore";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Product = () => {
  // Step 2 UseStore
  //   const kaika = useProductStore()
  const firstName = useProductStore((state) => state.firstName);
  const lastName = useProductStore((state) => state.lastName);
  const address = useProductStore((state) => state.address);
  const lname = useProductStore((state) => state.profile);
  const products = useProductStore((state) => state.products);
  const number = useProductStore((state) => state.number);
  const actionIncrease = useProductStore((state) => state.actionIncrease);
  const actionDecrease = useProductStore((state) => state.actionDecrease);
  const actionGetData = useProductStore((state) => state.actionGetData);
  const data = useProductStore((state) => state.data);
  const cart = useProductStore((state) => state.cart);
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(address.zipcode);
  //   console.log(lname[1]);
  //   console.log(products[1].title);
  //   console.log(data);
  const hdlIncrease = () => {
    actionIncrease();
  };
  console.log(cart);
  useEffect(() => {
    // code body
    actionGetData();
  }, []);

  return (
    <div className="p-4">
      Product {data.length}
      <br />
      {number}
      <hr />
      <button onClick={hdlIncrease}>Increase</button>
      <button onClick={actionDecrease}>Decrease</button>
      <hr />
      <button onClick={actionGetData}>Get Data</button>
      <hr />
      <div className="flex flex-wrap gap-2">
        {data?.map((item) => {
          //   console.log(item);
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
      <hr />
      <hr />
      <hr />
      <h1>Cart</h1>
      <div className="flex flex-wrap">
        {cart?.map((item) => {
          //   console.log(item);
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};
export default Product;
