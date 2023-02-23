import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function LayoutFooter() {
    return (
        <S.Footer>
            <div>
                <S.Contact>
                    <h1>Mission</h1>
                    <p>To Do List</p>
                    <div>
                        <S.IconLink>
                            <FaFacebook />
                        </S.IconLink>
                        <S.IconLink>
                            <FaYoutube />
                        </S.IconLink>
                        <S.IconLink>
                            <MdMail />
                        </S.IconLink>
                    </div>
                </S.Contact>
                <div>
                    <S.Nav>
                        <S.NavLink>회사소개</S.NavLink>
                        <S.NavLink>공지사항</S.NavLink>
                        <S.NavLink>광고문의</S.NavLink>
                        <S.NavLink>채용</S.NavLink>
                        <div></div>
                        <S.NavLink>버그제보</S.NavLink>
                        <div></div>
                        <S.NavLink>개인정보 처리방침</S.NavLink>
                        <S.NavLink>서비스 이용약관</S.NavLink>
                    </S.Nav>
                    <S.CenterText>
                        <p>
                            상호명: (주)오키코리아 | 대표명 : 노상범, 장기진 |
                            사업자등록번호 : 592-87-02037 | 문의 : info@okky.kr
                        </p>
                        <p>
                            통신판매업신고번호 : 제 2022-서울강남-04742호 ㅣ
                            주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호
                            (06103)
                        </p>
                        <p>© 2022 (주)오키코리아, Inc. All rights reserved.</p>
                    </S.CenterText>
                </div>

                <div></div>
            </div>
        </S.Footer>
    );
}
const Footer = styled.footer`
    margin-top: 70px;
    border-top: 1px solid #dadada;
    padding: 28px 0;
    display: flex;
    & > div {
        width: 1280px;
        display: flex;
        margin: 0 auto;
    }
`;
const Contact = styled.div`
    width: 208px;
    & > div {
        display: flex;
    }
`;
const IconLink = styled(Link)`
    font-size: 25px;
    margin: 20px 20px 0 0;
    color: hsla(220, 9%, 46%);
    &:hover {
        color: #9d3fd0;
    }
`;
const CenterText = styled.div`
    margin-top: 30px;
    & > p {
        margin-bottom: 10px;
        font-size: 12px;
    }
`;
const Nav = styled.nav`
    display: flex;
    width: 862px;
    & > div {
        border-right: 1px solid hsla(220, 9%, 46%);
        height: 14px;
        margin-right: 20px;
    }
`;
const NavLink = styled(Link)`
    text-decoration: none;
    color: hsla(220, 9%, 46%);
    font-weight: bold;
    font-size: 12px;
    margin-right: 20px;
    &:hover {
        color: #9d3fd0;
    }
`;

const S = {
    Footer,
    Contact,
    IconLink,
    CenterText,
    Nav,
    NavLink,
};

export default LayoutFooter;
