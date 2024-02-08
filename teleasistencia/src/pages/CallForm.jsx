import TimeDataFieldSet from '../components/TimeDataFieldSet';
import CallDataFieldSet from '../components/CallDataFieldSet';
import EmergencyFieldSet from '../components/EmergencyFieldSet';
import '../styles/CallForm.css';

export default function CallForm() {
    return (
        <div id="callForm" className="container-fluid">
            <form action="#" method="post">

                <TimeDataFieldSet />

                <CallDataFieldSet />

                <EmergencyFieldSet />

                <input type="submit" className="btn btn-danger" value="Finalizar Llamada" />
            </form>
        </div>
    )
}