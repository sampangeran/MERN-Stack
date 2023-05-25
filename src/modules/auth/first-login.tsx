import Image from "next/image";
import heroImage from "@/assets/auth/login-img.png";
import logo from "@/assets/auth/logo.png";
import { Eye, EyeSlash, ArrowLeft } from 'react-bootstrap-icons';
import React, {useState} from 'react';
import Link from 'next/link';

export default function FirstLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white font-rajdhani min-h-screen">
      <div className="flex w-full mx-auto flex-nowrap items-start justify-between overflow-hidden min-h-screen">
        <div className="text-center md:text-left flex-1 px-8 py-4">
          <div className="flex justify-center md:justify-start">
            <Image src={logo} className="w-[128px] mb-12" alt="logo" />
          </div> 
          <div className="flex items-center mb-4 font-cairo">
            <label className="text-[#0B122A] text-base">
              Masuk
            </label>
            <a className="ml-auto text-[#5885E9] text-base underline cursor-pointer flex items-center gap-2" href="#">
              <ArrowLeft /> <span>Kembali</span>
            </a>
          </div>
          <h1 className="font-bold lg:text-4xl">Selamat datang John Doe</h1>
          <p className="font-light font-cairo text-sm mt-2">Sebelum melanjutkan akses ke akunmu, mohon mengisi beberapa data berikut agar kami dapat melayanimu dengan baik.</p>
          <div className="font-cairo mt-8">
            <div className="mb-8">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left" htmlFor="no-wa">
              Nomor Whatsapp
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                type="text"
                id="no-wa"
                placeholder="contoh: +62......"
              />
            </div>

            <div className="mb-8">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left" htmlFor="studi">
              Riwayat Studi
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 bg-gray-200"
                id="studi"
              >
                <option>Pilih asal universitas</option>
              </select>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 bg-gray-200"
                id="studi"
              >
                <option>Pilih program studi</option>
              </select>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 bg-gray-200"
                id="studi"
              >
                <option>Pilih tahun angkatan</option>
              </select>
            </div>

            <div className="mb-8 flex flex-col gap-2 items-start">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left">
              Dari Mana Kamu Mengetahui Torche?
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  value="Media Sosial"
                  checked={selectedOption === "Media Sosial"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark ml-2"></span>
                Media Sosial
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  value="Keluarga/Teman"
                  checked={selectedOption === "Keluarga/Teman"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark ml-2"></span>
                Keluarga/Teman
              </label>

              <label className="radio-container">
                <input
                  type="radio"
                  value="Iklan Digital"
                  checked={selectedOption === "Iklan Digital"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark ml-2"></span>
                Iklan Digital
              </label>

              <label className="radio-container">
                <input
                  type="radio"
                  value="Website Lain"
                  checked={selectedOption === "Website Lain"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark ml-2"></span>
                Website Lain
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  value="Lainnya"
                  checked={selectedOption === "Lainnya"}
                  onChange={handleOptionChange}
                />
                <span className="checkmark ml-2"></span>
                Lainnya
              </label>
            </div>

            <button className="bg-[#5885E9] hover:opacity-75 text-white font-bold py-2 rounded-full mb-4 w-full">
              Submit Data
            </button>

          </div>  
        </div>
        <Image src={heroImage} className="min-h-screen hidden md:flex sm:max-w-md lg:max-w-xl xl:max-w-3xl object-cover object-right" alt="Hero Image" />
      </div>
    </div>
  );
}
