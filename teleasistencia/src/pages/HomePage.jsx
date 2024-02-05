import React, { useState } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    const [shortCuts, setShortCuts] = useState([]);

    const handleShortCutInsert = () => {

    };

    const handleShortCutDelete = (element) => {
        element.target.parentElement.remove();
    };

    return (
        <div id='homePage' className="container-fluid">
            <div className='row'>
                <aside className="col-md-3 column">
                    <div className='row'>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="d-flex justify-content-evenly columrow">
                                <a href="/">
                                    <img
                                        src="../images/heart.png"
                                        alt={`Imagen del botón ${i}`}
                                        className="img-fluid"
                                        width={40}
                                        height={40}
                                    />
                                    <p>
                                        Botón {i}
                                    </p>
                                </a>
                                <button onClick={handleShortCutDelete}>
                                    -
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='row justify-content-center align-items-end addSection'>
                        <button id='addButton' type="button" data-bs-toggle="modal" data-bs-target="#shortCutModal">
                            +
                        </button>

                        <div className="modal fade" id="shortCutModal" tabIndex="-1" aria-labelledby="shortCutModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="shortCutModalLabel">Atajos ({shortCuts.length}/7)</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="col-md-9 main">
                    <div className='row gap-4 justify-content-center align-items-center'>
                        {[9, 10, 11, 12].map((i) => (
                            <button key={i} className="col-8 col-sm-5 mainButton">
                                <a href="tu-enlace-aqui" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="../images/phone.png"
                                        alt={`Imagen del botón ${i}`}
                                        className="img-fluid"
                                        width={300}
                                        height={300}
                                    />
                                </a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
