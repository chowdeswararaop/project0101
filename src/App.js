import './App.css';
import Layout from './UI/Layout/Layout';
import {Route} from 'react-router-dom'
import Dashbord from './container/Dashbord/Dashbord';
import { Profiler } from 'react';
import logout from './container/logout/logout';
import Details from './container/details/details';


function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Route path='/signIn' component={}/>
        <Route path='/main'   component={}/> */}
        <Route path='/Dashbord'   component={Dashbord}/>
        <Route path='/details'   component={Details}/>
        <Route path='/Logout'   component={logout}/>
        </Layout>
    </div>
  );
}

export default App;
