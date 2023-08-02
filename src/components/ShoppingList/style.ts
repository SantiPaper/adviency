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

export const StyledShoppingList = styled.div`
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
  z-index: 1;

  .modal {
    text-align: center;
    background-color: white;
    padding: 4rem 6rem;
    position: relative;
    animation: ${fadeInModal} 500ms forwards;
    animation-delay: 500ms;
    opacity: 0;
    width: 40rem;
  }
  .buy-text {
    font-size: 4rem;
    margin: 0 auto 2rem;
    font-weight: 700;
    border-bottom: 1px solid maroon;
    width: fit-content;
  }

  .shopping-item {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
  }

  .shopping-item p {
    font-size: 1.5rem;
  }

  .item__name {
    max-width: 13ch;
    width: 10rem;
    font-size: 1.5rem;
  }
  .container__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-delete,
  .button-print {
    background-color: maroon;
    border: none;
    padding: 1rem 2rem;
    margin-top: 2rem;
    border-radius: 0.8rem;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
  .button-print {
    background-color: #48a53c;
  }

  @media print {
    button {
      display: none;
    }
  }
`;
