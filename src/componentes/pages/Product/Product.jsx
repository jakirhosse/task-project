import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../../redux/features/apiSlice";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Product = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold">{product.title}</h2>
          <div className="flex gap-4">
            <p className="text-lg font-bold">€{product.price}</p>
            <h2 className="text-xl font-bold">{product.off}</h2>
            <p className="text-lg font-bold">€{product.discountPrice}</p>
          </div>
          <p className="text-gray-500">{product.description}</p>

          <Link
            to="/checkOut"
            className="mt-2 ml-20 bg-black py-2 px-3 text-white rounded"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
