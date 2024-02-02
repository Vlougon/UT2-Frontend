export default function BeneficiaryPersonalDataFieldSet() {
    return (
        <fieldset>
            <legend>Datos Personales</legend>
            <div className='row g-3'>
                <div className='col-md-4'>
                    <label htmlFor="beneficiaryName" className="form-label">Nombre:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='name'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='beneficiaryName' placeholder='Nombre' aria-describedby='name' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <label htmlFor="beneficiaryFirstSurname" className="form-label">Primer Apellido:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='first-surname'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='beneficiaryFirstSurname' placeholder='Primer Apellido' aria-describedby='first-surname' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <label htmlFor="beneficiarySecondSurname" className="form-label">Segundo Apellido:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='second-surname'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='beneficiarySecondSurname' placeholder='Segundo Apellido' aria-describedby='second-surname' />
                    </div>
                </div>

                <div className='col-md-9'>
                    <label htmlFor="beneficiaryDNI" className="form-label">DNI:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='dni'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='beneficiaryDNI' placeholder='DNI' aria-describedby='dni' />
                        <span className="input-group-text btn btn-orange">Generar DNI</span>
                    </div>
                </div>

                <div className='col-md-3'>
                    <label htmlFor="beneficiaryBirthDate" className="form-label">Fecha de Nacimineto:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='birth-date'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg>
                        </span>
                        <input type="date" className='form-control' id='beneficiaryBirthDate' aria-describedby='birth-date' />
                    </div>
                </div>

                <div className='col-md-9'>
                    <label htmlFor="beneficiarySS" className="form-label">Código de la Seguridad Social:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='social-security'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            </svg>
                        </span>
                        <input type="text" className='form-control' id='beneficiarySS' placeholder='Código de la Seguridad Social' aria-describedby='social-security' />
                        <span className="input-group-text btn btn-orange">Generar CSS</span>
                    </div>
                </div>

                <div className='col-md-3'>
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