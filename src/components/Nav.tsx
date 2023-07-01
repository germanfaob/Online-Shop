import { NavLink, Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";

export const Nav = () => {
  return (
    <NavStyle>
      <div>
        <Link to="/">
          <FaReact />
        </Link>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smartphones">Smartphones</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
      </div>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.colors.bgNav};
  & div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    & a {
      color: inherit;
    }
    & a:hover {
      color: ${(props) => props.theme.colors.bg};
      transition: 0.3s;
    }
    & svg {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.text};
    }
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    padding: 0 3rem;
    gap: 1.5rem;
    & a {
      color: ${(props) => props.theme.colors.bg};
      font-weight: 600;
    }
    & a:hover {
      color: ${(props) => props.theme.colors.textColor};
      transition: 0.3s;
    }
    & a.active {
      color: ${(props) => props.theme.colors.textColor};
    }
  }
`;
