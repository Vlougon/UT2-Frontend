export default function LocalStrucutresFieldSet() {
    return (
        <fieldset>
            <legend>Edificios Circundantes</legend>
            <div className='row g-3'>
                <div className='col-md-4'>
                    <label className="form-label">Hay Ambulatorio en el Municipio:</label>
                    <div className='input-group'>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='ambulantoryOnTown' value="Yes" id="ambulantoryOnTown1" />
                            <label className="form-check-label" htmlFor="ambulantoryOnTown1">
                                Si
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='ambulantoryOnTown' value="No" id="ambulantoryOnTown2" />
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
                            <input className="form-check-input" type="radio" name='ambulancesOnTown' value="Yes" id="ambulancesOnTown1" />
                            <label className="form-check-label" htmlFor="ambulancesOnTown1">
                                Si
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='ambulancesOnTown' value="No" id="ambulancesOnTown2" />
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
                            <input className="form-check-input" type="radio" name='policeOnTown' value="Yes" id="policeOnTown1" />
                            <label className="form-check-label" htmlFor="policeOnTown1">
                                Si
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='policeOnTown' value="No" id="policeOnTown2" />
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
                            <input className="form-check-input" type="radio" name='fireFightersOnTown' value="Yes" id="fireFightersOnTown1" />
                            <label className="form-check-label" htmlFor="fireFightersOnTown1">
                                Si
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='fireFightersOnTown' value="No" id="fireFightersOnTown2" />
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
                            <input className="form-check-input" type="radio" name='emergencyRoomOnTown' value="Yes" id="emergencyRoomOnTown1" />
                            <label className="form-check-label" htmlFor="emergencyRoomOnTown1">
                                Si
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name='emergencyRoomOnTown' value="No" id="emergencyRoomOnTown2" />
                            <label className="form-check-label" htmlFor="emergencyRoomOnTown2">
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    )
}