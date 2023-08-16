import React, { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Post from "./components/Post/Post";
import axios from "axios";

function Community() {
    const [sortBox, setSortBox] = useState(false);
    const [postList, setPostList] = useState([
        {
            postId: 1,
            postTitle: "게시물1 제목입니다.",
            postContent: "게시물1 내용입니다.",
            memberIdentification: "aaa",
            postViews: 13,
            postCategory: "자유게시판",
            postLikes: 5,
            postRegisterDate: "2023-05-01",
        },
        {
            postId: 2,
            postTitle: "게시물2 제목입니다.",
            postContent: "게시물2 내용입니다.",
            memberIdentification: "bbb",
            postViews: 7,
            postCategory: "고민/상담",
            postLikes: 7,
            postRegisterDate: "2023-05-05",
        },
        {
            postId: 3,
            postTitle: "게시물3 제목입니다.",
            postContent: "게시물3 내용입니다.",
            memberIdentification: "ccc",
            postViews: 10,
            postCategory: "자유게시판",
            postLikes: 9,
            postRegisterDate: "2023-05-05",
        },
    ]);
    function getPostList() {
        axios
            .get(`http://localhost:8000/community`)
            .then((res) => {
                setPostList(res.data);
            })
            .catch(() => {
                console.log("Error");
            });
    }
    useEffect(() => {
        getPostList();
    }, []);

    const onChangeSortBox = () => {
        setSortBox(!sortBox);
    };

    return (
        <div>
            <Link to="">
                <img
                    src="img/community-1670485527069.jpg"
                    alt="advertisement"
                />
            </Link>
            <S.BoardCategory>
                <S.BoardCategoryBackground>
                    <div></div>
                </S.BoardCategoryBackground>
                <S.BoardCategoryText>
                    <h1>커뮤니티</h1>
                    <p>다양한 사람을 만나고 생각의 폭을 넓혀보세요.</p>
                </S.BoardCategoryText>
            </S.BoardCategory>

            <S.ButtonGroup>
                <S.WritePostButton to={"/community/new"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                    >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                    <span>작성하기</span>
                </S.WritePostButton>
                <S.BoardDetailCategory>
                    <S.BoardDetailCategoryNavLink to={"/community/home"}>
                        Home
                    </S.BoardDetailCategoryNavLink>
                    <S.BoardDetailCategoryNavLink to={"/community/work"}>
                        Work
                    </S.BoardDetailCategoryNavLink>
                    <S.BoardDetailCategoryNavLink to={"/community"}>
                        All
                    </S.BoardDetailCategoryNavLink>
                </S.BoardDetailCategory>
                <S.Sort>
                    <S.SortButton onClick={onChangeSortBox}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-5 w-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                            ></path>
                        </svg>
                        <span>정렬</span>
                    </S.SortButton>
                    {sortBox ? (
                        <S.SortType>
                            <button type="button">최신순</button>
                            <button type="button">추천순</button>
                            <button type="button">댓글순</button>
                            <button type="button">스크랩순</button>
                            <button type="button">조회순</button>
                        </S.SortType>
                    ) : (
                        ""
                    )}
                </S.Sort>
            </S.ButtonGroup>
            <S.ButtonGroup2>
                <S.Refresh>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-5 w-5 text-gray-500 hover:cursor-pointer hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        ></path>
                    </svg>
                </S.Refresh>
                <S.Search>
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-3.5 w-3.5 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            ></path>
                        </svg>
                    </button>
                    <input type="text" placeholder="커뮤니티 내에서 검색" />
                </S.Search>
                <S.PageMove>
                    <span></span>
                    <span>/</span>
                    <span> 페이지</span>
                    <S.PageMoveLink>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="text-gray-300 dark:text-gray-700 h-4 w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            ></path>
                        </svg>
                    </S.PageMoveLink>
                    <S.PageMoveLink>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-200 h-4 w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            ></path>
                        </svg>
                    </S.PageMoveLink>
                </S.PageMove>
            </S.ButtonGroup2>
            <S.PostList>
                {postList.map((post) => (
                    <Post post={post} />
                ))}
            </S.PostList>
        </div>
    );
}

const BoardCategory = styled.div`
    position: relative;
    margin: 24px 0;

    & > img {
        width: 140px;
        position: absolute;
        top: -12px;
        right: 60px;
    }
`;
const BoardCategoryBackground = styled.div`
    background-color: rgb(240 246 250);
    position: relative;
    border-radius: 10px;
    & > div {
        width: 100%;
        height: 80px;
        background-image: url(https://okky.kr/pattern.svg);
        background-position: right top 1000px;
        opacity: 0.1;
        border-radius: 10px;
    }
`;
const BoardCategoryText = styled.div`
    position: absolute;
    top: 0;
    padding: 20px 30px;

    & > h1 {
        font-weight: bold;
        font-size: 20px;
        color: #000000;
        top: 0;
        margin-bottom: 8px;
    }
    & > p {
        font-size: 13px;
    }
`;

// 버튼 그룹1
const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid hsla(220, 9%, 46%, 0.3);
`;
const WritePostButton = styled(Link)`
    width: 100px;
    height: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ffffff;
    border-radius: 8px;
    background-color: #9d3fd0;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        background-color: #7828a3;
    }
    & > svg {
        width: 16px;
        margin-right: 5px;
    }
`;
const BoardDetailCategory = styled.div`
    &.NavLink {
        margin: 0 20px;
        background-color: #fff;
        border-radius: 8px;
        padding: 10px;
    }
    & > a:hover {
        color: #9d3fd0;
    }
`;
const BoardDetailCategoryNavLink = styled(NavLink)`
    margin: 0 20px;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    color: #000;
    text-decoration: none;

    &:hover {
        color: #8bc34a;
    }
    &.active {
        background-color: hsla(220, 9%, 46%, 0.1);
    }
`;
const Sort = styled.div`
    position: relative;
`;
const SortButton = styled.button`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        border: 1px solid hsla(220, 9%, 46%, 0.7);
    }
    & > svg {
        width: 20px;
        margin-right: 5px;
    }
`;
const SortType = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 130px;
    position: absolute;
    right: 0;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 5px;
    & > button {
        text-align: left;
        padding: 10px;
        background-color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    & > button:hover {
        color: #9d3fd0;
    }
`;

//버튼 그룹2
const ButtonGroup2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
const Refresh = styled.button`
    background: #fff;
    border: 0px solid #fff;
    cursor: pointer;
    & > svg {
        width: 20px;
    }
    & > svg:hover {
        color: #9d3fd0;
    }
`;
const Search = styled.form`
    padding: 5px;
    position: relative;
    display: flex;
    align-items: center;
    & > button {
        border: 0 solid #fff;
        background: #fff;
        cursor: pointer;
        position: absolute;
        top: 13px;
        left: 10px;
    }
    & svg {
        width: 16px;
        color: hsla(220, 9%, 46%, 0.7);
    }
    & svg:hover {
        color: #9d3fd0;
    }
    & > input {
        border: 0 solid #fff;
        padding: 10px 10px 10px 40px;
        border: 1px solid hsla(220, 9%, 46%, 0.3);
        border-radius: 20px;
    }
    & > input:focus {
        outline: none;
        border-color: #9d3fd0;
    }
`;
const PageMove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        width: 20px;
        margin: 0 10px;
    }
`;
const PageMoveLink = styled(Link)`
    &:hover {
        color: #9d3fd0;
    }
`;

const PostList = styled.div`
    margin-top: 20px;
    margin-bottom: 60px;
`;
const S = {
    BoardCategory,
    BoardCategoryBackground,
    BoardCategoryText,
    ButtonGroup,
    WritePostButton,
    BoardDetailCategory,
    BoardDetailCategoryNavLink,
    Sort,
    SortButton,
    SortType,
    ButtonGroup2,
    Refresh,
    Search,
    PageMove,
    PageMoveLink,
    PostList,
};

export default Community;
