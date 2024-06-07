import React from 'react';
import './Galerie.css';
import log1 from '../Assets/log1.jpg';
import log2 from '../Assets/log2.jpg';
import log3 from '../Assets/log3.jpg';
import log4 from '../Assets/log4.jpg';
import log5 from '../Assets/log5.jpg';
import log6 from '../Assets/log6.jpg';
import log7 from '../Assets/log7.png';
import log8 from '../Assets/log8.png';
import log9 from '../Assets/log9.png';
import log10 from '../Assets/log10.jpg';

const Galerie = () => {
  return (
    <section id="galerie" className='gal'>
    <div className="galerie-container">
    <div className="titllee">
          <h1>GALERIE</h1>
        </div>
      <div className="galerie">
        <img src={log1} alt="log1" />
        <img src={log2} alt="log2" />
        <img src={log3} alt="log3" />
        <img src={log4} alt="log4" />
        <img src={log5} alt="log5" />
        <img src={log6} alt="log6" />
        <img src={log7} alt="log7" />
        <img src={log8} alt="log8" />
        <img src={log9} alt="log9" />
        <img src={log10} alt="log10" />
      </div>
    </div>
    </section>
  );
};

export default Galerie;
