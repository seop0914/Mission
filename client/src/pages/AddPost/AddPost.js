import React, { useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import axios from "axios";

function AddPost() {
    const [cookies] = useCookies(["member"]);
    const [postTitle, setPostTitle] = useState();
    const [postContent, setPostContent] = useState();

    const onChangeTitle = (e) => {
        setPostTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setPostContent(e.target.value);
    };

    const addPost = () => {
        const data = {
            postTitle,
            postContent,
            memberNickname: cookies.member.memberNickname,
            postViews: 0,
            postLikes: 0,
            memberId: cookies.member.memberId,
        };
        axios
            .put(`http://localhost:8000/community/add`, data)
            .then((res) => {
                console.log(res.data);
                window.location.href = "/community";
            })
            .catch((err) => {
                console.log("Error");
            });
    };

    return (
        <Layout>
            <S.AddPostText>
                <h1>함께 할 때 더 즐거운 순간</h1>
                <p>
                    <span></span>님 플랫폼 mission에서 다양한 사람을 만나고
                    정보의 폭을 넓혀보세요.
                </p>
            </S.AddPostText>
            <S.AddPostForm method="post">
                {/* <div>
                    <S.Topic>
                        <h2>토픽</h2>
                        <S.TopicSelect>
                            <option value="">토픽을 선택해주세요.</option>
                            <option value="Home">Home</option>
                            <option value="Work">Work</option>
                        </S.TopicSelect>
                    </S.Topic>
                </div> */}
                <S.Title>
                    <h2>Title</h2>
                    <input
                        type="text"
                        onChange={onChangeTitle}
                        placeholder="Please enter a title."
                    />
                </S.Title>

                <S.Content>
                    <h2>Content</h2>
                    <div id="content-box">
                        <textarea
                            id="summernote"
                            onChange={onChangeContent}
                        ></textarea>
                    </div>

                    <S.AddPostButton>
                        <S.CancelButton type="button">Cancel</S.CancelButton>
                        <S.RegisterButton type="button" onClick={addPost}>
                            Enter
                        </S.RegisterButton>
                    </S.AddPostButton>
                </S.Content>
            </S.AddPostForm>
        </Layout>
    );
}

const Layout = styled.div`
    margin-left: 30px;
    min-width: 0;
    width: 850px;

    & h2 {
        color: rgb(107 114 128);
        font-weight: bold;
        font-size: 13px;
        margin-bottom: 10px;
    }
`;
const AddPostText = styled.div`
    & > h1 {
        font-size: 30px;
        font-weight: bold;
    }
    & > p {
        margin-top: 20px;
        color: rgb(107 114 128);
        font-size: 13px;
    }
    & > p > span {
        font-weight: bold;
    }
`;
const AddPostForm = styled.div`
    width: 100%;
`;
const Category = styled.div`
    margin-top: 50px;
    position: relative;
`;
const Topic = styled.div`
    margin-top: 50px;
    position: relative;
`;
const TopicSelect = styled.select`
    width: 100%;
    padding: 12px 5px;
    color: rgb(107 114 128);
    font-weight: bold;
    font-size: 14px;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 5px;
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
`;
const Title = styled.div`
    margin-top: 30px;
    & > input {
        width: 100%;
        padding: 10px 5px;
        font-weight: bold;
        font-size: 14px;
        border: 1px solid hsla(220, 9%, 46%, 0.3);
        border-radius: 5px;
        box-sizing: border-box;
    }
`;
const Tag = styled.div`
    margin-top: 30px;
    & > h2 > span {
        color: #8bc34a;
    }
`;
const TagBox = styled.div`
    position: relative;
    & > input {
        width: 100%;
        padding: 10px 5px;
        font-weight: bold;
        font-size: 14px;
        border: 1px solid hsla(220, 9%, 46%, 0.3);
        border-radius: 5px;
        box-sizing: border-box;
    }
    & > button > svg {
        color: rgb(153, 153, 153);
    }
    & > button > svg:hover {
        color: #8bc34a;
    }
`;
const ArrowButton = styled.div`
    position: absolute;
    right: 0px;
    top: 8px;
    border: 0px solid #fff;
    border-left: 1px solid hsla(220, 9%, 46%, 0.3);
    background-color: inherit;
`;
const Content = styled.div`
    margin-top: 30px;
`;
const AddPostButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    & > button {
        margin-left: 10px;
        padding: 10px 30px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }
`;
const CancelButton = styled.button`
    background-color: #fff;
    color: #000;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    &:hover {
        background-color: hsla(220, 9%, 46%, 0.1);
    }
`;
const RegisterButton = styled.button`
    background-color: #9d3fd0;
    color: #fff;
    border: 0px solid #fff;
    &:hover {
        background-color: #7828a3;
    }
`;

const S = {
    Layout,
    AddPostText,
    AddPostForm,
    Category,
    Topic,
    TopicSelect,
    Title,
    Tag,
    TagBox,
    ArrowButton,
    Content,
    AddPostButton,
    CancelButton,
    RegisterButton,
};

export default AddPost;
