import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Comment({ comment }) {
    return (
        <S.CommentDiv>
            <input type="hidden" class="comment-id" />
            {/* <input class="change-edit-mode-check" type="checkbox" /> */}
            <div class="comment-normal-mode">
                <S.CommentFirstLineDiv>
                    <div>
                        <a>
                            <img
                                class="profile-picture"
                                src="/img/account.png"
                                alt=""
                            />
                            {comment.memberNickname}
                        </a>
                        <S.CommentInfoTextDiv>
                            <S.CommentNicknameLink>
                                {comment.commentNickname}
                            </S.CommentNicknameLink>
                            <span>{comment.createdDate}</span>
                        </S.CommentInfoTextDiv>
                    </div>
                    <S.LikeDislikeMymenuDiv>
                        <S.LikeDislikeDiv>
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
                            <p>0</p>
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
                        </S.LikeDislikeDiv>
                        {/* <S.MymenuBtnDiv>
                            <S.UserMenuButton>
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
                            </S.UserMenuButton>
                            <S.UpdateDeleteBtnDiv>
                                <button class="comment-update">
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
                                </button>
                                <button class="comment-remove">
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
                                </button>
                            </S.UpdateDeleteBtnDiv>
                            <input class="menu-check" type="checkbox" />
                        </S.MymenuBtnDiv> */}
                        {/* <S.MymenuBtnDiv>
                            <button type="button" class="user-menu">
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
                            </button>
                            <div class="update-delete-btn">
                                <button class="comment-update">
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
                                </button>
                                <button class="comment-remove">
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
                                </button>
                            </div>
                            <input class="menu-check" type="checkbox" />
                        </S.MymenuBtnDiv> */}
                    </S.LikeDislikeMymenuDiv>
                </S.CommentFirstLineDiv>
                <S.CommentContentDiv>
                    {comment.commentContent}
                </S.CommentContentDiv>
            </div>
            {/* <div class="comment-edit-mode">
                <div>
                    <img
                        class="profile-picture"
                        src="/img/account.png"
                        alt=""
                    />
                    <textarea class="summernote edit-mode-content"></textarea>
                </div>
                <div class="buttons">
                    <button class="cancel-button">취소</button>
                    <button class="write-comment-button">댓글 쓰기</button>
                </div>
            </div> */}
        </S.CommentDiv>
    );
}
const CommentDiv = styled.div`
    border-bottom: 1px solid hsla(220, 9%, 46%, 0.3);
    margin-bottom: 30px;
`;
const CommentFirstLineDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    & > div {
        display: flex;
        align-items: center;
    }
    & > span {
        margin-top: 5px;
        font-size: 12px;
        display: flex;
        align-items: center;
    }
    & svg {
        width: 15px;
    }
`;
const CommentInfoTextDiv = styled.div`
    margin-left: 10px;
`;
const CommentNicknameLink = styled(Link)`
    cursor: pointer;
    color: #000;
    &:hover {
        color: #8bc34a;
    }
`;
const LikeDislikeMymenuDiv = styled.div`
    position: relative;
    display: flex;
`;
const LikeDislikeDiv = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
        height: 100%;
        background-color: #fff;
        cursor: pointer;
        padding: 5px;
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
        line-height: 28px;
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
const MymenuBtnDiv = styled.div`
    position: relative;
`;
const UserMenuButton = styled.button`
    position: relative;
    background-color: #fff;
    border: 0 solid #fff;
    color: hsla(220, 9%, 46%, 0.7);
    margin-left: 20px;
    &:hover {
        color: #8bc34a;
    }
    & svg {
        width: 20px;
    }
`;
const UpdateDeleteBtnDiv = styled.div`
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
    background-color: #fff;
    z-index: 100;
    & > button {
        background-color: #fff;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin: 5px;
    }
    & > button:hover {
        color: #8bc34a;
    }
    & svg {
        width: 20px;
        margin-right: 10px;
    }
`;
const CommentContentDiv = styled.div`
    margin: 10px 0;
    font-size: 12px;
`;

const S = {
    CommentDiv,
    CommentFirstLineDiv,
    CommentInfoTextDiv,
    CommentNicknameLink,
    LikeDislikeMymenuDiv,
    LikeDislikeDiv,
    UpButton,
    DownButton,
    MymenuBtnDiv,
    UserMenuButton,
    UpdateDeleteBtnDiv,
    CommentContentDiv,
};

export default Comment;
