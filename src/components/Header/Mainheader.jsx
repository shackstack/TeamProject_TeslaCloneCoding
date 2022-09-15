import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <StHeader>
      <StContainer>
        <Modeldiv2>
          <Link to="/">
            <StLogo src="/assets/Logo.png" />
          </Link>
        </Modeldiv2>
        <Modeldiv>
          <Modelbutton>Model S</Modelbutton>
          <Modelbutton>Model 3</Modelbutton>
          <Modelbutton>Model X</Modelbutton>
          <Modelbutton>Model Y</Modelbutton>
          <Modelbutton>Solar Roof</Modelbutton>
          <Modelbutton>Solar Panels</Modelbutton>
        </Modeldiv>
        <Modeldiv3>
          <Link to="/shop">
            <Modelbutton>Shop</Modelbutton>
          </Link>
          <Link to="/login">
            <Modelbutton>계정</Modelbutton>
          </Link>
          <Modelbutton>메뉴</Modelbutton>
        </Modeldiv3>
      </StContainer>
    </StHeader>
  );
};

export default MainHeader;

export const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 40px;
`;
export const StHeader = styled.header`
  position: fixed;
  height: 30px;
  width: 100vw;
`;

const Modeldiv = styled.div`
  width: 700px;
`;

const Modeldiv2 = styled.div`
  width: 320px;
`;

const Modeldiv3 = styled.div`
  width: 350px;
`;

const StLogo = styled.img`
  width: 130px;
  padding-right: 20px;
  margin-top: 10px;
  background-color: transparent;
`;

const Modelbutton = styled.button`
  margin-right: 30px;
  border-color: transparent;
  background-color: transparent;
  padding: 5px;
  letter-spacing: 1.5px;
  float: right;
  :hover {
    background-color: #7a7a7a40;
    opacity: 100%;
    transition: 0.7s;
  }
`;
