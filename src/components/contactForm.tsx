import React from 'react';
// import axios from "axios"

const ContactForm = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');
    //
    // const handleSubmit = (e: any) => {
    //     setName(e.target.name.value);
    //     setEmail(e.target.email.value);
    //     setSubject(e.target.subject.value);
    //     setMessage(e.target.message.value);
    //     const data = {
    //         name: name,
    //         email: email,
    //         subject: subject,
    //         message: message,
    //     }
    //
    //     axios.post('contactform.php', {data})
    //         .then(response => alert(response))
    //         .catch(error => console.log(error));
    // }

    return (
        <div className={'contactFormContainer'}>
            <div className={'contactFormContainer__text'}>
                <p>Heb je iets gezien dat je beviel, wil je samen met mij ergens over sparren of heb je gewoon zin in een kopje koffie? Neem dan gerust via het contactformulier hiernaast contact met me op!</p>
            </div>
            <form action={'contactform.php'} method={'POST'}>
            {/*<form onSubmit={handleSubmit}>*/}
            <fieldset>
                    <input type={'text'} name={'name'} placeholder={'Naam'}/>
                    <input type={'email'} name={'email'} placeholder={'Email'}/>
                    <input type={'text'} name={'subject'} placeholder={'Onderwerp'}/>
                    <textarea name={'message'} placeholder={'Bericht'}/>
                    <button type={'submit'} name={'submit'}>Verzenden</button>
                </fieldset>
            </form>
        </div>
    )
}

export default ContactForm;