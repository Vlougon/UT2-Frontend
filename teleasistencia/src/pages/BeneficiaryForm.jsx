import BeneficiaryPersonalDataFieldSet from '../components/BeneficiaryPersonalDataFieldSet';
import SocialDataFieldSet from '../components/SocialDataFieldSet';
import AddresFieldSet from '../components/AddresFieldSet';
import '../styles/BeneficiaryForm.css';

export default function BeneficiaryForm() {

    const dniGenerator = () => {

    };

    const ssGenerator = () => {

    };

    const cpGenerator = () => {

    };

    console.log(dniGenerator, ssGenerator, cpGenerator);

    return (
        <div id='beneficiaryForm' className='container-fluid'>
            <form action="#" method="post">

                <BeneficiaryPersonalDataFieldSet />

                <SocialDataFieldSet />

                <AddresFieldSet />

                <input type="submit" value="Dar de Alta" />
            </form>
        </div>
    );
}