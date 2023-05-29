import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckCircleOutline, MdCheckCircle } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useCookies } from "react-cookie";

function ToDo({ todo, changeComplete, editTodo, deleteTodo }) {
    const [cookies] = useCookies(["member"]);
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);
    const [todoTitle, setTodoTitle] = useState(todo.todoTitle);
    const [todoContent, setTodoContent] = useState(todo.todoContent);
    const onChangeComplete = () => {
        changeComplete(todo.todoId);
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
        setTodoTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setTodoContent(e.target.value);
    };
    const onClickEditButton = () => {
        const updateTodo = {
            todoId: todo.todoId,
            todoTitle,
            todoContent,
            todoComplete: todo.todoComplete,
            memberId: cookies.member.memberId,
        };
        console.log(cookies.member.memberId);
        editTodo(updateTodo);
        setEdit(false);
    };
    const onClickDeleteTodo = () => {
        deleteTodo(todo.todoId);
    };
    return (
        <S.Layout onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {edit ? (
                <S.EditForm>
                    <S.Input
                        onChange={onChangeTitle}
                        type="text"
                        placeholder="작업이름"
                        value={todoTitle}
                    />
                    <S.Input
                        onChange={onChangeContent}
                        type="text"
                        placeholder="설명"
                        value={todoContent}
                    />
                    <S.ButtonDiv>
                        <S.CancelButton onClick={changeEdit}>
                            취소
                        </S.CancelButton>
                        <S.AddButton onClick={onClickEditButton}>
                            작업 수정
                        </S.AddButton>
                    </S.ButtonDiv>
                </S.EditForm>
            ) : (
                <>
                    {todo.todoComplete ? (
                        <S.TrueButton onClick={onChangeComplete}>
                            <MdCheckCircle />
                        </S.TrueButton>
                    ) : (
                        <S.FalseButton onClick={onChangeComplete}>
                            <MdCheckCircleOutline />
                        </S.FalseButton>
                    )}
                    <div>
                        <h1>{todo.todoTitle}</h1>
                        <p>{todo.todoContent}</p>
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
        </S.Layout>
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
    z-index: 0;
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
    Layout,
    TrueButton,
    FalseButton,
    ButtonGroup,
    EditForm,
    Input,
    ButtonDiv,
    CancelButton,
    AddButton,
};
export default ToDo;
