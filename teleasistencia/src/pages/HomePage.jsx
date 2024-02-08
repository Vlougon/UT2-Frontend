import React, { useEffect, useState } from 'react';
import BigShortCut from '../components/BigShortCut';
import ShortCut from '../components/ShortCut';
import ShortCutModal from '../components/ShortCutModal';
import '../styles/HomePage.css';

export default function HomePage() {
    const [shortCuts, setShortCuts] = useState(() => {
        const storedShortCuts = localStorage.getItem('shortCuts');
        return storedShortCuts ? JSON.parse(storedShortCuts) : [];
    });
    let [shortCutsID, setShortCutsID] = useState(shortCuts.length > 0 ? Math.max(...shortCuts.map(shortcut => shortcut.id)) + 1 : 1);

    useEffect(() => {
        localStorage.setItem('shortCuts', JSON.stringify(shortCuts));
    }, [shortCuts]);

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

        setShortCutsID(shortCutsID + 1);
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
                    </div>

                    <ShortCutModal currentShortCuts={shortCuts.length} addHandler={handleShortCutInsert} />
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
