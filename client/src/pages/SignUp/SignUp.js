import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [name, setName] = useState();
    const [nickname, setNickname] = useState();
    const [email, setEmail] = useState();
    const [idCheck, setIdCheck] = useState(true);
    const [passwordCheck, setPasswordCheck] = useState(true);
    const [nicknameCheck, setNicknameCheck] = useState(true);

    const onChangeId = (e) => {
        setId(e.target.value);
        checkingId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        const pw = e.target.value;
        const pw2 = password2;
        checkingPassword(pw, pw2);
    };
    const onChangePassword2 = (e) => {
        setPassword2(e.target.value);
        const pw = password;
        const pw2 = e.target.value;
        checkingPassword(pw, pw2);
    };
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
        checkingNickname(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const checkingId = (id) => {
        axios
            .get(`http://localhost:8000/member/idCheck`, {
                params: {
                    memberIdentification: id,
                },
            })
            .then((res) => {
                if (res.data) {
                    setIdCheck(false);
                    console.log(res.data);
                    return false;
                } else {
                    setIdCheck(true);
                    console.log(res.data);
                    return true;
                }
            })
            .catch((err) => {
                console.error(err);
                return false;
            });
    };
    const checkingPassword = (pw, pw2) => {
        if (pw && pw2) {
            if (pw !== pw2) {
                setPasswordCheck(false);
                return false;
            } else {
                setPasswordCheck(true);
                return true;
            }
        }
    };
    const checkingNickname = (nickname) => {
        axios
            .get(`http://localhost:8000/member/nicknameCheck`, {
                params: {
                    memberNickname: nickname,
                },
            })
            .then((res) => {
                if (res.data) {
                    setNicknameCheck(false);
                    return false;
                } else {
                    setNicknameCheck(true);
                    return true;
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const checkingSignUp = () => {
        if (idCheck && passwordCheck && nicknameCheck) {
            const data = {
                memberIdentification: id,
                memberPassword: password,
                memberName: name,
                memberNickname: nickname,
                memberEmail: email,
            };
            axios
                .put(`http://localhost:8000/member/join`, data)
                .then((res) => {
                    if (res) {
                        window.location.href = "/";
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

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
                    <input id="id" type="text" onChange={onChangeId} />
                </S.Input>
                {idCheck ? (
                    <></>
                ) : (
                    <S.ErrorMsg>이미 사용중인 아이디입니다.</S.ErrorMsg>
                )}
                <S.Input>
                    <label for="password">비밀번호</label>
                    <input
                        id="password"
                        type="password"
                        onChange={onChangePassword}
                    />
                </S.Input>
                <S.Input>
                    <label for="password2">비밀번호 확인</label>
                    <input
                        id="password2"
                        type="password"
                        onChange={onChangePassword2}
                    />
                </S.Input>
                {passwordCheck ? (
                    <></>
                ) : (
                    <S.ErrorMsg>비밀번호가 일치하지 않습니다.</S.ErrorMsg>
                )}
                <S.Input>
                    <label for="name">실명</label>
                    <input id="name" type="text" onChange={onChangeName} />
                </S.Input>
                <S.Input>
                    <label for="nickname">닉네임</label>
                    <input
                        id="nickname"
                        type="text"
                        onChange={onChangeNickname}
                    />
                </S.Input>
                {nicknameCheck ? (
                    <></>
                ) : (
                    <S.ErrorMsg>닉네임이 존재합니다.</S.ErrorMsg>
                )}
                <S.Input>
                    <label for="email">이메일</label>
                    <input id="email" type="email" onChange={onChangeEmail} />
                </S.Input>
                <SignUpButton>
                    <button type="button" onClick={checkingSignUp}>
                        회원가입
                    </button>
                </SignUpButton>
            </S.MissionSignUp>
            <S.Login>
                <p>이미 회원이신가요?</p>
                <S.LoginLink to={"/login"}>로그인</S.LoginLink>
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
const SuccessMsg = styled.p`
    margin-top: 10px;
    font-weight: 700;
    font-size: 12px;
    color: #177fbf;
`;
const ErrorMsg = styled.p`
    margin-top: 10px;
    font-weight: 700;
    font-size: 12px;
    color: #f24405;
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
        color: #7828a3;
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
    ErrorMsg,
    SuccessMsg,
    SignUpButton,
    Login,
    LoginLink,
};

export default SignUp;
