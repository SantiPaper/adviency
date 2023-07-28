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
      font-size: 4rem;
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
  }
`;
