import MainHeader from "../../components/Header/Mainheader";
import styled from "styled-components";
import Model3 from "./pages/Model3";
import ModelS from "./pages/ModelS";
import ModelY from "./pages/ModelY";
import ModelX from "./pages/ModelX";
import SolarPanels from "./pages/SolarPanels";
import ShopFooter from "../../components/ShopFooter/ShopFooter";
import Accessories from "./pages/Accessories";

const Main = () => {
  return (
    <>
      <MainHeader />
      <Stdiv2>
        <Sth1>Model 3</Sth1>
        <Stspan>
          Order Online for <Sta href="/">Touchless Delivery</Sta>
        </Stspan>
      </Stdiv2>
      <Stdiv>
        <Stbutton1>Custom order</Stbutton1>
        <Stbutton2>Existing inventory</Stbutton2>
      </Stdiv>
      <Stdiv3>
        <DownArrow src="/img/DownArrow.png" />
      </Stdiv3>
      <Model3 />
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarPanels />
      <Accessories />
      <ShopFooter />
    </>
  );
};

const Stdiv3 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 820px;
  position: fixed;
  width: 100%;
`;
const DownArrow = styled.img`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow: hidden;
  transition: fill 0.3s ease, stroke 0.3s ease;
`;

const Stdiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 720px;
  position: fixed;
  width: 100%;
`;

const Stdiv2 = styled.div`
  margin-top: 140px;
  font-size: large;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
`;

const Stbutton1 = styled.button`
  width: 264px;
  height: 40px;
  color: white;
  margin-right: 24px;
  border-color: transparent;
  border-radius: 5px;
  letter-spacing: 1px;
  background-color: rgba(23, 26, 32, 0.8);
`;

const Stbutton2 = styled.button`
  width: 264px;
  height: 40px;
  margin-right: 24px;
  letter-spacing: 1px;
  border-color: transparent;
  border-radius: 5px;
  background-color: rgba(244, 244, 244, 0.65);
`;

const Sth1 = styled.h1`
  font-family: sans-serif;
  text-align: center;
  margin-bottom: 10px;
`;

const Stspan = styled.div`
  align-content: center;
  font-weight: lighter;
  animation: onMountText 2s;
  animation-fill-mode: forwards;
`;

const Sta = styled.a`
  color: black;
`;

export default Main;
