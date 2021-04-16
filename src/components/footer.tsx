import React from 'react';

const Footer = () => {

    return (
        <footer className={'footerContainer'}>
            <div className={'footerContainer__columns'}>
                <div className={'footerContainer__columns__block'}>
                    <h3>Gegevens</h3>
                    <p>KvK nr: 12345678</p>
                    <p>BTW nr: NL12345678</p>
                </div>
                <div className={'footerContainer__columns__block'}>
                    <h3>Contact</h3>
                    <p>info@stk-media.nl</p>
                    <p>+31 6 52 56 76 05</p>
                </div>
                <div className={'footerContainer__columns__block'}>
                    <h3>Socials</h3>
                </div>
            </div>
            <div className={'footerContainer__privacy'}>
                <p>© 2021 STK Media</p>
            </div>
        </footer>
    )
}

export default Footer