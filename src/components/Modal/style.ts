import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const fadeInModal = keyframes`
0%{
  opacity: 0;
  transform: translateY(-1rem);
}
100%{
  opacity: 1;
  transform: translateY(-0rem);
}
`;

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: ${fadeIn} 500ms forwards;

  .modal {
    background-color: white;
    padding: 4rem 6rem;
    position: relative;
    animation: ${fadeInModal} 500ms forwards;
    animation-delay: 500ms;
    opacity: 0;
  }

  .modal__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.5rem;
  }
  .form__input-container {
    display: flex;
    gap: 0.4rem;
    flex-direction: column;
    align-items: flex-start;
  }
  .form__label {
    font-weight: 700;
  }
  .form__input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid gray;
  }
  .form__button {
    padding: 1rem;
    background-color: maroon;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    color: white;
  }
  .modal__close {
    position: absolute;
    top: 0;
    right: 0;
    background-color: maroon;
    padding: 0.7rem 1rem;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;
