type Props = {
  task: string;
  subtasks: string[];
  handleSelectedSubItem: (subIndex: number) => void;
};

const TasksAndSubtasks = ({ task, subtasks, handleSelectedSubItem }: Props) => {
  const isCompleted = subtasks.every((subtask) => subtask.startsWith('@@@'));

  return (
    <li className='my-2'>
      <p className={`text-lg mb-1 ${isCompleted ? 'line-through' : ''}`}>
        - {task}
      </p>
      {/* Subtask */}
      <ul className='ml-3'>
        {subtasks.map((subtask, subIndex) => {
          return (
            <li
              key={subIndex}
              className={`hover:bg-gray-300 py-1 px-2 cursor-pointer ${
                subtask.startsWith('@@@') ? 'line-through' : ''
              }`}
              onClick={() => handleSelectedSubItem(subIndex)}
            >
              {subtask.startsWith('@@@') ? subtask.slice(3) : subtask}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default TasksAndSubtasks;
