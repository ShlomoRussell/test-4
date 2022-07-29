import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountInfo from "./components/AccountInfo";
import Home from "./components/Home";
import Transcations from "./components/Transcations";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>} >
        <Route path="/" element={<AccountInfo />} /> 
        <Route path="/transactions" element={<Transcations />} />
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
