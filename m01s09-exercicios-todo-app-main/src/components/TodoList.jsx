import { TodoItem } from "./TodoItem";
import { useToDos } from "../context/useToDos"

// Exporta o componente TodoList como um componente de função com uma propriedade chamada name que é passada como parâmetro para o componente.
export const TodoList = ({ name }) => {

  // Invocando a função "useToDos" importada para obter duas listas: completedToDo e pendingToDos
  const{completedToDo, pendingToDos} = useToDos();

  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {
          // key={todo.id}: Atribui um identificador único para cada item da lista para que o React possa gerenciá-los de forma eficiente.
          name === 'Finalizados'
          ? completedToDo.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
          : pendingToDos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
        }
      </ul>
    </section>
  );
};
