import { useEffect, useState } from "react";
import axios from "axios";
const useProduct = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    const loadProduct = async () => {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
      setLoading(false);
    };
    loadProduct();
  }, []);
  return [products, loading];
};

export default useProduct;
