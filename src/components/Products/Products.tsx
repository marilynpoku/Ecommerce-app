import { useState, useEffect, useCallback } from "react";
import Spinner from "../UI/Spinner/Spinner";
import Product from "../../models/Product";
import ProductItem from "./ProductItem/ProductItem";
import { DEFAULT_QUANTITY } from "../../config/config";
import { DEFAULT_WISHLIST_STATUS } from "../../config/config";
import classes from "./Products.module.scss";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getProductData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const productData = await response.json();

      setProducts(productData);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      image={product.image}
      price={product.price}
      quantity={DEFAULT_QUANTITY}
      isOnWishlist={DEFAULT_WISHLIST_STATUS}
    />
  ));

  return (
    <section className={classes["products-section"]}>
      {isLoading && <Spinner />}
      {error && <p className={classes.error}>{error}</p>}
      <ul className={classes["product__items"]}>{productsList}</ul>
    </section>
  );
};

export default Products;
