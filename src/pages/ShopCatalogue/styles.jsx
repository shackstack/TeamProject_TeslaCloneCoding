import styled from "styled-components";

const ShopCatalogueContainer = styled.div`
  padding: 100px 50px 50px 50px;
`;

const ShopCatalogueHeaderContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
  }
`;

const ProductContainer = styled.div`
  transition: all .3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

const ShopCatalogueBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, auto));
  gap: 2%;
  margin-bottom: 100px;
`;

const ProductImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const ProductTitleContainer = styled.div`
  p {
    font-weight: bold;
  }
`;

export {
    ProductTitleContainer,
    ProductImageContainer,
    ProductContainer,
    ShopCatalogueContainer,
    ShopCatalogueHeaderContainer,
    ShopCatalogueBodyContainer
}