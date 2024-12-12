import tasks from "./data/data";

function App() {
  console.log(tasks);

  const curentTasks = tasks.filter((curTask) => curTask.state !== "completed");

  const completedTasks = tasks.filter(
    (curTask) => curTask.state === "completed"
  );

  const printList = (array) => {
    return array.map((task) => (
      <li key={task.id} className="task">
        <div className="title">
          <h4>{task.title}</h4>
          {/*   <span class="state completed"  */}
          <span className={`state ${task.state}`}>{task.state}</span>
        </div>
        <div className="detail">Priority: {task.priority}</div>
        <div className="detail">Est. time: {task.estimatedTime}</div>
      </li>
    ));
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Task Manager</h1>
      </header>
      <main className="container">
        <section className="mb-1">
          <h2 className="mb-1">Current Tasks ({curentTasks.length})</h2>
          <ul className="tasks-list">{printList(curentTasks)}</ul>
        </section>
        <hr />
        <section className="mb-1">
          <h2 className="mb-1">Completed Tasks ({completedTasks.length})</h2>
          <ul className="tasks-list">{printList(completedTasks)}</ul>
        </section>
      </main>
    </>
  );
}

export default App;
