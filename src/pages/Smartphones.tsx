import { CardPhone } from "../components/CardPhone";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../Types/ProductType";

export const Smartphones = () => {
  const { data } = useFetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  const { products }: { products?: Product[] } = data || {};

  return (
    <section>
      <div>
        <h1>Smartphones</h1>
      </div>
      <div>
        {products &&
          products.map((product) => (
            <CardPhone
              key={product.id}
              image={product.images[1]}
              title={product.title}
              price={product.price}
              productId={product.id}
            />
          ))}
      </div>
    </section>
  );
};
