import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  price: number;
  productId: number;
}

export const CardHome: React.FC<CardProps> = (props) => {
  const { image, title, price, productId } = props;

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}€</p>
      <Link to={`/products/${productId}`}>Ver detalles</Link>
    </div>
  );
};
