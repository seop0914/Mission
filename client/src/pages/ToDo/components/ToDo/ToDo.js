import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckCircleOutline, MdCheckCircle } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function ToDo({ todo, changeComplete, editTodo, deleteTodo }) {
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);
    const onChangeComplete = () => {
        changeComplete(todo.id);
    };
    const onMouseOver = () => {
        setHover(true);
    };
    const onMouseOut = () => {
        setHover(false);
    };
    const changeEdit = () => {
        setEdit(!edit);
    };
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onClickEditButton = () => {
        const updateTodo = {
            id: todo.id,
            title: title,
            content: content,
            complete: todo.complete,
        };
        editTodo(updateTodo);
        setEdit(false);
    };
    const onClickDeleteTodo = () => {
        deleteTodo(todo.id);
    };
    return (
        <Layout onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {edit ? (
                <EditForm>
                    <Input
                        onChange={onChangeTitle}
                        type="text"
                        placeholder="작업이름"
                        value={title}
                    />
                    <Input
                        onChange={onChangeContent}
                        type="text"
                        placeholder="설명"
                        value={content}
                    />
                    <ButtonDiv>
                        <CancelButton onClick={changeEdit}>취소</CancelButton>
                        <AddButton onClick={onClickEditButton}>
                            작업 수정
                        </AddButton>
                    </ButtonDiv>
                </EditForm>
            ) : (
                <>
                    {todo.complete ? (
                        <S.TrueButton onClick={onChangeComplete}>
                            <MdCheckCircle />
                        </S.TrueButton>
                    ) : (
                        <S.FalseButton onClick={onChangeComplete}>
                            <MdCheckCircleOutline />
                        </S.FalseButton>
                    )}
                    <div>
                        <h1>{todo.title}</h1>
                        <p>{todo.content}</p>
                    </div>
                    <div>
                        {hover ? (
                            <S.ButtonGroup>
                                <button onClick={changeEdit}>
                                    <AiFillEdit />
                                </button>
                                <button onClick={onClickDeleteTodo}>
                                    <AiFillDelete />
                                </button>
                            </S.ButtonGroup>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </>
            )}
        </Layout>
    );
}
const Layout = styled.div`
    display: flex;
    border-bottom: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    & > div > h1 {
        font-weight: bold;
        font-size: 20px;
    }
    & > div > p {
        margin-top: 5px;
        color: hsla(220, 9%, 46%);
    }
`;
const TrueButton = styled.button`
    font-size: 25px;
    background-color: #fff;
    border: 0px solid #fff;
    cursor: pointer;
    color: #9d3fd0;
    &:hover {
        color: #7828a3;
    }
`;
const FalseButton = styled.button`
    font-size: 25px;
    background-color: #fff;
    border: 0px solid #fff;
    cursor: pointer;
    color: #9d3fd0;
    &:hover {
        color: #7828a3;
    }
`;
const ButtonGroup = styled.div`
    position: absolute;
    right: 5%;
    & > button {
        font-size: 25px;
        color: #9d3fd0;
        background-color: #fff;
        border: 0px solid #fff;
        cursor: pointer;
    }
    & > button:hover {
        color: #7828a3;
    }
`;
const EditForm = styled.div`
    width: 700px;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    outline: none;
    border: 0px solid #fff;
    margin-bottom: 10px;
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button {
        border: 1px solid hsla(220, 9%, 46%, 0.3);
        border-radius: 5px;
        text-align: center;
        margin-left: 10px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
    }
`;
const CancelButton = styled.button`
    width: 60px;
    background-color: #fff;
    &:hover {
        background-color: hsla(220, 9%, 46%, 0.08);
    }
`;
const AddButton = styled.button`
    width: 80px;
    color: #fff;
    background-color: #9d3fd0;
    &:hover {
        background-color: #7828a3;
    }
`;
const S = {
    TrueButton,
    FalseButton,
    ButtonGroup,
};
export default ToDo;
