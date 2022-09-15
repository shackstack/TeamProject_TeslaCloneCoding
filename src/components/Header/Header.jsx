import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <StContainer>
        <Modeldiv>
          <Link to="/">
            <StLogo src="/assets/Logo.png" />
          </Link>
        </Modeldiv>
        <Modeldiv>
          <StButton className="ko-KR">
            <EarthImg className="logo" src="img/earth.png" />{" "}
            <Stdiv>ko-KR</Stdiv>
          </StButton>
        </Modeldiv>
      </StContainer>
    </StHeader>
  );
};

export default Header;

export const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
`;
export const StHeader = styled.header`
  position: fixed;
  height: 30px;
  width: 100%;
`;

const Modeldiv = styled.div`
  display: flex;
`;

const StLogo = styled.img`
  width: 100px;
  padding-right: 20px;
  background-color: transparent;
`;

const Modelbutton = styled.button`
  margin-right: 40px;
  border: 0;
  background-color: transparent;
`;

const Stdiv = styled.div`
  display: flex;
  height: 20px;
  padding: 8px;
  letter-spacing: 1px;
`;

const StButton = styled.button`
  border: 0;
  border-radius: 200%;
  display: flex;
  margin-top: 3px;
  background-color: transparent;
  float: right;

  &:hover {
    cursor: pointer;
    background-color: #ececec4d;
    color: #000000;
  }
`;

const EarthImg = styled.img`
  margin-top: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  background-color: transparent;
`;
