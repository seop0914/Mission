import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Comment from "./components/Comment/Comment";

function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState({
        postId: 1,
        postTitle: "게시물1 제목입니다.",
        postContent: "게시물1 내용입니다.",
        memberNickname: "aaa",
        postViews: 13,
        postCategory: "자유게시판",
        postLikes: 5,
        createdDate: "2023-05-01",
    });
    const [commentList, setCommentList] = useState([
        {
            commentId: 1,
            commentContent: "댓글1 입니다.",
            memberNickname: "aaa",
            createdDate: "2023-05-01",
        },
        {
            commentId: 2,
            commentContent: "댓글2 입니다.",
            memberNickname: "bbb",
            createdDate: "2023-05-01",
        },
        {
            commentId: 3,
            commentContent: "댓글3 입니다.",
            memberNickname: "ccc",
            createdDate: "2023-05-01",
        },
        {
            commentId: 4,
            commentContent: "댓글4 입니다.",
            memberNickname: "ddd",
            createdDate: "2023-05-01",
        },
    ]);
    return (
        <>
            <S.Main>
                <S.CenterDiv>
                    <div>
                        <S.AdvertisementBox>
                            <Link>
                                <S.Advertisement src="/img/community-1670485527069.jpg" />
                            </Link>
                        </S.AdvertisementBox>

                        <S.Category>
                            <S.CenterLine></S.CenterLine>
                            <S.CategoryLink>
                                <div>
                                    <Link>
                                        <span>{post.postCategory}</span>
                                    </Link>
                                    <span> / </span>
                                    <Link class="blue-font" href="#">
                                        <span>{post.postCategory}</span>
                                    </Link>
                                </div>
                            </S.CategoryLink>
                        </S.Category>

                        <S.PostFirstLine>
                            <S.PostInfo>
                                <Link>
                                    <S.ProfilePicture
                                        src="/img/community-profile.png"
                                        alt=""
                                    />
                                </Link>
                                <S.PostInfoText>
                                    <Link></Link>
                                    <p>
                                        <svg
                                            class="inline h-3 w-3"
                                            width="9"
                                            height="12"
                                            viewBox="0 1 9 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>bolt icon</title>
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M5.21535 0.575533C5.4443 0.647704 5.6 0.86003 5.6 1.10009V3.85009L7.8 3.85009C8.00508 3.85009 8.19313 3.96419 8.28783 4.14609C8.38254 4.328 8.36818 4.54748 8.25057 4.71549L4.40057 10.2155C4.26291 10.4122 4.0136 10.4968 3.78464 10.4246C3.55569 10.3525 3.4 10.1401 3.4 9.90009L3.4 7.15009H1.2C0.994914 7.15009 0.806866 7.03599 0.712157 6.85408C0.617448 6.67218 0.631811 6.45269 0.749418 6.28468L4.59942 0.784684C4.73708 0.588021 4.98639 0.503362 5.21535 0.575533Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <span>{post.createdDate}</span>
                                        <span> ㆍ </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            class="h-4 w-4 shrink-0"
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
                                        <span></span>
                                        <S.UpdateCheck>
                                            {" "}
                                            ㆍ 수정됨
                                        </S.UpdateCheck>
                                    </p>
                                </S.PostInfoText>
                            </S.PostInfo>
                            <S.ShareScrap>
                                <button href="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="h-6 w-6 text-gray-400 hover:text-blue-500 focus:outline-0 focus:ring-0 dark:hover:text-blue-200"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                        ></path>
                                    </svg>
                                </button>
                                <button id="scrap" type="button">
                                    <svg
                                        class="scrap-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        ></path>
                                    </svg>
                                </button>
                                <S.UserMenu type="button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="h-6 w-6 text-gray-400 hover:text-blue-500 focus:outline-0 focus:ring-0 dark:hover:text-blue-200"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        ></path>
                                    </svg>
                                </S.UserMenu>
                                <S.UpdateDeleteBtn>
                                    <Link>
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
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            ></path>
                                        </svg>
                                        수정하기
                                    </Link>
                                    <Link>
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
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            ></path>
                                        </svg>
                                        삭제하기
                                    </Link>
                                </S.UpdateDeleteBtn>
                            </S.ShareScrap>
                        </S.PostFirstLine>

                        <S.PostTitle>
                            <h1>{post.postTitle}</h1>
                        </S.PostTitle>

                        <S.PostContent>{post.postContent}</S.PostContent>

                        <S.TagLike>
                            <S.LikeDislike>
                                <S.DownButton>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="hover:text-red-500 group-hover:text-red-500 h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </S.DownButton>
                                <p id="board-likes">2</p>
                                <S.UpButton>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="hover:text-blue-500 group-hover:text-blue-500 h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                        ></path>
                                    </svg>
                                </S.UpButton>
                            </S.LikeDislike>
                        </S.TagLike>
                        <S.AdvertisementBox>
                            <Link href="">
                                <S.Advertisement src="/img/community-1670485527069.jpg" />
                            </Link>
                        </S.AdvertisementBox>
                    </div>

                    <S.CommentArea>
                        <p>
                            <span id="comments-size">{commentList.length}</span>
                            개의 댓글
                        </p>
                        <S.AddCommentBox>
                            <S.AddComment>
                                <div>
                                    <img
                                        class="profile-picture"
                                        alt="profile"
                                    />
                                    <img
                                        class="profile-picture"
                                        src="/img/account.png"
                                        alt="profile"
                                    />
                                </div>
                                <S.AddCommentForm action="">
                                    <textarea id="summernote"></textarea>

                                    <S.AddCommentButton>
                                        <button id="comment-btn" type="button">
                                            댓글 쓰기
                                        </button>
                                    </S.AddCommentButton>
                                </S.AddCommentForm>
                            </S.AddComment>
                        </S.AddCommentBox>

                        <S.CommentList>
                            {commentList.map((comment) => (
                                <Comment comment={comment} />
                            ))}
                        </S.CommentList>
                    </S.CommentArea>
                </S.CenterDiv>
            </S.Main>
        </>
    );
}

const Main = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0;
    padding: 0px;
`;
const LeftDiv = styled.div`
    width: 180px;
`;
const CenterDiv = styled.div`
    min-width: 0;
    margin-left: 30px;
`;
const RightDiv = styled.div`
    width: 180px;
    margin-left: 30px;
`;
const ProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`;
const LeftSideImg = styled.img`
    width: 180px;
    margin-bottom: 30px;
`;
const AdvertisementBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Advertisement = styled.img`
    border: 0px solid inherit;
`;
const Category = styled.div`
    position: relative;
    margin-top: 50px;
`;
const CenterLine = styled.div`
    width: 100%;
    height: 0;
    border-top: 1px solid hsla(220, 9%, 46%, 0.3);
    position: absolute;
    top: 10px;
    z-index: 0;
`;
const CategoryLink = styled.div`
    margin-left: 20px;
    position: relative;
    & > div {
        width: 140px;
        background-color: #fff;
        position: relative;
        font-size: 12px;
        padding: 5px 10px;
        z-index: 10;
    }
    & > div > a {
        color: #8bc34a;
    }
    & > div > a:hover {
        color: #8bc34a;
    }
    & > div > a:nth-child(1) {
        color: hsla(220, 9%, 46%, 0.7);
    }
`;
const PostFirstLine = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const PostInfo = styled.div`
    display: flex;
    align-items: center;
`;
const PostInfoText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    & > a:hover {
        color: #8bc34a;
    }
    & p {
        margin-top: 5px;
        font-size: 14px;
        display: flex;
        align-items: center;
    }
    & svg {
        width: 15px;
    }
`;
const UpdateCheck = styled.span`
    color: #689f38;
`;
const ShareScrap = styled.div`
    display: flex;
    position: relative;
    & > button {
        width: 45px;
        padding: 10px;
        color: hsla(220, 9%, 46%, 0.7);
        background-color: #fff;
        border: 0 solid #fff;
    }
    & > button:hover {
        color: #8bc34a;
    }
`;
const UserMenu = styled.button`
    position: relative;
    background-color: #fff;
    border: 0 solid #fff;
    color: hsla(220, 9%, 46%, 0.7);
    &:hover {
        color: #8bc34a;
    }
    & svg {
        width: 20px;
    }
`;
const UpdateDeleteBtn = styled.div`
    position: absolute;
    width: 150px;
    top: 50px;
    right: 0;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 10px;
    background-color: #fff;
    padding: 5px 15px;
    display: none;
    flex-direction: column;
    & > a {
        font-size: 14px;
        display: flex;
        align-items: center;
        margin: 5px;
    }
    & > a:hover {
        color: #8bc34a;
    }
    & svg {
        width: 20px;
        margin-right: 10px;
    }
`;
const PostTitle = styled.div`
    margin-top: 40px;
    font-size: 32px;
    font-weight: bold;
`;
const PostContent = styled.div`
    margin-top: 40px;
    & > p {
        margin: 10px 0;
    }
`;
const TagLike = styled.div`
    margin-top: 30px;
    margin-bottom: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const LikeDislike = styled.div`
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
        height: 100%;
        background-color: #fff;
        cursor: pointer;
        padding: 10px;
        line-height: 38px;
        display: flex;
        align-items: center;
    }
    & > button:hover {
        border: 1px solid hsla(220, 9%, 46%, 0.7);
    }
    & > p {
        border-top: 1px solid hsla(220, 9%, 46%, 0.3);
        border-bottom: 1px solid hsla(220, 9%, 46%, 0.3);
        line-height: 36px;
        padding: 0 5px;
        margin: 0;
        width: 50px;
        text-align: center;
    }
    & svg {
        width: 15px;
    }
`;
const UpButton = styled.button`
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 0 5px 5px 0;
    &:hover {
        color: #8bc34a;
    }
`;
const DownButton = styled.button`
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 5px 0 0 5px;
    &:hover {
        color: #ff9933;
    }
`;
const CommentArea = styled.div`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid hsla(220, 9%, 46%, 0.7);
`;
const AddCommentBox = styled.div`
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 10px;
    margin-top: 40px;
`;
const AddComment = styled.div`
    display: flex;
    padding: 20px;
`;
const AddCommentForm = styled.form`
    width: 100%;
    margin-left: 10px;
`;
const WriteCommentContent = styled.div`
    width: 100%;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 10px;
`;
const AddCommentButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    & > button {
        padding: 13px 30px;
        color: #fff;
        background-color: #8bc34a;
        border: 0px solid #fff;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
    & > button:hover {
        background-color: #689f38;
    }
`;
const CommentList = styled.div`
    margin-top: 50px;
`;

const S = {
    Main,
    LeftDiv,
    CenterDiv,
    RightDiv,
    ProfilePicture,
    LeftSideImg,
    Advertisement,
    AdvertisementBox,
    Category,
    CategoryLink,
    CenterLine,
    PostFirstLine,
    PostInfo,
    PostInfoText,
    UpdateCheck,
    ShareScrap,
    UserMenu,
    UpdateDeleteBtn,
    PostTitle,
    PostContent,
    TagLike,
    LikeDislike,
    UpButton,
    DownButton,
    CommentArea,
    AddCommentBox,
    AddComment,
    AddCommentForm,
    WriteCommentContent,
    AddCommentButton,
    CommentList,
};

export default Post;
