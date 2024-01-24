import Authentication from './routes/authentication/authentication.route';
import { Routes, Route } from 'react-router-dom';

import Tasks from './routes/tasks/tasks.route';

import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Authentication/>}/>
      <Route path='/tasks'element={<Tasks/>}/>
    </Routes>
  );
}

export default App;
