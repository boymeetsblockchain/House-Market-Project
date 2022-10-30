import{Routes, Route,} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassowrd from './pages/ForgotPassowrd'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Category from './pages/Category'
import Contact from './pages/Contact'
 import PrivateRoute from './components/PrivateRoute';
 import CreateListing from './pages/CreateListing';
 import Listing from './pages/Listing';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Explore/>} />
      <Route path='/offers' element={<Offers/>} />
      <Route path='/category/:categoryName' element={<Category/>} />
      <Route path='/profile' element={<PrivateRoute />} >
           <Route path='/profile' element={<Profile/>} />
          </Route>
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/forgot-password' element={<ForgotPassowrd/>} />
      <Route path='/create-listing' element={<CreateListing/>} />
      <Route path='/contact/:landlordId' element={<Contact/>} />
      <Route path='/category/:categoryName/:listingId' element={<Listing/>} />
     </Routes>
      <Navbar/>
      <ToastContainer/>
    </>
  )
}

export default App