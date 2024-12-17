import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import Header from './component/header/Header';
import About from './component/about/About';
import Jobs from './component/jobs/Jobs';
import Uploadjb from './component/uploadejobs/Uploadjb';
import Footer from './component/footer/Footer';
import Navbanner from './component/navbar/Navbanner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenot from './component/page-not-found/Pagenot';
import Foot from './component/footer/Foot';
import Register from './component/register/Register';
import Log from '../src/component/register/Log';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbanner />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="upload-jobs" element={<Uploadjb />} />
          <Route path="*" element={<Pagenot />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Log />} />

        </Routes>
        <Foot />
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
