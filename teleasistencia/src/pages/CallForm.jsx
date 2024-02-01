import '../styles/CallForm.css';

export default function CallForm() {
    return (
        <div id="callForm" className="container-fluid">
            <form action="#" method="post">
                <fieldset>
                    <legend>Datos de Tiempo</legend>
                    <div className="row g-3">
                        <div className='col-md-3'>
                            <label htmlFor="beneficiaryBirthDate" className="form-label">Turno Horario:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='birth-date'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                                    </svg>
                                </span>
                                <input type="text" className='form-control' id='beneficiaryBirthDate' aria-describedby='birth-date' disabled />
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <label htmlFor="beneficiaryBirthDate" className="form-label">Fecha:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='birth-date'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                                    </svg>
                                </span>
                                <input type="date" className='form-control' id='beneficiaryBirthDate' aria-describedby='birth-date' disabled />
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <label htmlFor="beneficiaryBirthDate" className="form-label">Hora:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='birth-date'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    </svg>
                                </span>
                                <input type="time" className='form-control' id='beneficiaryBirthDate' aria-describedby='birth-date' disabled />
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <label htmlFor="beneficiaryBirthDate" className="form-label">Duración:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='birth-date'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    </svg>
                                </span>
                                <input type="text" className='form-control' id='beneficiaryBirthDate' aria-describedby='birth-date' disabled />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Datos de la Llamada</legend>
                    <div className="row g-3">
                        <div className='col-md-4'>
                            <label htmlFor="ansewredCall" className="form-label">¿Respondió la Llamada?</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='ansewred'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z" />
                                    </svg>
                                </span>
                                <select className="form-select" aria-label='ansewredCall' id='ansewredCall' aria-describedby='ansewred'>
                                    <option>Respuesta</option>
                                    <option value="1">Llamada Atendida</option>
                                    <option value="2">Llamada No Atendida</option>
                                </select>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label htmlFor="callType" className="form-label">Tipo de Llamda:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='type'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z" />
                                    </svg>
                                </span>
                                <select className="form-select" aria-label='callType' id='callType' aria-describedby='type'>
                                    <option>Tipo</option>
                                    <option value="1">Rutinaria</option>
                                    <option value="2">Emergencia</option>
                                </select>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <label htmlFor="callKind" className="form-label">Clase de Llamada:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='kind'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </span>
                                <input type="text" className='form-control' id='callKind' aria-describedby='kind' disabled />
                            </div>
                        </div>

                        <div className='col-12'>
                            <label htmlFor="callObservations" className="form-label">Observaciones:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='observations'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </span>
                                <textarea className="form-control" id="callObservations"></textarea>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>112</legend>
                    <div className="row g-3">
                        <div className='col-12'>
                            <label htmlFor="description122" className="form-label">Descripción:</label>
                            <div className='input-group'>
                                <span className='input-group-text' id='description'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </span>
                                <textarea className="form-control" id="description122"></textarea>
                                <input className='btn btn-primary' type="button" value="Enviar al 112" />
                            </div>
                        </div>

                        <div className='col-12 text-center'>
                            <input className='btn btn-primary' type="button" value="Contactar con el 112" />
                        </div>
                    </div>
                </fieldset>

                <input type="submit" className="btn btn-danger" value="Finalizar Llamada" />
            </form>
        </div>
    )
}