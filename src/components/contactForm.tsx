import React from 'react';

const ContactForm = () => {

    return (
        <div className={'contactFormContainer'}>
            <form action={'contactform.php'} method={'POST'}>
                <input type={'text'} name={'name'} placeholder={'Naam'}/>
                <input type={'email'} name={'email'} placeholder={'Email'}/>
                <input type={'text'} name={'subject'} placeholder={'Onderwerp'}/>
                <input type={'textarea'} name={'message'} placeholder={'Bericht'}/>
                <button type={'submit'} name={'submit'}>send</button>
            </form>
        </div>
    )
}

export default ContactForm;