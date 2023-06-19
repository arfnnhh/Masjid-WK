import React from "react";
import '../styles/global.css';
import '../styles/componentCss/footer.css';
import logoWK from '../styles/img/logo-wk.png';
import FbIcon from '../styles/img/footer-img/facebook.png';
import TwIcon from '../styles/img/footer-img/twitter.png';
import YtIcon from '../styles/img/footer-img/youtube.png';
import InIcon from '../styles/img/footer-img/instagram.png';

const Footer: React.FC = () => {


    return (
        <div className="footer">
            <div className="footer-row">

                <div className="footer-col">
                    <div className="footer-logo">
                        <img className="footer-logo-img" src={logoWK} alt="LogoWK" />
                        <div className="footer-logo-text">SMK WIKRAMA BOGOR</div>
                    </div>
                    <p className="footer-alamat">
                        <span className="alamat-span">Alamat <br/></span>
                        <span className="alamat-span">Jl. Raya Wangun <br/></span>
                        <span className="alamat-span">Kelurahan Sindangsari <br/>Bogor Timur 16720</span>
                    </p>
                    <div className="footer-alamat-divider"></div>
                    <p className="footer-contact bevietnampro-bold-white-16px">
                        <span className="contact-span">Telepon<br/></span>
                        <span className="contact-span">0251-8242411 / 082221718035 (WhatsApp)<br/></span>
                    </p>
                    <div className="footer-alamat-divider-1"></div>
                    <div className="footer-social-media-container">
                        <a href="https://www.facebook.com/smkwikrama" target="_blank" rel="noreferrer"><img className="footer-icon" src={ FbIcon } alt="FB-Icon" /></a>
                        <a href="https://twitter.com/smkwikrama" target="_blank" rel="noreferrer"><img className="footer-icon" src={ TwIcon } alt="TW-Icon" /></a>
                        <a href="https://www.youtube.com/@multimediawikrama7482" target="_blank" rel="noreferrer"><img className="footer-icon" src={ YtIcon } alt="YT-Icon" /></a>
                        <a href="https://www.instagram.com/smkwikrama" target="_blank" rel="noreferrer"><img className="footer-icon" src={ InIcon } alt="IN-Icon" /></a>
                    </div>
                </div>

                <div className="footer-col-1 footer-col-3">
                    <div className="footer-content-header bevietnampro-bold-white-16px">Tentang Wikrama</div>
                    <div className="footer-content-container">
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Sejarah</span>
                        </div>
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Peraturan Sekolah</span>
                        </div>
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Rencana Strategi & Presentasi</span>
                        </div>
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Rencana Strategi & Prestasi</span>
                        </div>
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Struktur Organisasi</span>
                        </div>
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Cabang</span>
                        </div>
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Penghargaan</span>
                        </div>
                        <div className="footer-content-text bevietnampro-medium-white-16px">
                            <span className="dot"></span>
                            <span className="bevietnampro-medium-white-16px">Kerjasama</span>
                        </div>
                    </div>  
                </div>
                <div className="footer-col-2 footer-col-3">
                    <div className="footer-content-header bevietnampro-bold-white-16px">Pesan</div>
                    <div className="footer-content-text-box">
                        <div className="footer-content-text-box-text bevietnampro-medium-mountain-mist-16px">Nama</div>
                    </div>
                    <div className="footer-content-text-box">
                        <div className="footer-content-text-box-text bevietnampro-medium-mountain-mist-16px">Email</div>
                    </div>
                    <div className="footer-content-text-box-large">
                        <div className="footer-content-text-box-text bevietnampro-medium-mountain-mist-16px">Pesan anda</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;