import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
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
                                <button>
                                    -
                                </button>
                            </div>
                        ))}
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
