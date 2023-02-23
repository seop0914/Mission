import styled from "styled-components";

function ToDoList({ todolist }) {
    return (
        <div>
            {todolist.map((todo) => (
                <ToDo>
                    <h1>{todo.title}</h1>
                    <p>{todo.content}</p>
                </ToDo>
            ))}
        </div>
    );
}
const ToDo = styled.div`
    margin-top: 20px;
`;

export default ToDoList;
