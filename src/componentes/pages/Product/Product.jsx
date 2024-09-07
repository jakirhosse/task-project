import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../../redux/features/apiSlice";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Product = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Change this to whatever number of products you want per page

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-[100px] py-[50px]">
        {currentProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <div className="flex gap-4">
              <p className="text-lg font-bold">€{product.price}</p>
              <p className="text-lg font-bold text-gray-500 line-through">
                €{product.discountPrice}
              </p>
              <h2 className="text-xl font-bold text-red-500">
                {product.off} OFF
              </h2>
            </div>
            <p className="text-gray-500 pb-6">{product.description}</p>
            <Link
              className="mt-2 ml-20 bg-black py-2 px-3 text-white rounded"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-center space-x-2 mt-4">
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default Product;
