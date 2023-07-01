import { styled } from "styled-components";
import { CardHome } from "../components/CardHome";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../Types/ProductType";

export const Home = () => {
  const { data } = useFetch("https://dummyjson.com/products");
  const { products }: { products?: Product[] } = data || {};

  return (
    <ContainerHome>
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
    </ContainerHome>
  );
};

const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > div:nth-child(1) {
    display: flex;
    width: 100%;
    padding: 1rem;
    justify-content: center;
    color: ${(props) => props.theme.colors.bgNav};
  }

  & > div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    justify-content: center;
    gap: 1rem;
  }
`;
