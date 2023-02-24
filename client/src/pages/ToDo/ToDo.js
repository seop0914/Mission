import React, { useState } from "react";
import styled from "styled-components";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import { CiMemoPad } from "react-icons/ci";

function ToDo() {
    const [todolist, setTodolist] = useState([
        {
            id: 1,
            title: "리엑트 공부하기",
            content: "더욱 공부한다!",
            complete: false,
        },
        {
            id: 2,
            title: "리엑트 공부하기!!!!!!!!",
            content: "!!!!",
            complete: true,
        },
    ]);
    return (
        <S.FullPage>
            <S.Title>
                <CiMemoPad />
                <h1>To Do List</h1>
            </S.Title>
            <ToDoList todolist={todolist} setTodolist={setTodolist} />
            <AddToDo todolist={todolist} setTodolist={setTodolist} />
        </S.FullPage>
    );
}
const FullPage = styled.div`
    width: 1280px;
`;
const Title = styled.div`
    font-weight: bold;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > h1 {
        margin-left: 10px;
    }
`;

const S = {
    FullPage,
    Title,
};
export default ToDo;
