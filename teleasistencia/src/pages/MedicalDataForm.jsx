// import { useParams, Link } from 'react-router-dom';
import AllergiesIllnessesFieldSet from '../components/Allergies&IllnessesFieldSet';
import MedicinesFieldSet from '../components/MedicinesFieldSet';
import LocalStrucutresFieldSet from '../components/LocalStructures';
import '../styles/MedicalDataForm.css';

export default function MedicalDataForm() {
    return (
        <div id='medicalForm' className='container-fluid'>
            <form action="#" method="post">

                <AllergiesIllnessesFieldSet />

                <MedicinesFieldSet />

                <LocalStrucutresFieldSet />

                <input type="submit" value="Asignar Datos Médicos" />
            </form>
        </div>
    )
}