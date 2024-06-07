import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const resetHighlight = () => {
        const elements = document.querySelectorAll('.highlight');
        elements.forEach(element => {
            element.outerHTML = element.innerHTML;
        });
    };

    const handleSearch = () => {
        resetHighlight();  // Reset previous highlights
        if (searchTerm) {
            const elements = document.querySelectorAll('body *:not(.search-box):not(.search-box *)');
            elements.forEach(element => {
                if (element.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())) {
                    const regex = new RegExp(`(${searchTerm})`, 'gi');
                    element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
                }
            });
        }
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />

            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                />
                <button onClick={handleSearch}>
                    <FaSearch className='icon' />
                </button>
            </div>

            <ul>
                <li><a href="#home">Page d'Accueil</a></li>
                <li><a href="#domain">Domaine D'Activité</a></li>
                <li
                   onMouseEnter={toggleDropdown1}
                   onMouseLeave={toggleDropdown1}
                >
                    Moyens Humains et Matériels
                    {dropdownOpen1 && (
                        <ul className="dropdown-menu">
                            <li><a href="#orga">Organigrame</a></li>
                            <li><a href="#hum">Moyens Humains et Matériels</a></li>
                        </ul>
                    )}
                </li>
                <li
                   onMouseEnter={toggleDropdown2}
                   onMouseLeave={toggleDropdown2}
                >
                    Nos Références
                    {dropdownOpen2 && (
                    <ul className="dropdown-menu">
                        <li><a href="#parte">Agrément de Partenariat</a></li>
                        <li><a href="#ref">Nos Références</a></li>
                        <li><a href="#secur">Securite</a></li>
                        <li><a href="#galerie">Galerie</a></li>
                    </ul>
                    )}
                </li>
                <li><a href="#contact">Contactez-nous</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
