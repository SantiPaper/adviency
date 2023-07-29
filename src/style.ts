import styled from "styled-components";

export const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1633794517178-1af2bad269bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80");
  .main {
    &__card {
      text-align: center;
      background-color: white;
      padding: 4rem 12rem;
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
      font-size: 2rem;
      cursor: pointer;
      margin-bottom: 4rem;
    }
    &__delete {
      margin-top: 3rem;
      padding: 1rem 3rem;
      background-color: maroon;
      color: black;
      border: none;
      border-radius: 0.8rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;
