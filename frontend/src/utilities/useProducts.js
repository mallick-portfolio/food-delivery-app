import { useEffect, useState } from "react";

import { useGetProductsQuery } from "../redux/api/productApi.js";
const useProduct = () => {
  const { data, isLoading: loading, isError } = useGetProductsQuery();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  return [products, loading, isError];
};

export default useProduct;
