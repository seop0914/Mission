import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Post({ post }) {
    return (
        <S.Layout>
            <S.FirstLine>
                <Link>
                    <S.ProfilePicture />
                    <span>{post.memberIdentification}</span>
                </Link>
                <span> ㆍ </span>
                <span>{post.postRegisterDate}</span>
            </S.FirstLine>
            <S.SecondLine>
                <Link>{post.postTitle}</Link>
            </S.SecondLine>
            <S.ThirdLine>
                <S.CategoryLink>
                    <Link>{post.postCategory}</Link>
                </S.CategoryLink>
                <S.UserReaction>
                    <div>
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
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                        </svg>
                        <span>{post.postViews}</span>
                    </div>
                    <div>
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
                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            ></path>
                        </svg>
                        <span>0</span>
                    </div>
                    <div>
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
                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            ></path>
                        </svg>
                        <span>{post.postLikes}</span>
                    </div>
                </S.UserReaction>
            </S.ThirdLine>
        </S.Layout>
    );
}

const Layout = styled.div`
    padding: 20px 5px;
    border-top: 1px solid hsla(220, 9%, 46%, 0.3);
`;
const FirstLine = styled.div`
    display: flex;
    align-items: center;
    & > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #000;
    }
    & > a:hover {
        color: #9d3fd0;
    }
    & > svg {
        width: 20px;
    }
    & span {
        font-size: 14px;
    }
`;
const ProfilePicture = styled.img`
    width: 20px;
    margin-right: 10px;
    border-radius: 100%;
`;
const SecondLine = styled.div`
    margin-top: 10px;
    & > a {
        text-decoration: none;
        font-weight: 600;
        margin-top: 10px;
        color: #000;
    }
    & > a:hover {
        color: #9d3fd0;
    }
`;
const ThirdLine = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 10px;
`;
const CategoryLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > a {
        background-color: #c791e4;
        color: #9d3fd0;
        font-size: 12px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 5px;
        margin-right: 10px;
        text-decoration: none;
    }
`;
const UserReaction = styled.div`
    display: flex;
    align-items: center;
    & > div {
        display: flex;
        align-items: center;
        margin: 0 5px;
        font-size: 14px;
    }
    & svg {
        width: 20px;
    }
`;

const S = {
    Layout,
    FirstLine,
    ProfilePicture,
    SecondLine,
    ThirdLine,
    CategoryLink,
    UserReaction,
};

export default Post;
