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
            {todolist.map((todo) => (
                <ToDo
                    todo={todo}
                    changeComplete={changeComplete}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </S.Layout>
    );
}
const Layout = styled.div`
    border-top: 1px solid hsla(220, 9%, 46%, 0.3);
    margin-top: 20px;
`;

const S = {
    Layout,
};

export default ToDoList;
