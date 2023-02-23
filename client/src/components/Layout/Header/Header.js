import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

function LayoutHeader() {
    return (
        <S.Header>
            <S.Nav>
                <S.LogoLink to={"/"}>
                    <img src="" alt="" />
                    <p>Mission</p>
                </S.LogoLink>
                <S.Center>
                    <S.Menu>
                        <S.MenuLink to={"/todo"}>To Do</S.MenuLink>
                        <S.MenuLink to={"/community"}>커뮤니티</S.MenuLink>
                        <S.MenuLink to={"/notice"}>공지사항</S.MenuLink>
                    </S.Menu>
                    <Search>
                        <input type="text" placeholder="검색" />
                        <button type="button">
                            <BiSearch />
                        </button>
                    </Search>
                </S.Center>
                <S.LoginSignUpDiv>
                    <S.LoginLink to={"/login"}>로그인</S.LoginLink>
                    <S.SignUpLink to={"/signup"}>회원가입</S.SignUpLink>
                </S.LoginSignUpDiv>
            </S.Nav>
        </S.Header>
    );
}
const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0%;
    border-bottom: 1px solid hsla(220, 9%, 46%, 0.3);
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
const MenuLink = styled(Link)`
    margin-right: 30px;
    text-decoration: none;
    color: #000;
    &:hover {
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
    LoginSignUpDiv,
    LoginLink,
    SignUpLink,
};

export default LayoutHeader;
