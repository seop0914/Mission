import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import { CiMemoPad } from "react-icons/ci";
import axios from "axios";

function ToDo() {
    const [todolist, setTodolist] = useState([]);
    function getTodolist() {
        axios.get("http://localhost:8000/todo/add").then().catch();
        axios.get("http://localhost:8000/todo").then((res) => {
            setTodolist(res.data);
        });
    }
    useEffect(() => {
        getTodolist();
    }, []);
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
