import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Refer.css';

const Refer = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/references/all?category=industrie');
        setReferences(res.data);
      } catch (error) {
        console.error('Error fetching references:', error);
      }
    };
    fetchReferences();
  }, []);

  return (
    <section className="REF-warmp">
      <div className='Serv-title'>
        <h1><span className="data">NOS </span><span className="reseaux"> RÉFÉRENCES</span></h1>
      </div>
      <div className="REF-Container">
        
        <div className="references-container">
          {references.map((ref) => (
            <div className="reference" key={ref.id}>
              <img src={`http://localhost:5000/${ref.logo_path}`} alt="Reference Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Refer;