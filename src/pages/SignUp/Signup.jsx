import { Container1, Container3 } from "../Login/Login";
import { StForm, StButton, StButton2 } from "../Login/Login";
import { StSpan1, StSpan2 } from "../Login/Login";
import { StDiv } from "../Login/Login";
import { StInput } from "../Login/Login";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import useSignup from "../../utils/useSignup";
import styled from "styled-components";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
    test1(nickname);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const regNickname = /^[a-z0-9]{4,12}$/;
  const regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,16}$/;

  const [nicknameState, setNicknameState] = useState(1);
  const [passwordState, setPasswordState] = useState(1);

  const test1 = (nickname) => {
    return regNickname.test(nickname)
      ? setNicknameState(0)
      : setNicknameState(1);
  };

  const test2 = (password) => {
    return regPassword.test(password)
      ? setPasswordState(0)
      : setPasswordState(1);
  };

  const OnSubmitHandler = () => {
    useSignup(navigate, { nickname, name, password, email });
  };
  return (
    <>
      <Header />
      <Container1>
        <Container3>
          <h1>Create Account</h1>
          <StForm>
            <StDiv>
              <StSpan1>Name</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeName(e);
              }}></StInput>
            <StDiv>
              <StSpan1>ID</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeNickname(e);
              }}></StInput>
            {nicknameState ? (
              <Sta1>사용불가능한 ID입니다</Sta1>
            ) : (
              <Sta2>사용가능한 ID입니다</Sta2>
            )}
            <StDiv>
              <StSpan1>E-mail Address</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeEmail(e);
              }}></StInput>
            <StDiv>
              <StSpan1>Password</StSpan1>
            </StDiv>
            <StInput
              type="password"
              onChange={(e) => {
                onChangePassword(e);
                test2(password);
              }}></StInput>
            {passwordState ? (
              <Sta3>패스워드 형식에 어긋납니다</Sta3>
            ) : (
              <Sta4>사용가능한 패스워드입니다</Sta4>
            )}
          </StForm>
          <StButton
            onClick={() => {
              OnSubmitHandler();
            }}>
            CREATE ACCOUNT
          </StButton>
          <StSpan2>OR</StSpan2>
          <Link to="/login">
            <StButton2>Sign in</StButton2>
          </Link>
        </Container3>
      </Container1>
    </>
  );
};

export default SignUp;

const Sta1 = styled.a`
  color: #f73737;
  font-size: 12px;
  width: 500px;
  float: right;
  margin-left: 285px;
`;

const Sta2 = styled.a`
  color: #4861ef;
  font-size: 12px;
  width: 500px;
  float: right;
  margin-left: 295px;
`;

const Sta3 = styled.a`
  color: #f73737;
  font-size: 12px;
  width: 500px;
  float: right;
  margin-left: 270px;
`;

const Sta4 = styled.a`
  color: #4861ef;
  font-size: 12px;
  width: 500px;
  float: right;
  margin-left: 270px;
`;
