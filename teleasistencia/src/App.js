// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import BeneficiaryForm from './pages/BeneficiaryForm';
import MedicalDataForm from "./pages/MedicalDataForm";
import ContactForm from "./pages/ContactForm";
import HeadFoot from './layouts/HeadFoot';
import HomePage from './pages/HomePage';
import AssistantForm from "./pages/AssistantForm";
import CallForm from "./pages/CallForm";
import BeneficiaryList from "./pages/BeneficiaryList";
import MedicalDataList from "./pages/MedicalDataList";
import ContactList from "./pages/ContactList";
import AssistantList from "./pages/AssistantList";
import Calendar from "./pages/Calendar";
import DocumentGenerator from "./pages/DocumentGenerator";
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HeadFoot />} path='/'>
          <Route element={<HomePage />} path='/'></Route>
          <Route element={<BeneficiaryForm />} path='/beneficiaryform/:id?'></Route>
          <Route element={<AssistantForm />} path='/assistantform/:id?'></Route>
          <Route element={<CallForm />} path='/callform'></Route>
          <Route element={<MedicalDataForm />} path='/medicaldataform/:userid/:id?'></Route>
          <Route element={<ContactForm />} path='/contactform/:userid/:id?'></Route>
          <Route element={<BeneficiaryList />} path='/beneficiarylist/:kind?'></Route>
          <Route element={<MedicalDataList />} path='/medicaldatalist'></Route>
          <Route element={<AssistantList />} path='/assistantlist'></Route>
          <Route element={<ContactList />} path='/contactlist/:id?'></Route>
          <Route element={<Calendar />} path='/calendar'></Route>
          <Route element={<DocumentGenerator />} path='/documentgenerator'></Route>
          <Route element={<NotFound />} path='*'></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
