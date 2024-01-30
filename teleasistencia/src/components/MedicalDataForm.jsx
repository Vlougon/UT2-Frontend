import '../styles/MedicalDataForm.css';

export default function MedicalDataForm() {
    return (
        <div id='medicalForm' className='container-fluid'>
            <form action="#" method="post">
                <fieldset>
                    <legend>Alergias y Enfermedades</legend>
                    <div className='row g-3'>
                        <div className='col-12'>
                            <label htmlFor="beneficiaryAllergies" className="form-label">Alergias:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </span>
                                <textarea className="form-control" id="beneficiaryAllergies"></textarea>
                            </div>
                        </div>

                        <div className='col-12'>
                            <label htmlFor="beneficiaryIllnesses" className="form-label">Enfermedades:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </span>
                                <textarea className="form-control" id="beneficiaryIllnesses"></textarea>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Medicinas y Horarios de Llamada</legend>
                    <div className='row g-3'>
                        <div className='col-md-4'>
                            <label htmlFor="morningMedication" className="form-label">Medicación por la Mañana:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-capsule" viewBox="0 0 16 16">
                                        <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
                                    </svg>
                                </span>
                                <textarea className="form-control" id="morningMedication"></textarea>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label htmlFor="noonMedication" className="form-label">Medicación por la Tarde:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-capsule" viewBox="0 0 16 16">
                                        <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
                                    </svg>
                                </span>
                                <textarea className="form-control" id="noonMedication"></textarea>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label htmlFor="nightMedication" className="form-label">Medicación por la Noche:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-capsule" viewBox="0 0 16 16">
                                        <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
                                    </svg>
                                </span>
                                <textarea className="form-control" id="nightMedication"></textarea>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label htmlFor="preferableHourMorning" className="form-label">Hora preferente de llamada (Mañana):</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    </svg>
                                </span>
                                <input type="text" className='form-control' id="preferableHourMorning" />
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label htmlFor="preferableHourNoon" className="form-label">Hora preferente de llamada (Tarde):</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    </svg>
                                </span>
                                <input type="text" className='form-control' id="preferableHourNoon" />
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label htmlFor="preferableHourNight" className="form-label">Hora preferente de llamada (Noche):</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    </svg>
                                </span>
                                <input type="text" className='form-control' id="preferableHourNight" />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Edificios Circundantes</legend>
                    <div className='row g-3'>
                        <div className='col-md-4'>
                            <label className="form-label">Hay Ambulatorio en el Municipio:</label>
                            <div className='input-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="Yes" id="ambulantoryOnTown1" />
                                    <label className="form-check-label" htmlFor="ambulantoryOnTown1">
                                        Si
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="No" id="ambulantoryOnTown2" />
                                    <label className="form-check-label" htmlFor="ambulantoryOnTown2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label className="form-label">Hay Ambulancias en el Municipio:</label>
                            <div className='input-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="Yes" id="ambulancesOnTown1" />
                                    <label className="form-check-label" htmlFor="ambulancesOnTown1">
                                        Si
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="No" id="ambulancesOnTown2" />
                                    <label className="form-check-label" htmlFor="ambulancesOnTown2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label className="form-label">Hay Policía en el Municipio:</label>
                            <div className='input-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="Yes" id="policeOnTown1" />
                                    <label className="form-check-label" htmlFor="policeOnTown1">
                                        Si
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="No" id="policeOnTown2" />
                                    <label className="form-check-label" htmlFor="policeOnTown2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label className="form-label">Hay Bomberos en el Municipio:</label>
                            <div className='input-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="Yes" id="fireFightersOnTown1" />
                                    <label className="form-check-label" htmlFor="fireFightersOnTown1">
                                        Si
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="No" id="fireFightersOnTown2" />
                                    <label className="form-check-label" htmlFor="fireFightersOnTown2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label className="form-label">Hay Urgencias en el Municipio:</label>
                            <div className='input-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="Yes" id="emergencyRoomOnTown1" />
                                    <label className="form-check-label" htmlFor="emergencyRoomOnTown1">
                                        Si
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="No" id="emergencyRoomOnTown2" />
                                    <label className="form-check-label" htmlFor="emergencyRoomOnTown2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}