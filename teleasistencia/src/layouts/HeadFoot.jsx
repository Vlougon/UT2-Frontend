import { Outlet } from 'react-router-dom';
import '../styles/HeadFoot.css';

export default function HeadFoot() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="../images/logoMajada.png">
                            <img src="../images/logoMajada.png" alt="Logo del Majada Marcial" />
                            Majada's Call Center
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#userNavbar" aria-controls="userNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="userNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>

                            <button id="profileBox" name="Perfil de Usuario">
                                <img src="../images/defaultUserIcon.png" alt="Icono de Perfil de Usuario" className="d-inline-block" />
                                <span id="usersName"></span>
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
                        <img src="../images/creativecommons.png" alt='Licensias de Creative Common' />
                    </a>
                    <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel='noreferrer'>
                        <img src="../images/wcag2.2AA.png" alt='Licensia de Accesibilidad Web' />
                    </a>
                </p>

                <p>
                    Iconos proporcionados por <a href="https://fontawesome.com/" target='_blank' rel='noreferrer'>Font Awesome</a> y <a href="https://icons.getbootstrap.com/" target='_blank' rel='noreferrer'>Bootstrap Icons</a>.
                </p>
            </footer>
        </div>
    );
}