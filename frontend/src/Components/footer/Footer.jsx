import React from 'react';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Footer.css';
import logo222 from '../Assets/logo222.png'; 

const Footer = () => {
    return (
        <footer id="Contact" className="footer">
            <div className="logo-container"> {/* Div pour le logo */}
                <img className="logo222" src={logo222} alt="logo222" />
            </div>
            <div className="contact-map-container">
                <div className="contact-info">
                    <h3><span className="data">Contact</span> Information</h3>
                    <ul>
                        <li><MdEmail /> <span className="data"> Email : </span> Contact@3elec.ma</li>
                        <li><FaPhone /> <span className="data">  Phone : </span>  (+212) 522 447 267 / 522 474 268</li>
                        <li><FaLocationDot /> <span className="data"> Address : </span> 12, Route des Ouled Ziane, Casablanca</li>
                    </ul>
                </div>
                <div className="map">
                    {/* Intégrer votre carte ici, par exemple avec Google Maps */}
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106355.9826649667!2d-7.746419856640588!3d33.58909860000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd6641534435%3A0x5ddb77d28d70dbae!2s3elec%20Maroc!5e0!3m2!1sfr!2sma!4v1715939520120!5m2!1sfr!2sma" 
                        width="150%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            <div className="copyright"> {/* Div pour les droits d'auteur */}
                <p>&copy; 2024 <span className="data"> 3-Elec </span>. Tous droits réservés.</p>
            </div>
            </div>

        </footer>
    );
};

export default Footer;
