import './App.css'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
//testcomponents
import Loginreducer from './Loginreducer.js/Loginreducer';
//components
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signin from './pages/signin/Signin';
import Create from './pages/create/Create';
import Detail from './pages/detail/Detail';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUser from './components/OnlineUser'
import {useContextAuth} from './hooks/useContextAuth'
function App() {
  const{authIsReady,user}=useContextAuth()

  return (
   <div className='App'> 
   {authIsReady && (
    <Router>

            <Sidebar/>
      <div className="container">
        <Navbar/>
            <Routes>

                <Route path='/' element={!user ? <Navigate to='/login'/>: <Dashboard/>}/>

                <Route path='/login' element={user ? <Navigate to ='/'/>:   <Login/>}/>
                
                <Route path='/signin' element={user ? <Navigate to='/'/>:<Signin/>}/>

                <Route path='/projects/:id' element={!user?<Navigate to='/login'/>:<Detail/>}/>

                 <Route path='/create' element={<Create/>}/>
                 
                  <Route path='/loginreducer' element={<Loginreducer/>} />
             

             
            </Routes>
        </div>
      {user &&<OnlineUser/>}  
      </Router>
   )}
    </div>

    );
}

export default App
