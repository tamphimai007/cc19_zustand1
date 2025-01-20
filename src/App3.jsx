import { useEffect } from "react";
import useTamStore from "./store/tamStore";
import { RefreshCcw } from "lucide-react";
const App3 = () => {
  const actionGetProduct = useTamStore((state) => state.actionGetProduct);
  const isLoading = useTamStore((state) => state.isLoading);
  const data = useTamStore((state) => state.data);
  const error = useTamStore((state) => state.error);

  useEffect(() => {
    // code body
    actionGetProduct();
  }, []);

  return (
    <div>
      {isLoading && <RefreshCcw className="animate-spin" />}
      {error && <h1>{error}</h1>}
      {data?.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
};
export default App3;
