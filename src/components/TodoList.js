import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;