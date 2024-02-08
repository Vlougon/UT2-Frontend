import { useContext } from "react";
import { BeneficiaryFormContext } from "../pages/BeneficiaryForm";

export default function NamesInput({ nameID, sublimText, needFeedback = false }) {
    const { beneficiaryData } = useContext(BeneficiaryFormContext);
    const { handlePersonalDataChange } = useContext(BeneficiaryFormContext);

    const FeedBackRender = () => {
        if (needFeedback) {
            return (
                <div className="invalid-feedback">
                    ¡Introduza un {sublimText} para el Beneficiario!
                </div>
            )
        }
    };

    return (
        <div className='col-md-4'>
            <label htmlFor={nameID} className="form-label">{sublimText}:</label>
            <div className={needFeedback ? 'input-group has-validation' : 'input-group'}>
                <span className='input-group-text' id='beneficiaryName'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                </span>
                <input type="text" id={nameID} name={nameID} value={beneficiaryData[nameID]} className='form-control' placeholder={sublimText} aria-describedby='beneficiaryName' autoComplete="off" onChange={handlePersonalDataChange} />

                <FeedBackRender />
            </div>
        </div >
    )
}