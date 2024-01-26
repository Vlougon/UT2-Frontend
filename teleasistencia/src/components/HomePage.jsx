import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="contenedor">
            {/* Primera columna con 8 botones */}
            <div className="columna">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <button key={i} className="boton">
                        <a href="tu-enlace-aqui" target="_blank" rel="noopener noreferrer">
                            <img
                                src="../images/heart.png"
                                alt={`Imagen del botón ${i}`}
                                className="imagen-boton"
                            />
                            Botón {i}
                        </a>
                    </button>

                ))}
            </div>

            {/* Segunda columna con 4 botones más grandes */}
            <div className="columna grande">
                {[9, 10, 11, 12].map((i) => (
                    <button key={i} className="boton grande">
                        <a href="tu-enlace-aqui" target="_blank" rel="noopener noreferrer">
                            <img
                                src="../images/phone.png"
                                alt={`Imagen del botón ${i}`}
                                className="imagen-boton"
                            />
                            Botón Grande {i}
                        </a>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
