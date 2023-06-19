import React from "react";
import '../styles/global.css';
import '../styles/componentCss/navbar.css';
import logoWK from '../styles/img/logo-wk.png';
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
    
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoWK} className="logo-wikrama" alt="SMK Wikrama Bogor Logo" />
        <p>SMK WIKRAMA BOGOR</p>
      </div>
      <div className="nav-links">
        <Link to="beranda" spy={true} smooth={true} offset={-100} duration={700} className="nav-item">Beranda</Link>
        <Link to="caraWakaf" spy={true} smooth={true} offset={-100} duration={700} className="nav-item">Cara Wakaf</Link>
        <Link to="dataWakaf" spy={true} smooth={true} offset={-100} duration={700} className="nav-item">Data Wakaf</Link>
        <Link to="gallery" spy={true} smooth={true} offset={-100} duration={700} className="nav-item">Gallery</Link>
        <a href="https://smkwikrama.sch.id/" className="nav-item" target="_blank" rel="noreferrer">Web Wikrama</a>
      </div>
    </div>
  );
};

export default Navbar;
