import React from 'react'
import './HomeP.css'
import logo222 from '../Assets/home.png'

const HomeP = () => {
  return (
    <section id="home" className="h">
    <div className='home-background'>
        <div className='image-container'>
          <img src={logo222} alt="home" className='home' />
        </div>
        <div className='intro'>
          <span> Notre spécialité réside dans l'installation,</span> 
          <span>l'entretien et la mise aux normes des installations électriques.</span>
          <span> Nous nous engageons à offrir à nos clients le meilleur rapport qualité-prix et à respecter les délais impartis.</span>
          <span> Avec une expertise étendue en électricité générale,</span>
          <span> y compris le courant fort et le courant faible,</span>
          <span> nous garantissons des installations sûres, fiables et conformes aux normes les plus strictes en matière de sécurité.</span>
        </div>
        <div className='outer-container'>
        <div className='text-container'>
          <span>COURANT FORT </span>
          <div className="ampersand"><span> & </span></div>
          <span> COURANT FAIBLE</span>
        </div>
      </div>
    

      </div>
    </section>
  )
}

export default HomeP
