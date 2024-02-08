import { createContext, useState } from 'react';
import BeneficiaryPersonalDataFieldSet from '../components/BeneficiaryPersonalDataFieldSet';
import SocialDataFieldSet from '../components/SocialDataFieldSet';
import AddresFieldSet from '../components/AddresFieldSet';
import DNIGenerator from '../classes/DNIGenerator';
import PCGenerator from '../classes/PCGenerator';
import '../styles/BeneficiaryForm.css';

export const BeneficiaryFormContext = createContext();

export default function BeneficiaryForm() {
    const [beneficiaryData, setBeneficiaryData] = useState({
        name: undefined,
        first_surname: undefined,
        second_surname: '',
        dni: undefined,
        birth_date: '----/--/--',
        social_security_number: undefined,
        rutine: '',
        gender: undefined,
        marital_status: undefined,
        beneficiary_type: undefined,
    });
    const [beneficiaryAddressData, setBeneficiaryAddressData] = useState({
        locality: undefined,
        postal_code: undefined,
        province: undefined,
        number: undefined,
        street: undefined,
    });
    const [beneficiaryPhones, setBeneficiaryPhones] = useState({
        user_id: '',
        phone_number: undefined,
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

        for (const key in beneficiaryData) {
            if ((beneficiaryData[key] && key === 'dni' && !DNIGenerator.verifyDNI(beneficiaryData[key])) ||
                (beneficiaryData[key] && key === 'birth_date' && beneficiaryData[key] >= (new Date().getFullYear() - 5) + '/' + (new Date().getDay()).toString().padStart(2, '0') + '/' + (new Date().getMonth()).toString().padStart(2, '0')) ||
                beneficiaryData[key] === undefined || beneficiaryData[key] === '----/--/--') {
                handleFormFieldsValues(document.querySelector('#' + key));
            }
        }

        for (const key in beneficiaryAddressData) {
            if ((beneficiaryAddressData[key] && key === 'postal_code' && !beneficiaryAddressData[key].match(/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/)) ||
                (beneficiaryAddressData[key] && key === 'postal_code' && beneficiaryAddressData.province && !PCGenerator.validPC(beneficiaryAddressData[key], beneficiaryAddressData.province)) ||
                beneficiaryAddressData[key] === undefined) {
                handleFormFieldsValues(document.querySelector('#' + key));
            }
        }

        for (const key in beneficiaryPhones) {
            if ((beneficiaryPhones[key] && beneficiaryPhones[key].length !== 9 && key === 'phone_number') ||
                beneficiaryPhones[key] === undefined) {
                handleFormFieldsValues(document.querySelector('#' + key));
            }
        }
    };

    const handleFormFieldsValues = (target) => {
        target.className += ' is-invalid';
        target.previousElementSibling.className += ' is-invalid';

        if (target.id === 'dni' || target.id === 'social_security_number' || target.id === 'postal_code') {
            target.nextElementSibling.className += ' is-invalid';
            target.nextElementSibling.nextElementSibling.className += ' d-block';
            return
        }

        target.nextElementSibling.className += ' d-block';
    };

    return (
        <div id='beneficiaryForm' className='container-fluid'>
            <form action="#" method="post" onSubmit={handleSubmit}>
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
                <input type="submit" className='btn btn-primary' value="Dar de Alta" />
            </form>
        </div>
    );
}