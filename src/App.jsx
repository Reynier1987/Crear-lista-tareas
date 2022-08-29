import TasksList from './componentes/TasksList'
import { TasksForm } from './componentes/TaskForm';

function App() {

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TasksForm />
        <TasksList />
      </div>
    </main>

  )
}

export default App;