import Image from "next/image";
import heroImage from "@/assets/auth/login-img.png";
import logo from "@/assets/auth/logo.png";
import { Eye, EyeSlash, ArrowLeft } from 'react-bootstrap-icons';
import React, {useState} from 'react';
import Link from 'next/link';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white font-rajdhani min-h-screen">
      <div className="flex w-full mx-auto flex-nowrap items-start justify-between overflow-hidden min-h-screen">
        <div className="text-center md:text-left flex-1 px-8 py-4">
          <div className="flex justify-center md:justify-start">
            <Image src={logo} className="w-[128px] mb-12 lg:mb-24" alt="logo" />
          </div> 
          <div className="flex items-center mb-4 font-cairo">
            <label className="text-[#0B122A] text-base">
              Daftar Akun
            </label>
            <a className="ml-auto text-[#5885E9] text-base underline cursor-pointer flex items-center gap-2" href="#">
              <ArrowLeft /> <span>Kembali</span>
            </a>
          </div>
          <h1 className="font-bold lg:text-4xl">Selamat datang di TORCHE</h1>
          <p className="font-light font-cairo text-sm mt-2">Masuk dengan menggunakan akunmu untuk mengakses berbagai macam konten Torche. Apabilia belum punya, kamu bisa melakukan daftar akun terlebih dahulu.Program berkualitas hanya untukmu</p>
          <div className="font-cairo mt-8">
            <div className="mb-4">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                type="email"
                id="email"
                placeholder="Masukkan email anda"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left" htmlFor="name">
                Nama Lengkap
              </label>
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                type="text"
                id="name"
                placeholder="Masukkan nama anda"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Masukkan password"
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeSlash className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left" htmlFor="confirm-password">
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  type={showPassword ? 'text' : 'password'}
                  id="confirm-password"
                  placeholder="Konfirmasi password"
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeSlash className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <button className="bg-[#5885E9] hover:opacity-75 text-white font-bold py-2 rounded-full mb-4 w-full">
              Buat Akun
            </button>
            <hr className="border-gray-300 mb-4" />
            <Link href="/login" className="flex justify-center text-center text-[#5885E9] text-base underline cursor-pointer">
              Sign in
            </Link>
          </div>  
        </div>
        <Image src={heroImage} className="hidden md:flex sm:max-w-md lg:max-w-xl xl:max-w-3xl object-cover object-right" alt="Hero Image" />
      </div>
    </div>
  );
}
