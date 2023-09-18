import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiSearch, BiBell } from "react-icons/bi";
import { BsPersonCircle, BsBookmark } from "react-icons/bs";
import { useCookies } from "react-cookie";

function LayoutHeader() {
    const [cookies, setCookies, removeCookies] = useCookies(["member"]);
    const [myMenuCheck, setMyMenuCheck] = useState(false);

    console.log(cookies.member);

    const onChangeMyMenuCheck = () => {
        setMyMenuCheck(!myMenuCheck);
    };
    const logout = () => {
        removeCookies("member");
        setMyMenuCheck(false);
        axios
            .get("http://localhost:8000/member/logout")
            .then((res) => {
                removeCookies("member");
                setMyMenuCheck(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <S.Header>
            <S.Nav>
                <S.LogoLink to={"/"}>
                    <img src="" alt="" />
                    <h1>Mission</h1>
                </S.LogoLink>
                <S.Center>
                    <S.Menu>
                        <S.MenuLink to="/todo">To Do</S.MenuLink>
                        <S.MenuLink to="/community">커뮤니티</S.MenuLink>
                        <S.MenuLink to="/notice">공지사항</S.MenuLink>
                    </S.Menu>
                    <Search>
                        <input type="text" placeholder="검색" />
                        <button type="button">
                            <BiSearch />
                        </button>
                    </Search>
                </S.Center>
                {cookies.member ? (
                    <S.MyMenuDiv>
                        <button>
                            <BsBookmark />
                        </button>
                        <button>
                            <BiBell />
                        </button>
                        <button onClick={onChangeMyMenuCheck}>
                            <BsPersonCircle />
                        </button>
                        {myMenuCheck ? (
                            <ToggleMenuDiv>
                                <S.ToggleLink>내 프로필</S.ToggleLink>
                                <S.ToggleLink>내 계정</S.ToggleLink>
                                <S.ToggleLink>활동내역</S.ToggleLink>
                                <div></div>
                                <button onClick={logout}>로그아웃</button>
                            </ToggleMenuDiv>
                        ) : (
                            ""
                        )}
                    </S.MyMenuDiv>
                ) : (
                    <S.LoginSignUpDiv>
                        <S.LoginLink to={"/login"}>로그인</S.LoginLink>
                        <S.SignUpLink to={"/signup"}>회원가입</S.SignUpLink>
                    </S.LoginSignUpDiv>
                )}
            </S.Nav>
        </S.Header>
    );
}
const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0%;
    border-bottom: 1px solid hsla(220, 9%, 46%, 0.3);
    background-color: #fff;
    z-index: 100;
`;
const LogoLink = styled(Link)`
    text-decoration: none;
    color: #000;
    width: 208px;
`;
const Nav = styled.nav`
    width: 1280px;
    height: 64px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-size: 14px;
    position: relative;
`;
const Center = styled.div`
    display: flex;
    justify-content: space-between;
    width: 862px;
`;
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
`;
const MenuLink = styled(NavLink)`
    margin-right: 30px;
    text-decoration: none;
    color: #000;
    &:hover {
        color: #9d3fd0;
    }
    &.active {
        color: #9d3fd0;
    }
`;
const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 100px;
    & > input {
        border: 1px solid hsla(220, 9%, 46%, 0.3);
        border-radius: 16px;
        height: 30px;
        width: 200px;
        padding: 0px 10px 0px 30px;
        box-sizing: border-box;
    }
    & > input:focus {
        outline: none;
        border: 2px solid #9d3fd0;
    }
    & > button {
        position: absolute;
        left: 5px;
        background-color: inherit;
        border: inherit;
        cursor: pointer;
        font-size: 18px;
        color: hsla(220, 9%, 46%, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > button:hover {
        color: #9d3fd0;
    }
`;
const MyMenuDiv = styled.div`
    position: relative;
    display: flex;
    margin-left: 20px;
    & > button {
        background-color: inherit;
        border: inherit;
        font-size: 22px;
        margin-left: 10px;
        color: hsla(220, 9%, 46%, 0.7);
        align-items: center;
        cursor: pointer;
    }
    & > button:hover {
        color: #9d3fd0;
    }
`;
const ToggleMenuDiv = styled.div`
    position: absolute;
    right: 0;
    top: 30px;
    display: flex;
    width: 200px;
    flex-direction: column;
    justify-content: center;
    z-index: 100;
    background-color: #fff;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 10px;
    z-index: 100;

    & > div {
        margin-top: 20px;
        width: 100%;
        border-top: 1px solid hsla(220, 9%, 46%, 0.3);
    }

    & > button {
        text-decoration: none;
        color: hsla(220, 9%, 46%, 0.7);
        margin: 10px 0;
        padding-left: 40px;
        background-color: inherit;
        border: 0px solid #fff;
        text-align: left;
        cursor: pointer;
    }
    & > button:hover {
        color: #9d3fd0;
    }
`;
const ToggleLink = styled(Link)`
    text-decoration: none;
    color: hsla(220, 9%, 46%, 0.7);
    margin-top: 20px;
    padding-left: 40px;
    &:hover {
        color: #9d3fd0;
    }
`;
const LoginSignUpDiv = styled.div`
    display: flex;
`;
const LoginLink = styled(Link)`
    width: 85px;
    height: 35px;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c5c5c5;
    text-decoration: none;
    color: #000;
    font-size: 12px;
    &:hover {
        background-color: #f3f3f3;
    }
`;
const SignUpLink = styled(Link)`
    margin-left: 10px;
    width: 85px;
    height: 35px;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c5c5c5;
    text-decoration: none;
    background-color: #9d3fd0;
    color: #fff;
    font-size: 12px;
    &:hover {
        background-color: #7828a3;
    }
`;
const S = {
    Header,
    LogoLink,
    Nav,
    Center,
    Menu,
    MenuLink,
    MyMenuDiv,
    ToggleMenuDiv,
    ToggleLink,
    LoginSignUpDiv,
    LoginLink,
    SignUpLink,
};

export default LayoutHeader;
