import { CardLaptop } from "../components/CardLaptop";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../Types/ProductType";
import { Container } from "../shared/sharedStyles";

export const Laptops = () => {
  const { data } = useFetch("https://dummyjson.com/products/category/laptops");
  const { products }: { products?: Product[] } = data || {};

  return (
    <Container>
      <div>
        <h1>Laptops</h1>
      </div>
      <div>
        {products &&
          products.map((product) => (
            <CardLaptop
              key={product.id}
              image={product.images[1]}
              title={product.title}
              price={product.price}
              productId={product.id}
            />
          ))}
      </div>
    </Container>
  );
};
