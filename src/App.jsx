import { useState } from "react";
import App2 from "./App2";
import App3 from "./App3";

const App = () => {
  const [count, setCount] = useState(0);
  const hdlIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  // ----------------------------------------------
  const [value, setValue] = useState({
    num: 5,
  });
  const handleIncreaseValue = () => {
    setValue((state) => ({ num: state.num + 1 }));
  };
  const handleDecreaseValue = () => {
    setValue((state) => ({ num: state.num - 1 }));
    // set((state) => ({ num: state + 1 }));
  };
  // console.log(value);
  //-------------------- obj
  const obj = {
    firstName: "phongphat",
    lastName: "japhichom",
    sayHi: () => {
      console.log("Hello, cc19");
    },
  };
  // console.log(obj);
  // obj.sayHi();

  return (
    <div>
      {/* <h1>Easy React</h1>
      <button onClick={hdlIncrease}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrease}>-</button>
      <hr />
      <button onClick={handleIncreaseValue}>+</button>
      <p>{value.num}</p>
      <button onClick={handleDecreaseValue}>-</button>
      <hr />

      <App2 /> */}
      <App3 />
    </div>
  );
};
export default App;
