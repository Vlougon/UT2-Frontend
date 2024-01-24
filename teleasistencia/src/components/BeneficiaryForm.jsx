import '../styles/BeneficiaryForm.css';

export default function BeneficiaryForm() {
    return (
        <div>
            <form action="" method="post">
                <fieldset>
                    <legend>Datos Personales</legend>
                    <div className='row g-3'>
                        <div className='col-md-4'>
                            <div className='input-group'>
                                <span className='input-group-text' id='name'></span>
                                <input type="text" className='form-control' placeholder='Nombre' aria-describedby='name' />
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='input-group'>
                                <span className='input-group-text' id='first-surname'></span>
                                <input type="text" className='form-control' placeholder='Primer Apellido' aria-describedby='first-surname' />
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='input-group'>
                                <span className='input-group-text' id='second-surname'></span>
                                <input type="text" className='form-control' placeholder='Segundo Apellido' aria-describedby='second-surname' />
                            </div>
                        </div>

                        <div className='col-md-9'>
                            <div className='input-group'>
                                <span className='input-group-text' id='dni'></span>
                                <input type="text" className='form-control' placeholder='DNI' aria-describedby='dni' />
                                <span className="input-group-text btn btn-orange">Generar DNI</span>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='input-group'>
                                <span className='input-group-text' id='birth-date'></span>
                                <input type="date" className='form-control' aria-describedby='birth-date' />
                            </div>
                        </div>

                        <div className='col-md-9'>
                            <div className='input-group'>
                                <span className='input-group-text' id='social-security'></span>
                                <input type="text" className='form-control' placeholder='Código de la Seguridad Social' aria-describedby='social-security' />
                                <span className="input-group-text btn btn-orange">Generar CSS</span>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='input-group'>
                                <span className='input-group-text' id='phone-number'></span>
                                <input type="text" className='form-control' placeholder='Número de Teléfono' aria-describedby='phone-number' />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Datos Sociales</legend>
                    <div className='row g-3'>
                        <div className='col-md-4'>
                            <div className='input-group'>
                                <span className='input-group-text' id='gender'></span>
                                <select className="form-select" aria-label='Default select example' aria-describedby='gender'>
                                    <option>Sexo</option>
                                    <option value="1">Macho</option>
                                    <option value="2">Hembra</option>
                                    <option value="3">Si, por favor (T.T)</option>
                                </select>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='input-group'>
                                <span className='input-group-text' id='civil-status'></span>
                                <select className="form-select" aria-label='Default select example' aria-describedby='civil-status'>
                                    <option>Estado Civil</option>
                                    <option value="1">Soltero</option>
                                    <option value="2">Casado</option>
                                    <option value="3">Viudo</option>
                                </select>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='input-group'>
                                <span className='input-group-text' id='beneficiary-type'></span>
                                <select className="form-select" aria-label='Default select example' aria-describedby='beneficiary-type'>
                                    <option>Tipo de Benefeciario</option>
                                    <option value="1">Mayor 65</option>
                                    <option value="2">Entre 65 y 45</option>
                                    <option value="3">Entre 45 y 30</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Domicilio</legend>
                    <div className='row g-3'>
                        <div className='col-md-6'>
                            <div className='input-group'>
                                <span className='input-group-text' id='province'></span>
                                <select className="form-select" aria-label='Default select example' aria-describedby='province'>
                                    <option>Provincia</option>
                                    <option value="1">Santa Cruz</option>
                                    <option value="2">Las Palmas</option>
                                    <option value="3">Iberia</option>
                                </select>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='input-group'>
                                <span className='input-group-text' id='locality'></span>
                                <input type="text" className='form-control' placeholder='Localidad' aria-describedby='locality' />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='input-group'>
                                <span className='input-group-text' id='postal-code'></span>
                                <input type="text" className='form-control' placeholder='Código Postal' aria-describedby='postal-code' />
                                <span className="input-group-text btn btn-orange">Generar C.P.</span>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='input-group'>
                                <span className='input-group-text' id='street'></span>
                                <input type="text" className='form-control' placeholder='Calle' aria-describedby='street' />
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='input-group'>
                                <span className='input-group-text' id='number'></span>
                                <input type="text" className='form-control' placeholder='Número' aria-describedby='number' />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}