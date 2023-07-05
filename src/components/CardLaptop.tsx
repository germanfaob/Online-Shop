import { Link } from "react-router-dom";
import { CardContainer } from "../shared/sharedStyles";

interface CardProps {
  image: string;
  title: string;
  price: number;
  productId: number;
}

export const CardLaptop: React.FC<CardProps> = (props) => {
  const { image, title, price, productId } = props;

  return (
    <CardContainer>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}€</p>
      <Link to={`/products/${productId}`}>Ver detalles</Link>
    </CardContainer>
  );
};
