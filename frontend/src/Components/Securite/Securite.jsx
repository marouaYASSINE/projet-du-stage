import React from "react";
import './Securite.css';
import safe from '../Assets/safe.jpg'
import qua from '../Assets/qua.jpg'
const Securite = () => {
    return (
        <section id="secur" className="BEtude-warmp">
            <div className="BEtude-Container">
                <div className="BEtude3">
                    <div className='BEtude-title'>
                        <h1>SÉCURITÉ & <span className="data"> QUALITÉ</span></h1>
                    </div>
                    <div className="BEtude-text">
                        <h4>DOCUMENTS DE RÉFERENCES</h4>
                    </div>
                    <div className="Trans-desc">
                        <ul className='ulll'>
                                <li className='lii'>> PAQ : Adapté à chaque projet</li>
                                <li className='lii'>> PHS : Adapté à chaque projet</li>
                                <li className='lii'>> Fiches métier</li>
                                <li className='lii'>> Method statement test</li>
                                <li className='lii'>> Fiche d’auto contrôle</li>
                        </ul>
                    </div>
                    <div className="BEtude-text">
                        <h4>MATÉRIEL DE QUALITÉ</h4>
                    </div>
                    <div className="Trans-desc">
                        <ul className='ulll'>
                                <li className='lii'>> Valise caméra infrarouge thermique</li>
                                <li className='lii'>> Analyseur de tension</li>
                                <li className='lii'>> Valise d’essai des protections différentielles</li>
                                <li className='lii'>> Multi-test</li>
                                <li className='lii'>> Banc d’essai tableau électrique</li>
                                <li className='lii'>> Multi-métres</li>
                                <li className='lii'>> Valise de certification</li>
                        </ul>
                    </div>
                </div>
                <div className="BEtudeImg3">
                    <img src={qua} alt="qua" />
                </div>
                <div className="safety">
                    <img src={safe} alt="safe"/>
                </div>
            </div>
        </section>
        )
    }
    export default Securite