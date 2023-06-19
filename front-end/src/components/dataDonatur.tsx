import { useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/componentCss/dataDonatur.css";
import arrow from "../styles/img/left-arrow.png";
import axios from "axios";


const DataDonatur: React.FC = () => {

  const [donaturData, setDonaturData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("/api/wakaf")
      .then((response) => {
        const data = response.data;
        setDonaturData(data);
      })
      .catch((error) => {
        console.error("Error fetching donatur data:", error);
      });
  }, []);

  const totalPages = Math.ceil(donaturData.length / 10);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;

  const displayedData = donaturData.slice(startIndex, endIndex);

  return (
    <div className="dataDonatur-container" id="dataWakaf">
      <div className="dataDonatur-text-container">
        <div className="dataDonatur-text-header bevietnampro-bold-white-64px">
          <span className="bevietnampro-bold-bay-of-many-64px">
            Data donatur
          </span>
          <span className="bevietnampro-bold-eerie-black-64px">
             Wakaf, infaq shodaqoh.
          </span>
        </div>
        <p className="dataDonatur-text-paragraph bevietnampro-medium-gray-30px">
          Berikut adalah data donatur wakaf, infaq shodaqoh untuk masjid besar
          SMK Wikrama Bogor
        </p>
      </div>

      <div className="table-container">
        <div className="arrow-group-1">
          <div className="left-arrow-frame" onClick={handlePreviousPage}>
            <img className="left-arrow" src={arrow} alt="Left-arrow-1" />
          </div>
          <div className="right-arrow-frame" onClick={handleNextPage}>
            <img className="right-arrow" src={arrow} alt="Right-arrow-1" />
          </div>
        </div>

        <div className="number bevietnampro-semi-bold-bay-of-many-32px">Page {currentPage}</div>


        <table className="table">
          <tr>
            <th>Nama Donatur</th>
            <th>Donatur ID</th>
            <th>Paket</th>
            <th>Kategori</th>
            <th>Nominal/barang</th>
          </tr>
          {displayedData.map((donatur, index) => (
            <tr key={index}>
              <td>{donatur.nama}</td>
              <td>{donatur._id}</td>
              <td>{donatur.paket}</td>
              <td>{donatur.kategori}</td>
              <td>{donatur.paket === 'Paket-1' ? (
                "Emas"
              ) : (
                'Rp. ' + donatur.nominalBarang.toLocaleString()
              )}</td>
            </tr>
          ))}
        </table>
      </div>

    </div>
  );
};

export default DataDonatur;
