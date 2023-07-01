import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface CardProps {
  image: string;
  title: string;
  price: number;
  productId: number;
}

export const CardHome: React.FC<CardProps> = (props) => {
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 280px;
  min-width: 280px;
  height: 350px;
  border: 1px solid ${(props) => props.theme.colors.bgNav};
  border-radius: 10px;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.textColor};
    transition: 0.1s;
    transform: scale(1.03);
  }

  & img {
    object-fit: cover;
    background-position: center;
    width: 100%;
    height: 180px;
    border-radius: 10px 10px 0 0;
  }

  & a {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.bgNav};
    color: ${(props) => props.theme.colors.bg};

    &:hover {
      transition: 0.3s;
      background-color: ${(props) => props.theme.colors.textColor};
      color: ${(props) => props.theme.colors.bgNav};
    }
  }
`;
