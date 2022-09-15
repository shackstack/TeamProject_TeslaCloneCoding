import styled from "styled-components";

const Model3 = () => {
  return <Tesla1></Tesla1>;
};

export default Model3;

const Tesla1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("img/Model3.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
