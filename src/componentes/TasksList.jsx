;
import { useContext } from 'react';
import { TaskContext } from "../context/TaskContext";
import TaskCard from './TaskCard'

function TasksList() {
  const { tasks } = useContext(TaskContext)
  return (
    <div className="grid grid-cols-2 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />))}
    </div>
  );
}

export default TasksList