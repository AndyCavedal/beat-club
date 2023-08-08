import React from 'react';
import '../styles/Footer.scss';
import { Instagram, Facebook } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <div className='footer'>
            <div className='footer-above footer-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <h4>Nosotros</h4>
                        <Link to='/' className='div-links'>
                            Acerca de
                        </Link>
                        <Link to='/eventos' className='div-links'>
                            Eventos
                        </Link>
                        <Link to='/menu' className='div-links'>
                            Menu
                        </Link>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Contacto</h4>
                        <p>Reservas: (261) 341-7030</p>
                        <p>Correo: beatclubmendoza@gmail.com</p>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Redes</h4>
                        <div className='footer-links-redes'>
                            <Instagram className='redes-logo'/>
                            <Facebook  className='redes-logo'/>
                        </div>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Horarios</h4>
                        <p>Abrimos a las 21:30hs</p>
                        <p>Sabados y Domingos</p>
                    </div>
                </div>
                <hr />
                <div className='footer-below'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Estudios Chango.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;