import Navigation from './navigation/navigation.component';
import Authentication from './routes/authentication/authentication.route';
import Dashboard from './routes/dashboard/dashboard.route';
import ControlPanel from './routes/controlPanel/controlPanel.route';
import Account from './routes/account/account.route';
import Connections from './routes/connections/connections.route';
import Settings from './routes/settings/settings.route';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <Routes>
      <Route index element={<Authentication/>}/>
      <Route path='/' element={<Navigation/>}>
        <Route path='dashboard'element={<Dashboard/>}/>
        <Route path='controlPanel'element={<ControlPanel/>}>
          <Route path='account' element={<Account/>}/> 
          <Route path='connections' element={<Connections/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
