import { create } from "zustand";
import useTamStore from "./store/tamStore";
import { useState } from "react";
const App2 = () => {
  // Step 2 use Store
  const num = useTamStore((state) => state.num);
  const firstName = useTamStore((state) => state.firstName);
  const actionIncrease = useTamStore((state) => state.actionIncrease);
  const resetNum = useTamStore((state) => state.resetNum);
  const setName = useTamStore((state) => state.setName);

  const [text, setText] = useState("");
  return (
    <div>
      <h1>Easy Zustand</h1>
      <button onClick={() => actionIncrease()}>+</button>
      {num}
      <button>-</button>

      <button onClick={() => resetNum()}>reset</button>

      <p>{firstName}</p>
      <input onChange={(e)=>setText(e.target.value)}/>
      <button onClick={() => setName(text)}>Set New name</button>
    </div>
  );
};
export default App2;
