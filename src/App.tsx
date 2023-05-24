import { useRef, useState } from 'react';
import TasksAndSubtasks from './components/TaskAndSubTask';
import Layout from './components/Layout';
import LoginPage from './view/Login';
import { Button } from './components/Button';

const TASKS = [
  {
    task: 'Clean bedroom',
    subtasks: ['Do laundry', 'Organize desk', 'Wipe floors'],
  },
  {
    task: 'Study',
    subtasks: ['Review chemistry', 'Do a React coding challenge'],
  },
  {
    task: 'Build website',
    subtasks: ['Choose tech stack', 'Design pages', 'Develop', 'Publish'],
  },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const completedTasksRef = useRef<typeof TASKS>([]);

  const handleSelectedSubItem = (taskId: number, itemId: number) => {
    const updateTasks = [...tasks];
    const subtasks = updateTasks[taskId].subtasks;
    const subtask = subtasks[itemId];

    subtasks[itemId] = subtask.startsWith('@@@')
      ? subtask.slice(3)
      : `@@@${subtask}`;
    setTasks(updateTasks);
    updateCompletedTasksRef();
  };

  const updateCompletedTasksRef = () => {
    const updatedCompletedTasks = [...tasks].filter((task) =>
      task.subtasks.every((subtask) => subtask.startsWith('@@@'))
    );
    completedTasksRef.current = updatedCompletedTasks;
  };

  const handleClearCompleted = () => {
    const updatedTaskList = [...tasks].filter(
      (task) =>
        !completedTasksRef.current.every(
          (complete) => complete.task === task.task
        )
    );
    setTasks(updatedTaskList);
    completedTasksRef.current = [];
  };

  /** NOTE: A proper app SHOULD use navigation rather than tenerity operation to check for 'isLoggedIn' */
  return (
    <Layout loggedIn={isLoggedIn} logout={() => setIsLoggedIn(false)}>
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className='bg-white border border-gray-200 rounded-lg shadow p-3'>
          <Button onClick={handleClearCompleted}>Clear completed tasks</Button>
          <ul className='px-4'>
            {tasks.map((task, index) => (
              <TasksAndSubtasks
                key={index}
                {...task}
                handleSelectedSubItem={(subIndex) =>
                  handleSelectedSubItem(index, subIndex)
                }
              />
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export default App;
