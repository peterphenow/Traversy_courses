import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        //each list item must have a unique 'key' prop
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
