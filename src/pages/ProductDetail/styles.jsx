import styled from "styled-components";

const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 67% 30%;
  gap: 3%;
  padding: 80px 30px 30px 30px;
`;

const ProductDetailImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

const ProductDetailBodyContainer = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  h3 {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 15px;
  }

  button {
    margin-bottom: 30px;
    padding: 8px;
    width: 80%;
    border: none;
    border-radius: 5px;
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

const Quantity = styled.div`
  margin-bottom: 30px;

  & > p {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

const QuantityInput = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;

    &.add, &.subtract {
      cursor: pointer;
    }

    &.subtract {
      padding-right: 15px;
    }

    &.add {
      padding-left: 15px;
    }
  }
`;

const DetailContainer = styled.div``;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const DetailTitle = styled.div`
  margin-bottom: 3px;
  font-weight: bolder;
`;

const DetailContent = styled.div`
  font-size: 0.8rem;
`;

export {
    DetailItem,
    DetailContent,
    DetailTitle,
    DetailContainer,
    Quantity,
    ProductDetailBodyContainer,
    ProductDetailContainer,
    ProductDetailImageContainer,
    QuantityInput
}