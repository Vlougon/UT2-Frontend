import { useContext } from "react"; //Permite acceder al contexto de un componente
import { BeneficiaryFormContext } from "../pages/BeneficiaryForm"; //Contexto para compartir datos entre componentes
import 'bootstrap/dist/css/bootstrap.min.css';
import TextInput from "./TextInput"; //Componente para crear un input de texto
import SelectInput from "./SelectInput";// Componente para crear un select
import PCGenerator from "../classes/PCGenerator"; //Proporciona funcionalidades para la generación de códigos postales

//Definimos un formulario para un benefeciary

export default function AddresFieldSet() {
    //Obtiene datos y funciones del texto
    const { beneficiaryAddressData } = useContext(BeneficiaryFormContext);
    const { handleAddressChange } = useContext(BeneficiaryFormContext);

    //Función para generar un código postal
    const pcGenerator = (element) => {
        const selectedProvince = document.querySelector('#province').value;
        if (selectedProvince.match(/^(?=\s*$)/)) {
            // Error Handler goes Here
            return
        }

        const postcalCode = PCGenerator.provincesPostalCodes.find((province) => province.province === selectedProvince).postal_code;

        handleTriggerInput(element.target.previousElementSibling, PCGenerator.generatePC(postcalCode));
    };

    //Función para disparar un evento de cambio en un input
    const handleTriggerInput = (target, enteredValue) => {
        const lastValue = target.value;
        target.value = enteredValue;
        const event = new Event("change", { bubbles: true });
        const tracker = target._valueTracker;
        if (tracker) {
            tracker.setValue(lastValue);
        }
        target.dispatchEvent(event);
    };

    return (//Devolvemos el fragmento <fieldset> con los inputs para el domicilio
        <fieldset>
            <legend>Domicilio</legend>
            <div className='row g-3'>
                <SelectInput
                    // Establece el atributo 'name' e 'id' del elemento <select> como 'province'
                    selectNameID={'province'}

                    // Establece la etiqueta del elemento <select> como 'Provincia'
                    selectLabel={'Provincia'}

                    // Define las opciones del menú desplegable basándose en PCGenerator.provincesPostalCodes
                    selectValues={
                        PCGenerator.provincesPostalCodes.map((province) => {
                            return { value: province.province, text: province.province }
                        })
                    }

                    // Indica que este campo pertenece al formulario de dirección
                    formUsed={'address'}

                    // Define la longitud o anchura del campo en el diseño del formulario (Bootstrap)
                    boxLength={'col-md-6'}

                    // Indica que se necesita un mecanismo de retroalimentación para este campo
                    needFeedBack={true}
                />


                <TextInput nameID={'locality'} sublimText={'Localidad'} formUsed={'address'} boxLength={'col-md-6'} needFeedback={true} />

                <div className='col-md-6'>
                    <label htmlFor="postal_code" className="form-label">Código Postal:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='postal-code'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-123" viewBox="0 0 16 16">
                                <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
                            </svg>
                        </span>
                        <input type="text" name="postal_code" id='postal_code' value={beneficiaryAddressData.postal_code} className='form-control' placeholder='Código Postal' aria-describedby='postal-code' autoComplete="off" onChange={handleAddressChange} />
                        <span className="input-group-text btn btn-orange" onClick={pcGenerator}>Generar C.P.</span>
                    </div>
                </div>

                <TextInput nameID={'street'} sublimText={'Calle'} formUsed={'address'} boxLength={'col-md-3'} needFeedback={true} />

                <TextInput nameID={'number'} sublimText={'Número'} formUsed={'address'} boxLength={'col-md-3'} needFeedback={true} />
            </div>
        </fieldset>
    )
}