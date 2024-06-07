import React, { useState } from 'react';
import './domain.css';
import { GiElectricalResistance } from "react-icons/gi";
import { MdCable } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { GiOldMicrophone } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const Domain = () => {

    // État local pour suivre la valeur sélectionnée
    const [selectedValue, setSelectedValue] = useState(null);

    // Fonction pour mettre à jour la valeur sélectionnée
    const handleValueClick = (value) => {
        if (selectedValue ===value) {
            // Si la même valeur est cliquée à nouveau, désélectionnez-la
            setSelectedValue(null);
        } else {
            // Sinon, mettez à jour la valeur sélectionnée
            setSelectedValue(value);
        }
    };

    return (
        <section id="Domain" className='domain-wrap'>
            <h1 className="domain-title">DOMAINE D'ACTIVITE</h1>

            <div className="domain-container">
                <div className="value" onClick={() => handleValueClick("value1")}>
                <GiElectricalResistance className="s-icon" />
                    <h3><span className='uper'>E</span>lectricite</h3>
                    {selectedValue === "value1" && (
                            <p>Electricité MT/BT <br />
                            <br />
                               Câblage électrique <br />
                            <br />
                               Eclairage Public
                            </p>
                    )}
                </div>

                <div className="value" onClick={() => handleValueClick('value2')}>
                <div className="s-icon">
                    <MdCable   />
                    </div>
                    <h3><span className='uper'>C</span>ablage Informatique</h3>
                    {selectedValue === "value2" && (
                            <p>Câblage en fibre optique <br /><br />Réseaux locaux <br /> <br />
                            Salle informatique clé en main<br /> <br />Matériel et fourniture informatique</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick('value3')}>
                    <div className="s-icon">
                    <MdSecurity   />
                    </div>
                    <h3><span className='uper'>S</span>ecurite Electronique</h3>
                    {selectedValue === "value3" && (
                            <p>Télésurveillance <br/><br/>Détection incendie
                            <br/><br/>Anti IntrusionContrôle d'accès</p>
                    )}
                </div>
            </div>
            <div className="domain-container">
                <div className="value" onClick={() => handleValueClick('value4')}>
                    <div className="s-icon">
                    <GiOldMicrophone />
                    </div>
                    <h3><span className='uper'>S</span>onorisation et Teledistribution</h3>
                    {selectedValue === "value4" && (
                            <p>Sonorisation sécurisée<br/><br/>Télédistribution</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick('value5')}>
                    <div className="s-icon">
                    <FaNetworkWired   />
                    </div>
                    <h3><span className='uper'>R</span>eseau et Telecommunication</h3>
                    {selectedValue === "value5" && (
                        <p>GTC <br/><br/>Domotique<br/><br/>Installation et mise en service la Visioconférence 
                        <br/><br/>Installation des centres téléphonique</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick("value6")}>
                    <div className="s-icon">
                    <MdEngineering   />
                    </div>
                    <h3><span className='uper'>G</span>enie Civil</h3>
                    {selectedValue === "value6" && (
                            <p>Tous les travaux de génie civil lies ai Précâblage Informatique, Téléphonique et Electrique</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Domain;
