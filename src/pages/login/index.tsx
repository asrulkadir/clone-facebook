import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FacebookLogo } from "../../assets/image";
import { useNavigate } from "react-router";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 242, 245);
  border-radius: 5px;
  padding: 20px;
  height: 100vh;

  img {
    width: 20vw;

    @media (max-width: 768px) {
      width: 50vw;
    }
  }
`;

const FormLogin = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 30vw;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const ForgotAccount = styled.p`
  color: rgb(24, 119, 242);
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  font-size: 14px;
  width: 8rem;
  margin: 1rem auto 0;

  &:hover {
    text-decoration: underline;
  }
`;

const TitleForm = styled.p`
  margin: 1rem 0 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  border: 1px solid rgb(221, 223, 226);
  border-radius: 5px;
  padding: 1rem;
  outline: none;
  height: 3rem;
  width: 100%;

  &:focus::placeholder {
    color: rgb(171, 173, 190);
  }

  &::placeholder {
    font-size: 16px;
    color: rgb(144, 148, 156);
  }
`;

const InputPassword = styled.div`
  display: flex;
  position: relative;

  i {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
`;

interface styledProps {
  width: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
}

const Button = styled.button<styledProps>`
  margin: auto;
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 0.5rem;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;

const Line = styled.div`
  display: flex;
  margin: 1rem 0;

  div {
    border-bottom: 1px solid rgb(221, 223, 226);
    height: 1px;
    width: 50%;
  }

  p {
    position: relative;
    margin: -0.4rem 0.5rem 0;
    color: rgb(150, 153, 158);
    font-size: 12px;
  }
`;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [inputUser, setInputUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (inputPassword) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
  }, [inputPassword]);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (inputUser === "asrulkadir" && inputPassword === "password") {
      navigate("/");
      Cookies.set("token", "asrulkadir", {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });
    } else {
      window.confirm("Username or password is incorrect");
    }
  };

  return (
    <LoginPageStyled>
      <img src={FacebookLogo} alt="facebook" />
      <FormLogin>
        <TitleForm>Log in to Facebook</TitleForm>
        <Input
          type="text"
          placeholder="type asrulkadir"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
        />
        <InputPassword>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="type password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <i onClick={showPasswordHandler}>
            {showEye && showPassword ? (
              <AiOutlineEye />
            ) : showEye && !showPassword ? (
              <AiOutlineEyeInvisible />
            ) : null}
          </i>
        </InputPassword>
        <Button
          hoverBackgroundColor="rgb(9, 107, 236)"
          width="100%"
          backgroundColor="rgb(24, 119, 242)"
          type="submit"
          onClick={handleLogin}
        >
          Log In
        </Button>
        <ForgotAccount>Forgotten account?</ForgotAccount>
        <Line>
          <div /> <p>or</p> <div />
        </Line>
        <Button
          hoverBackgroundColor="#3c9c28"
          width="60%"
          backgroundColor="rgb(66,183,42)"
        >
          Create New Account
        </Button>
      </FormLogin>
    </LoginPageStyled>
  );
};

export default LoginPage;
