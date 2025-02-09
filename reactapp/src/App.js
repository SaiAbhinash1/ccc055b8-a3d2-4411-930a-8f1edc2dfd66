import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/user/signup/Signup';
import AdminSignup from './components/admin/signup/AdminSignup';
import Login from './components/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// test import Institute from './components/web components/institute/Institute';
// test import InstituteList from './components/web components/instituteList/InstituteList';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import InstitutePagee from './components/user/institutee/institutee';
import InstitutePage from '../src/components/admin/institutee/institutee';
import Enrolledcourse from '../src/components/admin/ViewAcademy/Enrolledcourse/course';
import Institute from "./components/admin/ViewAcademy/institutes/institute";
import Course from "./components/admin/ViewAcademy/Enrolledcourse/course";
import AddInstitute from "./components/admin/ViewAcademy/institutes/AddInstitute";
import EditInstitute from "./components/admin/ViewAcademy/institutes/EditInstitute"; 
import { Switch } from '@mui/material';

function App() {
  const success = () => toast.success('Login Successful!!')
  const fail = (err) => toast.error(err)
  return (
     <>
     <Router>
       <div>
       <Navbar />
         <div className="App">
           {/* <Switch> */}
           <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/admin/signup' element={<AdminSignup/>} success={success} fail={fail} />
             <Route path='/user/signup' element={<Signup/>} success={success} fail={fail} />
             <Route path='/login' element={<Login/>} success={success} fail={fail} />
             <Route path='/user/institutepage' element={<InstitutePagee/>}  />
             <Route path='/user/enrolledcourse' element={<Enrolledcourse/>}  />
             <Route path="/institutes" element={<Institute />} />
            <Route path="/EnrollCourse" element={<Course />} />
            <Route path="/addInstitute" element={<AddInstitute />} />
            <Route path="/editInstitute" element={<EditInstitute />} />
            <Route path="/institutepage" element={<InstitutePage/>} />
           </Routes>
           {/* </Switch> */}
         </div>
       </div>
     </Router>
     <ToastContainer theme='colored'/>
   </>
  );
}

export default App;
