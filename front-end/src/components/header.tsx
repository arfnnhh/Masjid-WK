import React, { useState } from "react";
import '../styles/global.css';
import '../styles/componentCss/header.css';
import masjidHeader from '../styles/img/masjid-header.png';
import leaf from '../styles/img/leaf.png';
import arrowAction from '../styles/img/arrowAction.png';
import bookmark from '../styles/img/bookmark.svg';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { Wakaf } from "../models/wakaf";
import { useForm } from "react-hook-form";
import { wakafInput } from "../network/masjid";
import * as MasjidApi from "../network/masjid";


interface AddWakafDialogProps {
  onWakafSaved: (wakaf: Wakaf) => void;
}

const Header = ({ onWakafSaved }: AddWakafDialogProps) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal }

  const {register, handleSubmit, formState : { isSubmitting } } = useForm<wakafInput>();

  async function onSubmit(input: wakafInput) {
    try {
      const wakafResponse = await MasjidApi.createWakafData(input);
      onWakafSaved(wakafResponse);
      setOpenModal(undefined);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <header>

      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <form id="addWakafForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Pengisian data donatur</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nama" value="Nama" />
              </div>
              <TextInput id="nama" placeholder="Masukan nama anda" {...register("nama", { required: "Required" })}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nominal" value="Nominal" />
              </div>
              <TextInput id="nominal" type="number" placeholder="Masukan nominal" {...register("nominalBarang", { required: "Required" })}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="paket" value="Paket" />
              </div>
              <TextInput id="paket" list="datalist" placeholder="Pilih paket yang anda inginkan" {...register("paket", { required: "Required" })}/>
              <datalist id="datalist">
                <option value="Paket-2" />
              </datalist>
            </div>
            <div className="w-full">
              <Button type="submit" form="addWakafForm" disabled={isSubmitting}>Daftarkan</Button>
            </div>
          </div>
          </form>
        </Modal.Body>
      </Modal>


      <div className="header-text">
        <p>Masjid Besar SMK Wikrama Bogor</p>
        <h3>Mari <span>Tingkatkan Keimanan</span> Masyarakat SMK Wikrama Bogor.</h3>
        <div className="button-frame" onClick={() => props.setOpenModal('form-elements')}>
          <div className="donasi-button">
            Beri Bantuan Shodaqoh
          </div>
        </div>
      </div>
      <div className="header-image">
        <img src={masjidHeader} alt="gambar masjid" className="header-img" />
        <div className="cards-container">
          <div className="card1">
            <img src={leaf} alt="leafIcon" />
            <p>Lingkungan Terjaga.</p>
          </div>
          <div className="card2">
            <img src={arrowAction} alt="Arrow" />
            <p>Kapasitas Besar.</p>
          </div>
          <div className="card3">
            <img src={bookmark} alt="bookmark" />
            <p>Al-Qur'an Gratis.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;