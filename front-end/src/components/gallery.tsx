import '../styles/global.css';
import '../styles/componentCss/gallery.css';
import GalleryArrow from '../styles/img/gallery-img/gallery-arrow.png';
import Gallery_1 from '../styles/img/gallery-img/gallery-1.png';
import Gallery_2 from '../styles/img/gallery-img/gallery-2.png';
import Gallery_3 from '../styles/img/gallery-img/gallery-3.png';
import Gallery_4 from '../styles/img/gallery-img/gallery-4.png';
import Gallery_5 from '../styles/img/gallery-img/gallery-5.png';


const Gallery: React.FC = () => {
  return (
    <div className="gallery-container" id="gallery">

      <div className="gallery-text-container">
            <div className="gallery-text-header bevietnampro-bold-white-64px">
                <span className="bevietnampro-bold-bay-of-many-64px">Gallery</span>
                <span className="bevietnampro-bold-eerie-black-64px"> Masjid besar SMK Wikrama Bogor.</span>
            </div>
            <p className="gallery-text-paragraph bevietnampro-medium-gray-30px">Berikut adalah gallery masjid besar SMK Wikrama Bogor.</p>
        </div>

        <div className="gallery-card-container">
            <div className="gallery-card-frame">
                <img src={Gallery_1} alt="Gallery1" className="gallery-card-1" />
                <img src={Gallery_2} alt="Gallery2" className="gallery-card-2" />
                <img src={Gallery_3} alt="Gallery_3" className="gallery-card-3" />
            </div>
            <div className="gallery-card-frame">
                <img src={Gallery_4} alt="Gallery4" className="gallery-card-4" />
                <img src={Gallery_5} alt="Gallery5" className="gallery-card-5" />
                <div className="gallery-card-open-frame">
                    <div className="gallery-card-open-container">
                        <div className="gallery-card-open">
                            <div className="gallery-card-open-text">Buka Galeri</div>
                            <img className="gallery-card-open-arrow" src={ GalleryArrow } alt="GalleryArrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Gallery;