import { createContext, useState } from 'react';
import BeneficiaryPersonalDataFieldSet from '../components/BeneficiaryPersonalDataFieldSet';
import SocialDataFieldSet from '../components/SocialDataFieldSet';
import AddresFieldSet from '../components/AddresFieldSet';
import '../styles/BeneficiaryForm.css';

export const BeneficiaryFormContext = createContext();

export default function BeneficiaryForm() {
    //States
    const [beneficiaryData, setBeneficiaryData] = useState({
        name: '',
        first_surname: '',
        second_surname: '',
        dni: '',
        birth_date: '',
        social_security_number: '',
        rutine: '',
        gender: '',
        marital_status: '',
        beneficiary_type: '',
    });
    const [beneficiaryAddressData, setBeneficiaryAddressData] = useState({
        locality: '',
        postal_code: '',
        province: '',
        number: '',
        street: '',
    });
    const [beneficiaryPhones, setBeneficiaryPhones] = useState({
        user_id: '',
        phone_number: '',
    });

    const handlePersonalDataChange = (element) => {
        setBeneficiaryData({
            ...beneficiaryData,
            [element.target.name]: element.target.value,
        });
    };

    const handleAddressChange = (element) => {
        setBeneficiaryAddressData({
            ...beneficiaryAddressData,
            [element.target.name]: element.target.value,
        });
    };


    const handlePhonesChange = (element) => {
        setBeneficiaryPhones({
            ...beneficiaryPhones,
            [element.target.name]: element.target.value,
        });
    };


    const handleSubmit = (element) => {
        element.preventDefault();

        console.log(beneficiaryData, beneficiaryAddressData, beneficiaryPhones);
    };

    return (
        <div id='beneficiaryForm' className='container-fluid'>
            <form action="#" method="post" onSubmit={handleSubmit}>
                {/* Esta la función de contexto a la cual le podemos meter un value, el cual será accesible para 
                cualquiera que lo importe.*/}
                <BeneficiaryFormContext.Provider
                    value={
                        {
                            beneficiaryData, setBeneficiaryData,
                            beneficiaryAddressData, setBeneficiaryAddressData,
                            beneficiaryPhones, setBeneficiaryPhones,
                            handlePersonalDataChange,
                            handleAddressChange,
                            handlePhonesChange
                        }
                    }
                >
                    <BeneficiaryPersonalDataFieldSet />

                    <SocialDataFieldSet />

                    <AddresFieldSet />
                </BeneficiaryFormContext.Provider>
                <input type="submit" value="Dar de Alta" />
            </form>
        </div>
    );
}