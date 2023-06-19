import React, { CSSProperties, useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/componentCss/danaStatus.css";
import { Dana as DanaModel } from "../models/dana";
import { Wakaf as WakafModel } from "../models/wakaf";

interface DanaProps {
  dana: DanaModel[];
  wakaf: WakafModel[];
}

const DanaStatusContainer = ({ dana, wakaf }: DanaProps) => {

  // Untuk mengecek total orang yang sudah mendonasi
  const [totalDonatur, setTotalDonatur] = useState<number>(0);

  useEffect(() => {
    const countDonatur = wakaf.length;
    setTotalDonatur(countDonatur);
  }, [wakaf]);

  // Untuk mengecek 3 donatur terakhir
  const [latestDonators, setLatestDonators] = useState<WakafModel[]>([]);

  useEffect(() => {
    const sortedWakaf = wakaf.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    const lastThreeDonators = sortedWakaf.slice(0, 3);
    setLatestDonators(lastThreeDonators);
  }, [wakaf]);

  // Untuk memformat nomor agar ada titik tiap 000
  const formatNumber = (value: number) => {
    return value.toLocaleString("en-US");
  };

  // Untuk mendapatkan hasil % dari total dana
  const totalDana = dana.reduce((acc, curr) => acc + curr.totalDana, 0);
  const percentage = parseFloat(((totalDana / 40000000) * 100).toFixed(1));


  // Untuk membuat progress bar maju seiring dengan persentasi total dana
  const progressBarStyle: CSSProperties = {
    width: `${percentage}%`,
  };

  return (
    <section className="dana-container">
      <div className="dana-inner-container">
        <div className="dana-status-frame">
          {dana.map((item) => (
            <div className="dana-status-container" key={item._id}>
              <div className="total bevietnampro-medium-gray-20px">
                Total Target Dana
              </div>
              <div className="price bevietnampro-bold-eerie-black-40px">
                Rp.{formatNumber(item.totalTarget)}
              </div>
            </div>
          ))}
          {dana.map((item) => (
            <div className="dana-status-container" key={item._id}>
              <div className="total bevietnampro-medium-gray-20px">
                Total Dana Terkumpul
              </div>
              <div className="price bevietnampro-bold-eerie-black-40px">
                Rp.{formatNumber(item.totalDana)}
              </div>
            </div>
          ))}
          <div className="dana-status-container">
            <div className="total bevietnampro-medium-gray-20px">
              Total Donatur
            </div>
            <div className="price bevietnampro-bold-eerie-black-40px">
              {totalDonatur} Orang
            </div>
          </div>
        </div>
        <div className="break-bar"></div>
        <div className="progress-bar-container">
          <div className="progress-bar-frame">
          <div className="progress-bar" style={progressBarStyle}></div>
          </div>
          <div className="persen-terpenuhi bevietnampro-bold-bay-of-many-36px">
          <span className="bevietnampro-bold-bay-of-many-36px">{percentage > 100 ? 100 : percentage}%</span>

            <span className="span-persen">Terpenuhi</span>
          </div>
        </div>
      </div>
      <div className="running-text-container">
        <div className="running-text-frame">
          {latestDonators.map((item) => (
              <p className="latest-donator bevietnampro-medium-white-24px" key={item._id}>
                <span className="bevietnampro-medium-white-24px-2">{item.nama} - </span>
                <span className="bevietnampro-medium-yellow-sunshine-24px">
                  Uang : Rp.{formatNumber(item.nominalBarang)}
                </span>
              </p>
            ))}
          </div>
        </div>
    </section>
  );
};

export default DanaStatusContainer;
