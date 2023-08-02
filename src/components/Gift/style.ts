import styled from "styled-components";

export const StyledGift = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;
  font-weight: 100;
  color: #030f01;
  padding: 1rem 4rem;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  .gift__container {
    display: flex;
    align-items: center;
    margin-right: auto;
    gap: 1.5rem;
  }

  .gift__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .gift__button-delete,
  .gift__button-duplicate,
  .gift__button-edit {
    background-color: maroon;
    padding: 0.6rem 1rem;
    border: none;
    color: white;
    transition: 0.2s all;
    opacity: 0.8;
    cursor: pointer;
  }
  .gift__button-edit {
    background-color: #48a53c;
  }

  .gift__button-duplicate {
    background-color: #d9d9d9;
    color: black;
  }
`;
