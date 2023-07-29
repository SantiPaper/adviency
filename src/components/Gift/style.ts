import styled from "styled-components";

export const StyledGift = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  gap: 2rem;
  font-size: 2rem;
  color: #030f01;
  padding: 1rem 4rem;

  .gift__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .gift__delete {
    background-color: maroon;
    padding: 0.6rem 1rem;
    border: none;
  }
`;
