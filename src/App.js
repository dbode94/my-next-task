import TaskCollection from './components/taskCollection/taskCollection.component';
import Input from './components/taskCollection/input/input.compoennt';

import { useContext } from 'react';
import { TasksContext } from './context/tasks.context';

import './App.css';

function App() {

  const {currentTasks, completedTasks} = useContext(TasksContext)

  return (
    <div className="App">
      <h1>To do:</h1>
      <Input/>
      <TaskCollection tasksList={currentTasks}/>

      <h4>Completed tasks:</h4>
      <TaskCollection tasksList={completedTasks} collectionType='completed'/>
    </div>
  );
}

export default App;
