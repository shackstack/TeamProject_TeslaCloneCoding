import styled from "styled-components";

const ShopCartContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopCartHeaderContainer = styled.div`
  width: 800px;
  margin-bottom: 30px;

  h1 {
    font-size: 1.5rem;
  }
`;

const ShopCartBodyEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 500px;

  p {
    margin-bottom: 10px;
  }

  div:last-child {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ShopCartBodyContainer = styled.div``;

const ShopCartBodyEmptyButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
    text-align: center;
    padding: 8px;

    &:first-child {
      background-color: dodgerblue;
      color: white;
      border-radius: 5px;
      transition: all .3s;

      &:hover {
        background-color: darkblue;
      }
    }

    &:last-child {
      background-color: white;
      color: black;
      border: 2px solid black;
      border-radius: 5px;
      transition: all .3s;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;

export {
    ShopCartContainer,
    ShopCartBodyContainer,
    ShopCartHeaderContainer,
    ShopCartBodyEmptyContainer,
    ShopCartBodyEmptyButtons
};