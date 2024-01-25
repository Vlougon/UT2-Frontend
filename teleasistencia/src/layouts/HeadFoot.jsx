import { Outlet } from 'react-router-dom';
import '../styles/HeadFoot.css';

export default function HeadFoot() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="../images/logoMajada.png" alt="Logo del Majada Marcial" />
                            Majada's Call Center
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#teachersNavbar" aria-controls="teachersNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="teachersNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>

                            <button id="profileBox" name="Perfil de Usuario">
                                <img src="../images/defaultUserIcon.png" alt="Icono de Perfil del Profesor" className="d-inline-block" />
                                <span id="teachersName"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <Outlet>

            </Outlet>

            <footer>
                <p>
                    Call Center Emulator by &#169; 2024 Acoray & Victor is licensed under
                    <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer"> Attribution-NonCommercial-NoDerivatives 4.0 International
                        <img src="../images/creativecommons.png" alt='Icono de Copyrigth' />
                    </a>
                </p>
            </footer>
        </div>
    );
}