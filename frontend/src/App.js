import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProducts from './pages/Admin/CreateProducts';
import UserList from './pages/Admin/UsersList';
import UserProfile from './pages/user/UserProfile'
import Orders from './pages/user/Orders';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<UserDashboard />} />
          <Route path='user/profile' element={<UserProfile/>} />
          <Route path='user/orders' element={<Orders/>} />



        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
                  <Route path='admin/create-category' element={<CreateCategory/>} />
                  <Route path='admin/create-product' element={<CreateProducts/>} />
                  <Route path='admin/users' element={<UserList/>} />

        </Route>



        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='*' element={<Pagenotfound />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />

      </Routes>
    </>
  );
}

export default App;
