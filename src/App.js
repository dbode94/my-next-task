import Navigation from './navigation/navigation.component';
import Authentication from './routes/authentication/authentication.route';
import Tasks from './routes/tasks/tasks.route';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Authentication/>}/>
        <Route path='tasks'element={<Tasks/>}/>
      </Route>
    </Routes>
  );
}

export default App;
