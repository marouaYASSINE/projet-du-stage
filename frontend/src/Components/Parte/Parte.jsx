import './Parte.css'
import abb1upb from '../Assets/abb1upb.png'
import eatonupb from '../Assets/eatonupb.png'
import legrandupb from '../Assets/legrandupb.png'
import logoshneiupb from '../Assets/logoshneiupb.png'
import epsup1 from '../Assets/epsup1.png'
import logo222 from '../Assets/logo222.png'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import the AOS CSS file
const Parte = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="parte" className='parte'>
    <div className='introd'>
      <div className="titlet">
        <h1>AGRÉMENT DE PARTENARIAT</h1>
      </div>
      <div className="top">
        <img className='im1' src={epsup1} alt="epsup1"/>
        <img className='im2' src={logo222} alt="logo222"/>
      </div>
      <div className="textE">
          <span>Dans le cadre de préserver la pérennité des relations privilégiés entre <span className='company1'>ELECTRICAL PANEL SOLUTIONS</span> et <span className='company1'>3-Elec </span></span> 
          <span> EPS autant qu'un tableautier Certifier selon Norme IEC 61439 et sous licenceLa société.</span>
      </div>
      <div className="partenariat">
        <img className='im3' src={abb1upb} alt="abb1upb" width={'50px'}/>
        <img className='im4' src={legrandupb} alt="legrandupb" />
        <img className='im5' src={eatonupb} alt="eatonupb" />
        <img className='im6' src={logoshneiupb} alt="logoshneiupb" />
      </div>
      <div className="textE2">
        <span>Il a été décidé de collaborer activement et conjointement pour clarifier et reconnaître la qualité du travail qu'accompli la société "3ELEC "</span>
        <span>sur son territoire et renforcer les actions de ce dernier.</span>
        <span>EPS autorise "3ELEC " à communiquer sur son nom.</span>
        <span>Cet Agrément est valide un an à compter de sa signature et sera renouvelée annuellement par tacite reconduction.</span>
      </div>
    </div>
    </section>
  )
}

export default Parte
