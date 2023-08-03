import styled from "styled-components";
import background from "./assets/background.jpg";

const breakpoints = {
  mobile: "600px",
};

export const devices = {
  mobile: `(min-width: ${breakpoints.mobile})`,
};

export const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  .main {
    &__card {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 4rem 6rem;
      border-radius: 1rem;
      border: 2px solid #0d3009;
    }
    &__title {
      font-size: 7rem;
      margin-bottom: 2rem;
      font-family: "Mountains of Christmas", cursive;
    }
    &__gift {
      font-size: 2rem;
      list-style: none;
    }
    &__gift:not(:last-child) {
      margin-bottom: 1rem;
    }
    &__add-button {
      padding: 1rem;
      background-color: #48a53c;
      color: #0d3009;
      border: none;
      border-radius: 0.8rem;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      border-bottom: 1rem;
    }
    &__delete,
    &__preview-button {
      margin-top: 3rem;
      padding: 1rem 3rem;
      background-color: maroon;
      color: white;
      border: none;
      border-radius: 0.8rem;
      font-size: 2rem;
      cursor: pointer;
      transition: 0.3s;
    }
    &__text-no-gifts {
      font-size: 1.5rem;
      color: black;
      margin-top: 2rem;
    }
    &__container-gifts {
      margin-top: 0.5rem;
    }
    .container__audio {
      position: relative;
    }
    &__container-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__preview-button {
      margin-top: 1rem;
      background-color: #e9e9e9;
      color: black;
      &:hover {
        background-color: #d9d9d9;
      }
    }
    &__text-price-total {
      font-size: 2rem;
      border-bottom: 1px solid black;
      width: fit-content;
      margin: auto;
    }
  }

  @media (max-width: 600px) {
    .main {
      &__card {
        padding: 4rem 4rem;
      }
      &__title {
        font-size: 5rem;
      }
      &__container-gifts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
      }
      &__add-button {
        margin-bottom: 1rem;
      }
    }
  }
`;
