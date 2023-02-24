import styled from "styled-components";
import ToDo from "../ToDo/ToDo";

function ToDoList({ todolist, setTodolist }) {
    const changeComplete = (id) => {
        const newTodolist = [...todolist];
        const todo = newTodolist.find((todo) => todo.id === id);
        todo.complete = !todo.complete;
        setTodolist(newTodolist);
    };
    const editTodo = (updateTodo) => {
        const newTodolist = [...todolist];
        const todo = newTodolist.find((todo) => todo.id === updateTodo.id);
        todo.title = updateTodo.title;
        todo.content = updateTodo.content;
        setTodolist(newTodolist);
    };
    const deleteTodo = (id) => {
        const newTodolist = todolist.filter((todo) => todo.id !== id);
        setTodolist(newTodolist);
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
                    <h1>아래 '작업 추가' 버튼으로 할 일을 추가해주세요!</h1>
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
