import React from 'react';
import './Hum.css';
import Hum1up from '../Assets/Hum1up.jpg';
import Hum3up from '../Assets/Hum3up.jpg';
import Hum5up from '../Assets/Hum5up.png';

const Hum = () => {
  return (
    <section id="Hum" className='cont'>
    <div className="hum-container">
      <h1 className="tittle">MOYENS HUMAINS ET MATERIELS</h1>
      <div className="hum-item1">
        <span className="number1">1</span>
        <img src={Hum1up} alt="Hum1up" />
        <h2 className="subttitle1">MOYENS HUMAINS</h2>
        <div className="line"></div>
      </div>
      <div className="hum-item2">
        <span className="number2">2</span>
        <h2 className="subttitle2">MOYENS MATERIELS</h2>
        <div className="line2"></div>
      </div>
      <div className="hum-item3">
        <img src={Hum3up} alt="Hum3up" />
        <span className="number3">3</span>
        <h2 className="subttitle3">MATERIELS & OUTILLAGE</h2>
        <div className="line3"></div>
      </div>
     
      <div className="hum-item5">
        <img src={Hum5up} alt="Hum5up" />
      </div>
    </div>
    </section>
  );
};

export default Hum;
