import { TodoItem } from "./TodoItem";
import { useToDos } from "../context/useToDos"

export const TodoList = ({ name }) => {
  const{completedToDo, pendingToDos} = useToDos();

  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {name === 'Finalizados' ? completedToDo.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
        : pendingToDos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
      </ul>
    </section>
  );
};
