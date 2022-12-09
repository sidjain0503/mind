import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header/Header.js';
import Homepage from './Components/Homepage/Homepage';
import Contact from './Components/Contact/Contact';
import Aboutus from './Components/About/Aboutus';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Footer from './Components/Footer/Footer';
import Razorpay from './Razorpay';
import Buy from './Components/BuyCourse/Buy';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topics from './Components/Topics/Topics';
import Dpp11 from './Components/Topics/Dpp11';
import Dpp12 from './Components/Topics/Dpp12';
import FreeResources from './Components/FreeResources/FreeResources';
import Socials from './Components/Socials/Socials';
import Nopage from './Components/Nopage/Nopage';
import Terms_conditions from './Components/Legal/Terms_conditions';
import Privacy from './Components/Legal/Privacy';



function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer position='top-center' />
      <Socials/>

      <Routes>
        <Route path="*" element={<><Nopage /></>}/>
        <Route path="/privacyPolicy" element={<><Header />  <Privacy /> <Footer /> </>} />
        <Route path="/terms&conditions" element={<><Header /><Terms_conditions />  <Footer /></>} />

        <Route path="/freeresources/Jee/notes" element={<> <Header /><Topics type="notes"/><Footer/> </>} />
        <Route path="/freeresources/Jee/dpp/class11" element={<> <Header /><Dpp11  /> <Footer /> </>} />
        <Route path="/freeresources/Jee/dpp/class12" element={<> <Header /><Dpp12  />  <Footer /></>} />
        <Route path="/freeresources/Jee/pyq" element={<> <Header /><Topics type="pyq" /><Footer/> </>} />
        <Route path="/freeresources/Jee/mindmaps" element={<> <Header /><Topics type="mindmaps" /><Footer/> </>} />
        <Route path="/freeresources" element={<> <Header /><FreeResources device={"mobile"} /> </>} />
        <Route path='/courses/buy' element={<><Header /><Buy /><Footer /></>} />
        <Route path="/login/fill_details" element={<> fill details </>} />
        <Route path="/courses/buy/checkout" element={<><Razorpay /></>} />
        <Route path="/courses" element={<><Header /><CourseDetails /> <Footer /></>} />
        <Route path="/contact" element={<><Header /> <Contact /><Footer /> </>} />
        <Route path="/about" element={<><Header /><Aboutus />  <Footer /></>} />
        <Route path="/" element={<><Header /> <Homepage /> </>} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
