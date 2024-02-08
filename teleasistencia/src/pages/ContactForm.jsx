// import { useParams, Link } from 'react-router-dom';
import ContactPersonalDataFieldSet from "../components/ContactPersonalDataFieldSet";
import AddresFieldSet from "../components/AddresFieldSet";
import '../styles/ContactForm.css';

export default function ContactForm() {
    return (
        <div id="contactForm" className="container-fluid">
            <form action="#" method="post">

                <ContactPersonalDataFieldSet />

                <AddresFieldSet />

                <input type="submit" value="Asignar Contacto" />
            </form>
        </div>
    )
}