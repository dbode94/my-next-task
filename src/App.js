import Navigation from './navigation/navigation.component';
import Authentication from './routes/authentication/authentication.route';
import Dashboard from './routes/dashboard/dashboard.route';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <Routes>
      <Route index element={<Authentication/>}/>
      <Route path='/' element={<Navigation/>}>
        <Route path='dashboard'element={<Dashboard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
