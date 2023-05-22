import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";
import { useCookies } from "react-cookie";

const Login = () => {
    const [cookies, setCookies] = useCookies(["member"]);

    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [loginFail, setLoginFail] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const login = () => {
        const data = {
            memberIdentification: id,
            memberPassword: password,
        };
        axios
            .post("http://localhost:8000/member/login", data)
            .then((res) => {
                if (res.data) {
                    setLoginFail(false);
                    setCookies("member", res.data, { path: "/" });
                    window.location.href = "/";
                    console.log(res.data);
                } else {
                    console.log(res.data);
                    setLoginFail(true);
                }
            })
            .catch((err) => {
                setLoginFail(true);
                console.log(err);
            });
    };

    return (
        <S.FullPage>
            <Link>
                <S.Logo />
            </Link>
            <S.Welcome>Mission에 오신 것을 환영합니다.</S.Welcome>
            <S.SNSLogin>
                <p>SNS 로그인</p>
                <div>
                    <S.SNSIcon to="/">
                        <FaFacebook />
                    </S.SNSIcon>
                    <S.SNSIcon to="/">
                        <FaGoogle />
                    </S.SNSIcon>
                </div>
            </S.SNSLogin>
            <S.CenterLine>
                <p>Mission 아이디로 로그인</p>
                <div></div>
            </S.CenterLine>
            <S.MissionLogin>
                <S.Input>
                    <label for="id">아이디</label>
                    <input type="text" id="id" onChange={onChangeId} />
                </S.Input>
                <S.Input>
                    <label for="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        onChange={onChangePassword}
                    />
                </S.Input>
                {loginFail ? (
                    <S.ErrorMsg>
                        아이디 혹은 비밀번호가 일치하지 않습니다.
                    </S.ErrorMsg>
                ) : (
                    <></>
                )}
                <S.FindAccount>
                    <S.FindAccountLink>계정 찾기</S.FindAccountLink>
                </S.FindAccount>
                <S.LoginButton>
                    <button type="button" onClick={login}>
                        로그인
                    </button>
                </S.LoginButton>
            </S.MissionLogin>
            <S.SignUp>
                <p>아직 회원이 아니신가요?</p>
                <S.SignUpLink to={"/signup"}>회원가입</S.SignUpLink>
            </S.SignUp>
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
const SNSLogin = styled.div`
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
const MissionLogin = styled.form`
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
const ErrorMsg = styled.p`
    margin-top: 10px;
    font-weight: 700;
    font-size: 12px;
    color: #f24405;
`;
const FindAccount = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`;
const FindAccountLink = styled(Link)`
    color: #9d3fd0;
    text-decoration: none;
    &:hover {
        color: #7828a3;
    }
`;
const LoginButton = styled.div`
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
const SignUp = styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 13px;
    display: flex;
    justify-content: center;
    & > p {
        margin-right: 5px;
    }
`;
const SignUpLink = styled(Link)`
    color: #9d3fd0;
    text-decoration: underline;

    &:hover {
        color: #7828a3;
    }
`;

const S = {
    FullPage,
    Logo,
    Welcome,
    SNSLogin,
    SNSIcon,
    CenterLine,
    MissionLogin,
    Input,
    ErrorMsg,
    FindAccount,
    FindAccountLink,
    LoginButton,
    SignUp,
    SignUpLink,
};

export default Login;
