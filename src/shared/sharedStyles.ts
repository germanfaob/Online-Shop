import { styled } from "styled-components";

// DETAIL PAGE STYLES

export const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1rem;
  gap: 1rem;

  & > div:nth-child(1) {
    display: flex;

    & a {
      padding: .9rem;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.bgNav};
      color: ${(props) => props.theme.colors.bg};

      &:hover{
        transition: 0.3s;
        background-color: ${(props) => props.theme.colors.textColor};
        color: ${(props) => props.theme.colors.bgNav};
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    width: 96%;
    flex-direction: column;

    & > img {
      width: 40%;
      border-radius: 5px;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    & > div:nth-child(2) > img {
      width: 70%;
    }
  }

  @media (max-width: 480px) {
    & > div:nth-child(2) > img {
      width: 100%;
    }
  }

`

// CARDS STYLES

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.33% - 20px);
  height: 350px;
  margin-bottom: 20px;
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

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// PAGE STYLES

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

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
    width: 96%;
    gap: 1rem;
  }
`;