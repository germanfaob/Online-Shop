import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../Types/ProductType";
import { DetailContainer } from "../shared/sharedStyles";

export const HomeDetail = () => {
  const { productId } = useParams();
  const { data } = useFetch(`https://dummyjson.com/products/${productId}`);
  const product: Product | undefined = data as Product | undefined;

  return (
    <DetailContainer>
      <div>
        <Link to="/">Regresar</Link>
      </div>
      {product && (
        <div>
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      )}
    </DetailContainer>
  );
};
