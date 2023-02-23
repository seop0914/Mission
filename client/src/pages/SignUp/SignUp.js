import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
    return (
        <S.FullPage>
            <Link>
                <S.Logo />
            </Link>
            <S.Welcome>Mission에 오신 것을 환영합니다.</S.Welcome>
            <S.SNSSignUp>
                <p>SNS 회원가입</p>
                <div>
                    <S.SNSIcon to="/">
                        <FaFacebook />
                    </S.SNSIcon>
                    <S.SNSIcon to="/">
                        <FaGoogle />
                    </S.SNSIcon>
                </div>
            </S.SNSSignUp>
            <S.CenterLine>
                <p>Mission 아이디로 회원가입</p>
                <div></div>
            </S.CenterLine>
            <S.MissionSignUp>
                <S.Input>
                    <label for="id">아이디</label>
                    <input id="id" />
                </S.Input>
                <S.Input>
                    <label for="password">비밀번호</label>
                    <input id="password" />
                </S.Input>
                <S.Input>
                    <label for="password2">비밀번호 확인</label>
                    <input id="password2" />
                </S.Input>
                <S.Input>
                    <label for="name">실명</label>
                    <input id="name" />
                </S.Input>
                <S.Input>
                    <label for="nickname">닉네임</label>
                    <input id="nickname" />
                </S.Input>
                <SignUpButton>
                    <button>회원가입</button>
                </SignUpButton>
            </S.MissionSignUp>
            <S.Login>
                <p>이미 회원이신가요?</p>
                <S.LoginLink>로그인</S.LoginLink>
            </S.Login>
        </S.FullPage>
    );
};

const FullPage = styled.div`
    width: 450px;
    margin: 150px auto;
`;
const Logo = styled.img`
    width: 120px;
    display: flex;
    margin: 0 auto 30px;
`;
const Welcome = styled.p`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`;
const SNSSignUp = styled.div`
    margin-top: 40px;
    & > div {
        display: flex;
        justify-content: space-between;
    }
    & > p {
        font-weight: bold;
    }
`;

const SNSIcon = styled(Link)`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    padding: 10px 20px;
    border-radius: 10px;
    margin: 5px;
    color: #000;
    font-size: 30px;
    &:hover {
        border: 1px solid hsla(220, 9%, 46%, 0.7);
    }
`;
const CenterLine = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    & > div {
        position: absolute;
        top: 8px;
        width: 100%;
        height: 0;
        border-top: 1px solid hsla(220, 9%, 46%, 0.3);
        z-index: 0;
    }
    & > p {
        z-index: 10;
        background-color: #fff;
        padding: 0 10px;
        color: hsla(220, 9%, 46%, 0.9);
    }
`;
const MissionSignUp = styled.form`
    margin-top: 20px;
`;
const Input = styled.div`
    margin-top: 20px;
    & > label {
        margin-top: 8px;
        font-size: 12px;
        font-weight: bold;
    }
    & > input {
        margin-top: 5px;
        width: 100%;
        border: 1px solid hsla(220, 9%, 46%, 0.3);
        border-radius: 8px;
        padding: 10px;
        font-size: 20px;
        box-sizing: border-box;
    }
`;
const SignUpButton = styled.div`
    margin-top: 20px;
    & > button {
        width: 100%;
        padding: 8px 0;
        color: #fff;
        font-weight: bold;
        background-color: #9d3fd0;
        border: 1px solid #fff;
        border-radius: 5px;
        cursor: pointer;
    }
    & > button:hover {
        background-color: #7828a3;
    }
`;
const Login = styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 13px;
    display: flex;
    justify-content: center;
    & > p {
        margin-right: 5px;
    }
`;
const LoginLink = styled(Link)`
    color: #9d3fd0;
    text-decoration: underline;

    &:hover {
        background-color: #7828a3;
    }
`;

const S = {
    FullPage,
    Logo,
    Welcome,
    SNSSignUp,
    SNSIcon,
    CenterLine,
    MissionSignUp,
    Input,
    SignUpButton,
    Login,
    LoginLink,
};

export default SignUp;
