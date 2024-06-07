import React  from 'react';
import './Orga.css';
import ORGA from '../Assets/ORGA.png';


const Orga = () => {

  return (
    <section id="orga">
      <div className='image' data-aos="fade-left">
        <img src={ORGA} alt="ORGA" />
      </div>
    </section>
  );
}

export default Orga;
