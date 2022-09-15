import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: 75% 20%;
  gap: 5%;
`;

const ShoppingCartList = styled.div``;

const ShoppingCartCheck = styled.div``;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 75%;
  gap: 5%;
  margin-bottom: 10px;
`;

const ItemTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: normal;
  }
`;

const ItemQuantity = styled.div`
  p {

  }
`;

const ItemImage = styled.div`
  img {
    width: 100%;
  }
`;

const ItemDetail = styled.div``;

const InvoiceContainer = styled.div`
  h2 {
    font-weight: normal;
    margin-bottom: 10px;
  }

  & > p {
    font-size: 0.8rem;
  }
`;

const ShippingCost = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;

  p:last-child {
    font-weight: bolder;
  }
`;

export {
    Subtotal,
    ShippingCost,
    InvoiceContainer,
    ItemDetail,
    ItemImage,
    ItemQuantity,
    ShoppingCartContainer,
    ShoppingCartCheck,
    ShoppingCartList,
    ItemContainer,
    ItemTitle
};