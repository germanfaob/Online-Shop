import { CardHome } from "../components/CardHome";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../Types/ProductType";

export const Home = () => {
  const { data } = useFetch("https://dummyjson.com/products");
  const { products }: { products?: Product[] } = data || {};

  return (
    <section>
      <div>
        <h1>Todos los productos</h1>
      </div>
      <div>
        {products &&
          products.map((product) => (
            <CardHome
              key={product.id}
              image={product.images[0]}
              title={product.title}
              price={product.price}
              productId={product.id}
            />
          ))}
      </div>
    </section>
  );
};
