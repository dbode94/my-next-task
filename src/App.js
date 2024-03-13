import Navigation from './navigation/navigation.component';
import Authentication from './routes/authentication/authentication.route';
import Dashboard from './routes/dashboard/dashboard.route';
import ControlPanel from './routes/controlPanel/controlPanel.route';
import Account from './routes/account/account.route';
import Connections from './routes/connections/connections.route';
import Settings from './routes/settings/settings.route';
import UpdatePasswordForm from './routes/updatePasswordForm/updatePasswordForm.route';
import { ToastContainer} from 'react-toastify';

import { Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Authentication/>}/>
        <Route path='/' element={<Navigation/>}>
          <Route path='dashboard'element={<Dashboard/>}/>
          <Route path='control_panel'element={<ControlPanel/>}>
            <Route path='account' element={<Account/>}/> 
            <Route path='connections' element={<Connections/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>
          <Route path='update_password' element={<UpdatePasswordForm/>}/>
        </Route>
      </Routes>
      <ToastContainer position='top-center' autoClose={1000} hideProgressBar={true}/>
    </div>
  );
}

export default App;
