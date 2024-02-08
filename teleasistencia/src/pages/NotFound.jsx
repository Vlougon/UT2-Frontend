import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

export default function NotFound() {
    return (
        <div id="notFound" className="container-fluid">
            <Link className='btn btn-primary' to="/">Volver al Inicio</Link>
        </div>
    )
}