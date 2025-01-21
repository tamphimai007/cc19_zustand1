## Step 1 ทบทวน obj

```js
// ทบทวน Obj
const obj = {
  firstName: "phongphat",
  lastName: "Japhichom",
};
obj.address = "BKK";
console.log(obj);
```

add code

```js
const obj2 = {
  street: "123",
  zipcode: "10220",
};
const mergeObj = { ...obj, ...obj2 };
console.log(mergeObj);
```

## Step 2 ทบทวน Array

```js
// ทบทวน Arr
const arr = ["phongphat", "japhichom"];
arr[2] = "BKK";
console.log(arr);
```

```js
const arr2 = ["BKK", "1234"];
const mergeArr = [...arr, ...arr2];
console.log(mergeArr);
```

## Step 3 ทบทวน Array & Obj

```js
const product = [
  { id: 1, title: "ASUS", price: 30000 },
  { id: 2, title: "Lenovo", price: 20000 },
];

console.log(product[0].title);
```

add code

```js
const newProduct = { id: 2, title: "MSI", price: 50000 };
const mergeProduct = [...product, newProduct];
console.log(mergeProduct);
```

## Step 4 ทบทวน useState number

```jsx
import { useState } from "react";

const Product = () => {
  //   let num = 4;
  const [number, setNumber] = useState(5);

  //   console.log(num);
  console.log(number);

  const handleIncrease = () => {
    setNumber((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div>
      Product
      <h1>{number}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
export default Product;
```

## Step 4 ทบทวน useState {}

```jsx
import { useState } from "react";

const Product = () => {
  //   let num = 4;
  const [number, setNumber] = useState({
    num: 5,
  });

  //   console.log(num);
  console.log(number);

  const handleIncrease = () => {
    setNumber((state) => ({ num: state.num + 1 }));
    // setNumber((state) => ({ ...state, num: state.num + 1 }));
  };
  const handleDecrease = () => {
    setNumber((state) => ({ num: state.num - 1 }));
  };

  return (
    <div>
      Product
      <h1>{number.num}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
export default Product;
```

add code

```jsx
const handleMulti = () => {
  setNumber((state) => ({ num: state.num * 2 }));
};

const handleDivide = () => {
  setNumber((state) => ({ num: state.num / 2 }));
};
```

```jsx
 <button onClick={handleMulti}>Multi</button>
      <button onClick={handleDivide}>Divide</button>

```

## Basic Zustand

```jsx
import { create } from "zustand";

const Product = () => {
  // Step 1 Create Store
  const productStore = () => ({
    firstName: "phongphat",
    lastName: "japhichom",
  });
  const useProductStore = create(productStore);

  // Step 2 UseStore
  //   const kaika = useProductStore()
  const firstName = useProductStore((state) => state.firstName);

  console.log(firstName);

  return <div>Product</div>;
};
export default Product;
```

## Separate store

create folder store
/store/productStore.jsx

```jsx
import { create } from "zustand";

// Step 1 Create Store
const productStore = () => ({
  firstName: "phongphat",
  lastName: "japhichom",
  address: { street: "123", zipcode: "456" },
  profile: ["phongphat", "japhichom"],
  products: [
    { id: 1, title: "Asus", price: 30000 },
    { id: 2, title: "Lenovo", price: 20000 },
  ],
});
const useProductStore = create(productStore);

export default useProductStore;
```

update code
/Product.jsx

```jsx
import { create } from "zustand";
import useProductStore from "../store/productStore";

const Product = () => {
  // Step 2 UseStore
  //   const kaika = useProductStore()
  const firstName = useProductStore((state) => state.firstName);
  const lastName = useProductStore((state) => state.lastName);
  const address = useProductStore((state) => state.address);
  const lname = useProductStore((state) => state.profile);
  const products = useProductStore((state) => state.products);
  console.log(firstName);
  console.log(lastName);
  console.log(address.zipcode);
  console.log(lname[1]);
  console.log(products[1].title);

  return <div>Product</div>;
};
export default Product;
```

## Number Counter

/store/productStore.jsx

```jsx
import axios from "axios";
import { create } from "zustand";

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
  // This Code Here
  number: 0,
  actionIncrease: () => {
    set((state) => ({ number: state.number + 1 }));
  },
  actionDecrease: () => {
    set((state) => ({ number: state.number - 1 }));
  },
});
const useProductStore = create(productStore);

export default useProductStore;
```

update component
Product.jsx

```jsx
import { create } from "zustand";
import useProductStore from "../store/productStore";

const Product = () => {
  // Step 2 UseStore
  //   const kaika = useProductStore()
  const firstName = useProductStore((state) => state.firstName);
  const lastName = useProductStore((state) => state.lastName);
  const address = useProductStore((state) => state.address);
  const lname = useProductStore((state) => state.profile);
  const products = useProductStore((state) => state.products);
  // This Code Here
  const number = useProductStore((state) => state.number);
  const actionIncrease = useProductStore((state) => state.actionIncrease);
  const actionDecrease = useProductStore((state) => state.actionDecrease);
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(address.zipcode);
  //   console.log(lname[1]);
  //   console.log(products[1].title);

  const hdlIncrease = () => {
    actionIncrease();
  };

  return (
    <div>
      Product
      {number}
      <hr />
      <button onClick={hdlIncrease}>Increase</button>
      <button onClick={actionDecrease}>Decrease</button>
      <hr />
    </div>
  );
};
export default Product;
```

## Fetch Data

```jsx
import axios from "axios";
import { create } from "zustand";

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

  // This Code Hereeeeeeeeeeeeeee
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
});
const useProductStore = create(productStore);

export default useProductStore;
```

update component
Product.jsx

```jsx
import { create } from "zustand";
import useProductStore from "../store/productStore";

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

  // This Code Hereeeeeeeeeeeeeee
  const actionGetData = useProductStore((state) => state.actionGetData);
  const data = useProductStore((state) => state.data);
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(address.zipcode);
  //   console.log(lname[1]);
  //   console.log(products[1].title);
  console.log(data);
  const hdlIncrease = () => {
    actionIncrease();
  };

  return (
    <div>
      Product
      {number}
      <hr />
      <button onClick={hdlIncrease}>Increase</button>
      <button onClick={actionDecrease}>Decrease</button>
      <hr />
      <button onClick={actionGetData}>Get Data</button>
      <hr />
      {data?.map((item) => {
        console.log(item);
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
};
export default Product;
```

## useEffect

```jsx
useEffect(() => {
  // code body
  actionGetData();
}, []);
```

## Card

update component
Product.jsx

```jsx
<div className="flex flex-wrap gap-2">
  {data?.map((item) => {
    //   console.log(item);
    return <ProductCard key={item.id} product={item} />;
  })}
</div>
```

create component ProductCard.jsx
/components/ProductCard.jsx

```jsx
import useProductStore from "../store/productStore";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="rounded-md m-2 p-2 bg-slate-100 shadow-md">
        <img
          src={product.images[0]}
          className="object-cover rounded-md
      w-[200px] h-[100px] 
      hover:scale-105 duration-300 m-2"
        />
        <p className="text-sm font-semibold">{product.title.slice(0, 10)}</p>
        <p className="text-sm mt-1 ">{product.description.slice(0, 30)}...</p>
        <div className="flex justify-between">
          <p className="mt-1 font-semibold text-sm">THB {product.price}</p>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
```

## Cart

update store

```jsx
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
```

update ProductCard.jsx

```jsx
import useProductStore from "../store/productStore";

const ProductCard = ({ product }) => {
  const actionAddtoCart = useProductStore((state) => state.actionAddtoCart);
  const actionDeleteFromCart = useProductStore(
    (state) => state.actionDeleteFromCart
  );

  return (
    <>
      <div className="rounded-md m-2 p-2 bg-slate-100 shadow-md">
        <img
          src={product.images[0]}
          className="object-cover rounded-md
      w-[200px] h-[100px] 
      hover:scale-105 duration-300 m-2"
        />
        <p className="text-sm font-semibold">{product.title.slice(0, 10)}</p>
        <p className="text-sm mt-1 ">{product.description.slice(0, 30)}...</p>
        <div className="flex justify-between">
          <p className="mt-1 font-semibold text-sm">THB {product.price}</p>

          <button onClick={() => actionDeleteFromCart(product.id)}>
            Delete
          </button>
          <button onClick={() => actionAddtoCart(product)}>Add</button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
```



## Persist
```jsx
const persisStore = {
  name: "product-store",
  partialize: (state) => ({
    cart: state.cart,
    data: state.data,
  }),
};
const useProductStore = create(persist(productStore, persisStore));
```