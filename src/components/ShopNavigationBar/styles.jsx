import styled from "styled-components";

const ShopNavigationBarContainer = styled.div`
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
  padding: 20px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  transition: all .3s;

  &:hover {
    background-color: white;
  }

  &:hover * {
    color: black;
    border-color: black !important;
  }

  &:hover a {
    color: black !important;
  }

  ${(props) => props.$isNavigationBarAlwaysOpen ? `
    & * {
      color: black !important;
      border-color: black !important;
    }
    & img {
      filter: brightness(0) !important;
    }
  ` : null}
  &:hover img {
    filter: brightness(0);
  }
`;

const ShopNavigationBarLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    filter: brightness(0) invert(1);
    padding-right: 20px;
    border-right: 1px solid white;
  }

  a:last-child {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    transition: all .3s;
    border-radius: 5px;
    margin-left: 10px;

    &:hover {
      background-color: lightgray;
    }
  }
`;

const ShopNavigationBarCenter = styled.div`
  a {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    transition: all .3s;
    border-radius: 5px;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover {
      background-color: lightgray;
    }
  }
`;

const ShopNavigationBarRight = styled.div`
  display: flex;
  color: white;
  align-items: center;
  position: relative;

  & a {
    color: inherit;
  }

  svg {
    cursor: pointer;
    margin-right: 15px;
  }

  & > p {
    cursor: pointer;
    margin: 0;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all .3s;

    &:hover {
      background-color: lightgray;
    }
  }

`;

const Badge = styled.div`
  position: absolute;
  background-color: dodgerblue;
  border-radius: 10px;
  top: -3px;
  left: 42px;

  p {
    padding: 0 3px;
    font-size: 0.5rem;
    color: white !important;
  }
`;

export {Badge, ShopNavigationBarContainer, ShopNavigationBarLeft, ShopNavigationBarCenter, ShopNavigationBarRight}