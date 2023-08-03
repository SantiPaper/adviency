import styled from "styled-components";
import background from "./assets/background.jpg";

export const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${background});

  .main {
    &__card {
      text-align: center;
      background-color: white;
      padding: 4rem 6rem;
    }
    &__title {
      font-size: 6rem;
      margin-bottom: 2rem;
      font-family: "Poppins", sans-serif;
    }
    &__gift {
      font-size: 2rem;
      list-style: none;
    }
    &__gift:not(:last-child) {
      margin-bottom: 1rem;
    }
    &__add-button {
      padding: 1rem 3rem;
      background-color: #48a53c;
      color: #0d3009;
      border: none;
      border-radius: 0.8rem;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      margin-bottom: 2rem;
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
`;
