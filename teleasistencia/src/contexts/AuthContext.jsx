import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [medicalFormValues, setMedicalFormValues] = useState({
        beneficiary_id: 0,
        allergies: '',
        illnesses: '',
        morning_medication: '',
        afternoon_medication: '',
        night_medication: '',
        preferent_morning_calls_hour: '--:--',
        preferent_afternoon_calls_hour: '--:--',
        preferent_night_calls_hour: '--:--',
        emergency_room_on_town: null,
        firehouse_on_town: null,
        police_station_on_town: null,
        outpatient_clinic_on_town: null,
        ambulance_on_town: null,
    });
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

    const [addressData, setAddressData] = useState({
        locality: undefined,
        postal_code: undefined,
        province: undefined,
        number: undefined,
        street: undefined,
        addressable_type: '',
        addressable_id: 0
    });

    const [phones, setPhones] = useState({
        phone_number: undefined,
    });

    const [contactData, setContactData] = useState({
        name: '',
        first_surname: '',
        second_surname: '',
        contact_type: '',
    });

    const handlePersonalDataChange = (element) => {
        setBeneficiaryData({
            ...beneficiaryData,
            [element.target.name]: element.target.value,
        });
    };

    const handleAddressChange = (element) => {
        setAddressData({
            ...addressData,
            [element.target.name]: element.target.value,
        });
    };

    const handlePhonesChange = (element) => {
        setPhones({
            ...phones,
            [element.target.name]: element.target.value,
        });
    };

    return (
        <AuthContext.Provider
            value={{
                medicalFormValues, setMedicalFormValues,
                beneficiaryData, setBeneficiaryData,
                addressData, setAddressData,
                phones, setPhones,
                contactData, setContactData,
                handlePersonalDataChange, handleAddressChange, handlePhonesChange
            }}>
            {children}
        </AuthContext.Provider>
    )
}