export default function MedicinesFieldSet() {
    return (
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
    )
}