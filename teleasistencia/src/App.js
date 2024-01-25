// import logo from './logo.svg';
import BeneficiaryForm from './components/BeneficiaryForm';
import HeadFoot from './layouts/HeadFoot';
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HeadFoot />} path='/'>
          <Route element={<BeneficiaryForm />} path='/'></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
