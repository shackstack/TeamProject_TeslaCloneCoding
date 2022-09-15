import styled from "styled-components";

const ShopMainContainer = styled.div``;

const ShopMainCarouselContainer = styled.div`
  img {
    height: 100vh;
    display: block;
  }
`;

const SwiperOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    text-align: center;
    font-weight: normal;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    color: white;
    text-align: center;
    font-size: 1.5rem;
    margin: 0 0 50px 0;
  }

  button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    cursor: pointer;
  }
`;

const ShopMainShowcaseContainer = styled.div``;

const ShowcaseItemContainer = styled.div`
  position: relative;

  img {
    width: 100vw;
    max-width: 100%;
    display: block;
  }
`;

const ShowcaseItemOverlay = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${(props) => props.$isTitleDark ? "black;" : "white;"};
    font-weight: normal;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  button {
    border: ${(props) =>
            props.$isButtonBordered ? "3px solid black;" : "none;"};
    border-radius: 5px;
    padding: 10px;
    width: 250px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      ${(props) =>
              props.$isButtonBordered
                      ? `
        color: white;
        background-color: black;
      `
                      : null}
    }
  }
`;

const ShowcaseItemDivider = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ShowcaseHalfItemContainer = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 150%;
    transform: translateX(-18%);
    display: block;
  }
`;

const ShowcaseHalfItemOverlay = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${(props) => props.$isTitleDark ? "black;" : "white;"};
    font-weight: normal;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  button {
    border: 3px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 150px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: white;
      background-color: black;
    }
  }
`;

export {
    ShowcaseItemOverlay,
    ShowcaseItemContainer,
    ShopMainContainer,
    ShopMainCarouselContainer,
    SwiperOverlay,
    ShopMainShowcaseContainer,
    ShowcaseItemDivider,
    ShowcaseHalfItemContainer,
    ShowcaseHalfItemOverlay,
};
