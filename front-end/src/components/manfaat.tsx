import React from "react";
import '../styles/global.css';
import '../styles/componentCss/manfaat.css';
import Heart from "../styles/img/manfaat-img/heart.png";
import HeartIcon from "../styles/img/manfaat-img/heart-icon.png";
import Verif from "../styles/img/manfaat-img/verif.png";
import VerifIcon from "../styles/img/manfaat-img/verif-icon.png";
import Shield from "../styles/img/manfaat-img/shield.png";
import ShieldIcon from "../styles/img/manfaat-img/shield-icon.png";
import Star from "../styles/img/manfaat-img/star.png";
import StarIcon from "../styles/img/manfaat-img/star-icon.png";
import Handshake from "../styles/img/manfaat-img/handshake.png";

const Manfaat: React.FC = () => {
  return (
    <div className="manfaat-container">
        <div className="manfaat-text-container">
            <div className="manfaat-text-header bevietnampro-bold-white-64px">
                <span className="bevietnampro-bold-bay-of-many-64px">Manfaat</span>
                <span className="bevietnampro-bold-eerie-black-64px"> Wakaf, infaq shodaqoh.</span>
            </div>
            <p className="manfaat-text-paragraph bevietnampro-medium-gray-30px">Berikut adalah beberapa keutamaan Waqaf, Infaq Shodaqoh yang akan anda dapatkan.</p>
        </div>
        <div className="manfaat-card-section">
            <div className="manfaat-card-container">
                <div className="manfaat-card-frame">
                    <div className="manfaat-card">
                        <img className="heart-outline" src={ Heart } alt="Heart"/>
                        <div className="manfaat-card-icon">
                            <img className="heart-icon" src={ HeartIcon } alt="icon-heart" />
                        </div>
                        <div className="manfaat-card-text">
                            <div className="manfaat-card-header">Menjadikan hati lebih tenang</div>
                            <p className="manfaat-card-paragraph bevietnampro-medium-mountain-mist-23-4px">Kami memberikan harga yang terbaik dibandingkan dengan kompetitor kami.</p>
                        </div>
                    </div>
                    <div className="manfaat-card">
                        <img className="heart-outline" src={ Verif } alt="Heart"/>
                        <div className="manfaat-card-icon">
                            <img className="heart-icon" src={ VerifIcon } alt="icon-heart" />
                        </div>
                        <div className="manfaat-card-text">
                            <div className="manfaat-card-header">Terbukanya pintu rezeki</div>
                            <p className="manfaat-card-paragraph bevietnampro-medium-mountain-mist-23-4px">Allah SWT akan membuka pintu rezeki dari arah yang tidak dikira sebelum nya.</p>
                        </div>
                    </div>
                </div>
                <div className="manfaat-card-frame">
                    <div className="manfaat-card">
                        <img className="heart-outline" src={ Shield } alt="Heart"/>
                        <div className="manfaat-card-icon">
                            <img className="heart-icon" src={ ShieldIcon } alt="icon-heart" />
                        </div>
                        <div className="manfaat-card-text">
                            <div className="manfaat-card-header">Menjauhkan dari bahaya</div>
                            <p className="manfaat-card-paragraph bevietnampro-medium-mountain-mist-23-4px">Rasulullah SAW pernah besabda: "Bersegeralah untuk bersedekah, karena musibah dan bencana tidak bisa mendahului sedekah."</p>
                        </div>
                    </div>
                    <div className="manfaat-card">
                        <img className="heart-outline" src={ Star } alt="Heart"/>
                        <div className="manfaat-card-icon">
                            <img className="heart-icon" src={ StarIcon } alt="icon-heart" />
                        </div>
                        <div className="manfaat-card-text">
                            <div className="manfaat-card-header">Pahala yang tak terputus</div>
                            <p className="manfaat-card-paragraph bevietnampro-medium-mountain-mist-23-4px">Ini akan menolong kita di akhirat nantinya, juga dapat menyelamatkannya dari api neraka.</p>
                        </div>
                    </div>
                    <img className="handshake" src={ Handshake } alt="Handshake" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Manfaat;