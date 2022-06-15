import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
      </>
  );
}

export default App;
