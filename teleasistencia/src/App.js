// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import BeneficiaryForm from './components/BeneficiaryForm';
import MedicalDataForm from "./components/MedicalDataForm";
import ContactForm from "./components/ContactForm";
import HeadFoot from './layouts/HeadFoot';
import HomePage from './components/HomePage';
import BeneficiaryList from "./components/BeneficiaryList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HeadFoot />} path='/'>
          <Route element={<HomePage />} path='/'></Route>
          <Route element={<BeneficiaryForm />} path='/beneficiaryform'></Route>
          <Route element={<MedicalDataForm />} path='/medicaldataform/:id'></Route>
          <Route element={<ContactForm />} path='/contactform/:id'></Route>
          <Route element={<BeneficiaryList />} path='/beneficiarylist'></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
