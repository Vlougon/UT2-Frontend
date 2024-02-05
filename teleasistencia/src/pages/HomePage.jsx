import React, { useState } from 'react';
import BigShortCut from '../components/BigShortCut';
import ShortCut from '../components/ShortCut';
import '../styles/HomePage.css';

let shortCutsID = 1;

export default function HomePage() {
    const [shortCuts, setShortCuts] = useState([]);

    const handleShortCutInsert = (element) => {
        const target = element.target;

        if (shortCuts.length >= 7 || shortCuts.some(shortCut => shortCut.text === target.alt)) {
            return
        }

        setShortCuts([
            ...shortCuts,
            {
                id: shortCutsID,
                link: target.getAttribute('prefix'),
                text: target.alt,
                source: target.src,
            }
        ])

        shortCutsID++;
    };

    const handleShortCutDelete = (element) => {
        const toDeleteID = parseInt(element.target.parentElement.id);
        setShortCuts(shortCuts.filter(shortcut => shortcut.id !== toDeleteID));
    };

    return (
        <div id='homePage' className="container-fluid">
            <div className='row'>
                <aside className="col-md-3 column">
                    <ul className='row'>
                        {
                            shortCuts.map((shortcut) => {
                                return <ShortCut key={shortcut.id} linkID={shortcut.id} hrefLink={shortcut.link} textLink={shortcut.text} imageSource={shortcut.source} deleteFunction={handleShortCutDelete} />
                            })
                        }
                    </ul>

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
                                    <div className="row modal-body row-cols-3 justify-content-center">
                                        <img src="../images/addAssistantIcon.png" alt="Añadir Trabajador" title='Añadir Trabajador' prefix='/assistantform' onClick={handleShortCutInsert} />
                                        <img src="../images/assistantIcon.png" alt="Asistentes" title='Listado de Asistentes' prefix='/assistantlist' onClick={handleShortCutInsert} />

                                        <img src="../images/addBeneficiaryIcon.png" alt="Añadir Beneficiario" title='Añadir Beneficiario' prefix='/beneficiaryform' onClick={handleShortCutInsert} />
                                        <img src="../images/medicalDataIcon.png" alt="Datos Médicos" title='Datos Médicos' prefix='/medicaldatalist' onClick={handleShortCutInsert} />
                                        <img src="../images/contactsIcon.png" alt="Contactos" title='Contactos' prefix='/contactlist' onClick={handleShortCutInsert} />
                                        <img src="../images/calendarIcon.png" alt="Calendario" title='Calendario' prefix='/calendar' onClick={handleShortCutInsert} />
                                        <img src="../images/unknownCallIcon.png" alt="Llamada Aleatoria" title='Llamada Aleatoria' prefix='/callform' onClick={handleShortCutInsert} />
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
                        <BigShortCut key={1} hrefLink={'/beneficiarylist/incoming'} imageSource={'../images/incomingCallBigIcon.png'} imageAlt={'Llamada Entrante'} />
                        <BigShortCut key={2} hrefLink={'/beneficiarylist/outcoming'} imageSource={'../images/outgoingCallBigIcon.png'} imageAlt={'Llamada Saliente'} />
                        <BigShortCut key={3} hrefLink={'/beneficiarylist'} imageSource={'../images/userDocumentsBigIcon.png'} imageAlt={'Gestión de Beneficiarios'} />
                        <BigShortCut key={4} hrefLink={'/documentgenerator'} imageSource={'../images/pdfDownloadBigIcon.png'} imageAlt={'Generador de Documentos'} />
                    </div>
                </div>
            </div>
        </div>
    );
};
