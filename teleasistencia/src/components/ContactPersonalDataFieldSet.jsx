import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import PhoneNumberInput from "./PhoneNumberInput";

export default function ContactPersonalDataFieldSet() {
    const { contactData, setContactData } = useContext(AuthContext);

    const handleChange = (element) => {
        setContactData({
            ...contactData,
            [element.target.name]: element.target.value,
        });
    };

    return (
        <fieldset>
            <legend>Datos Personales</legend>
            <div className="row g-3">
                <div className='col-md-4'>
                    <label htmlFor="contactName" className="form-label">Nombre:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='name'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='contactName' placeholder='Nombre' aria-describedby='name' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <label htmlFor="contactFirstSurname" className="form-label">Primer Apellido:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='first-surname'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='contactFirstSurname' placeholder='Primer Apellido' aria-describedby='first-surname' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <label htmlFor="contactSecondSurname" className="form-label">Segundo Apellido:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='second-surname'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='contactSecondSurname' placeholder='Segundo Apellido' aria-describedby='second-surname' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <label htmlFor="contacType" className="form-label">Tipo de Contacto:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='type'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z" />
                            </svg>
                        </span>
                        <select className="form-select" aria-label='contacType' id='contacType' aria-describedby='type'>
                            <option>Tipo de Contacto</option>
                            <option value="1">Familiar</option>
                            <option value="2">Prometido/a</option>
                            <option value="3">Esposo/a</option>
                        </select>
                    </div>
                </div>

                <div className='col-md-4'>
                    <label htmlFor="beneficiaryPhoneNumber" className="form-label">Número de Teléfono:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='phone-number'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-123" viewBox="0 0 16 16">
                                <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='beneficiaryPhoneNumber' placeholder='Número de Teléfono' aria-describedby='phone-number' />
                    </div>
                </div>
            </div>
        </fieldset>
    )
}