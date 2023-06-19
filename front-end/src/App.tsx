import React, { useEffect, useState } from "react";
import "./styles/global.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import DanaStatusContainer from "./components/danaStatusContainer"
import Banner from "./components/banner";
import Manfaat from "./components/manfaat";
import Cara from "./components/cara";
import DataDonatur from "./components/dataDonatur"
import Gallery from "./components/gallery"
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import { Dana as DanaModel } from "./models/dana";
import { Wakaf as WakafModel } from "./models/wakaf";
import * as MasjidApi from "./network/masjid";

const App: React.FC = () => {
  const [dana, setDana] = useState<DanaModel[]>([]);
  const [wakaf, setWakaf] = useState<WakafModel[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const danaData = await MasjidApi.fetchDana();
        setDana(danaData);

        const wakafData = await MasjidApi.fetchWakaf();
        setWakaf(wakafData);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadData();
  }, []);

  return (
    <body id="beranda">
      <Navbar />
      <Header onWakafSaved={(newWakaf) => {
        setWakaf([...wakaf, newWakaf]);
      }}/>
      <DanaStatusContainer dana={dana} wakaf={wakaf} />
      <Banner />
      <Manfaat />
      <Cara />
      <DataDonatur />
      <Gallery />
      <Footer />
      <Copyright />
    </body>
  );
};
export default App;
