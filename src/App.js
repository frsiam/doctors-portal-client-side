import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequirAuth from './Pages/Login/RequirAuth';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={<RequirAuth><Appointment /></RequirAuth>} />
        <Route path='/dashboard' element={<RequirAuth><Dashboard /></RequirAuth>}>
          <Route index element={<MyAppointments />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
