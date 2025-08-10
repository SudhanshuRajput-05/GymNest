import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Membership from './components/Membership';
import Personal from './components/Personal';
import Group from './components/Group';
import Products from './components/Products';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ContactList from './components/ContactList';
import MembershipList from './components/MembershipList';
import Trainers from './components/Trainers';


const App = () => {
  return <>
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/membership' element={<Membership/>} />
        <Route path='/personal-training' element={<Personal/>} />
        <Route path='/group-training' element={<Group/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact-list' element={<ContactList/>}/>
        <Route path='/membership-list' element={<MembershipList/>}/>
      </Routes>
  </BrowserRouter>
  
  </>
}
export default App;
