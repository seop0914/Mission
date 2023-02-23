import React, { useState } from "react";
import styled from "styled-components";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";

function ToDo() {
    const [todolist, setTodolist] = useState([
        {
            id: 1,
            title: "리엑트 공부하기",
            content: "더욱 공부한다!",
        },
    ]);
    return (
        <FullPage>
            <h1>To Do List</h1>
            <ToDoList todolist={todolist} />
            <AddToDo todolist={todolist} setTodolist={setTodolist} />
        </FullPage>
    );
}
const FullPage = styled.div`
    width: 1280px;
`;
export default ToDo;
