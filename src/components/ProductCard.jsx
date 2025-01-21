import useProductStore from "../store/productStore";

const ProductCard = ({ product }) => {
  const actionAddtoCart = useProductStore((state) => state.actionAddtoCart);
  const actionDeleteFromCart = useProductStore((state) => state.actionDeleteFromCart);

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

          <button onClick={() => actionDeleteFromCart(product.id)}>Delete</button>
          <button onClick={()=>actionAddtoCart(product)}>Add</button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
