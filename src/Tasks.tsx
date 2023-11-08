export default function Tasks({ list, deleteTask, updateTask}) {

  return (
    <>
      <h1  style={{ backgroundColor: list.completed ? "green":"red" }}>{list.task}</h1>
      <button onClick={() => updateTask(list.id)}>completed</button>
      <button onClick={() => deleteTask(list.id)}>delete</button>
    </>
  );
}
