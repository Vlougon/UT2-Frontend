// import { useParams, Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ContactPersonalDataFieldSet from "../components/ContactPersonalDataFieldSet";
import AddresFieldSet from "../components/AddresFieldSet";
import '../styles/ContactForm.css';

export default function ContactForm() {
    const { contactData } = useContext(AuthContext);
    const { addressData } = useContext(AuthContext);

    const handleSubmit = (element) => {
        element.preventDefault();

        console.log(contactData, addressData);
    };

    return (
        <div id="contactForm" className="container-fluid">
            <form action="#" method="post" onSubmit={handleSubmit}>

                <ContactPersonalDataFieldSet />

                <AddresFieldSet />

                <input type="submit" className="btn btn-primary" value="Asignar Contacto" />
            </form>
        </div>
    )
}