import '../styles/global.css';
import '../styles/componentCss/cara.css';

const Cara: React.FC = () => {
  return (
    <div className="cara-container" id='caraWakaf'>

      <div className="cara-text-container">
            <div className="cara-text-header bevietnampro-bold-white-64px">
                <span className="bevietnampro-bold-bay-of-many-64px">Cara Melakukan</span>
                <span className="bevietnampro-bold-eerie-black-64px"> Wakaf, infaq shodaqoh.</span>
            </div>
            <p className="cara-text-paragraph bevietnampro-medium-gray-30px">Berikut adalah Cara melakukan wakaq, infaq shodaqoh untuk membantu pembangunan masjid besar SMK Bogor</p>
        </div>

        <div className="cara-card-container">
          <div className="cara-card-frame">
            <div className="cara-card-inner-frame">
              <div className="cara-card">
                <div className="number bevietnampro-semi-bold-bay-of-many-32px">01</div>
                <div className="cara-card-text">
                  <div className="cara-card-header bevietnampro-bold-eerie-black-37px">Isi form data diri</div>
                  <p className="cara-card-paragraph bevietnampro-medium-gray-23-4px">Isikan form pengisian yang disediakan di form data diri, isikan dengan data diri anda dengan teliti.</p>
                </div>
              </div>
            </div>
            <div className="cara-card-inner-frame">
              <div className="cara-card">
                <div className="number bevietnampro-semi-bold-bay-of-many-32px">03</div>
                <div className="cara-card-text">
                  <div className="cara-card-header bevietnampro-bold-eerie-black-37px">Upload bukti pembayaran</div>
                  <p className="cara-card-paragraph bevietnampro-medium-gray-23-4px">Pilih motode pembayaran dan upload bukti pembayaranya.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cara-card-frame">
            <div className="cara-card-inner-frame">
              <div className="cara-card">
                <div className="number bevietnampro-semi-bold-bay-of-many-32px">02</div>
                <div className="cara-card-text">
                  <div className="cara-card-header bevietnampro-bold-eerie-black-37px">Isikan nominal shodaqoh</div>
                  <p className="cara-card-paragraph bevietnampro-medium-gray-23-4px">Isikan nominal yang akan anda shodaqohkan, pastikan isi nominal dengan seiklasnya tanpa ada paksaan apapun.</p>
                </div>
              </div>
            </div>
            <div className="cara-card-inner-frame">
              <div className="cara-card">
                <div className="number bevietnampro-semi-bold-bay-of-many-32px">04</div>
                <div className="cara-card-text">
                  <div className="cara-card-header bevietnampro-bold-eerie-black-37px">Verifikasi pembayaran</div>
                  <p className="cara-card-paragraph bevietnampro-medium-gray-23-4px">Pembayaran anda akan di verifikasi oleh admin dan jika terverifikasi nama anda akan tampil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  );
};

export default Cara;