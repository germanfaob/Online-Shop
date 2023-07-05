import { Nav } from "../components/Nav";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
`;
