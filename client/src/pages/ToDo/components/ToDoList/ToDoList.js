import axios from "axios";
import styled from "styled-components";
import ToDo from "../ToDo/ToDo";

function ToDoList({ todolist, setTodolist }) {
    const changeComplete = (todoId) => {
        const data = todolist.find((todo) => todo.todoId === todoId);
        data.todoComplete = !data.todoComplete;
        data.memberId = data.member.memberId;
        console.log(data);
        axios.put(`http://localhost:8000/todo/update`, data).then((res) => {
            const newTodolist = [...todolist];
            setTodolist(newTodolist);
        });
    };
    const editTodo = (updateTodo) => {
        axios
            .put(`http://localhost:8000/todo/update`, updateTodo)
            .then((res) => {
                const data = res.data;
                const newTodolist = [...todolist];
                const todo = newTodolist.find(
                    (todo) => todo.todoId === data.todoId
                );
                todo.todoTitle = data.todoTitle;
                todo.todoContent = data.todoContent;
                setTodolist(newTodolist);
            });
    };
    const deleteTodo = (todoId) => {
        axios
            .delete(`http://localhost:8000/todo/delete/${todoId}`)
            .then((res) => {
                const newTodolist = todolist.filter(
                    (todo) => todo.todoId !== todoId
                );
                setTodolist(newTodolist);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <S.Layout>
            {todolist.length > 0 ? (
                todolist.map((todo) => (
                    <ToDo
                        todo={todo}
                        changeComplete={changeComplete}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />
                ))
            ) : (
                <S.NoneToDo>
                    <h1>아래 '작업 추가' 버튼으로 할 일을 추가해보세요!</h1>
                </S.NoneToDo>
            )}
        </S.Layout>
    );
}
const Layout = styled.div`
    border-top: 1px solid hsla(220, 9%, 46%, 0.3);
    margin-top: 20px;
`;
const NoneToDo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    & > h1 {
        font-size: 30px;
        font-weight: bold;
        color: #c791e4;
    }
`;

const S = {
    Layout,
    NoneToDo,
};

export default ToDoList;
