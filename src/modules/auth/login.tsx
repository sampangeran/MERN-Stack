import Image from "next/image";
import heroImage from "@/assets/auth/login-img.png";
import logo from "@/assets/auth/logo.png";
import { Eye, EyeSlash, ArrowLeft } from 'react-bootstrap-icons';
import React, {useState} from 'react';
import Link from 'next/link';

export default function Login() {
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
              Sign in
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
                className="w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Masukkan email anda"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#0B122A] text-base font-bold mb-2 text-left" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            <div className="flex items-center mb-4">
              <input
                className="mr-2"
                type="checkbox"
                id="remember"
              />
              <label className="text-[#0B122A] text-sm" htmlFor="remember">
                Ingat akunku
              </label>
              <a className="ml-auto text-[#5885E9] text-sm underline cursor-pointer" href="#">
                Lupa password?
              </a>
            </div>

            <button className="bg-[#5885E9] hover:opacity-75 text-white font-bold py-2 rounded-full mb-4 w-full">
              Masuk
            </button>

            <button className="bg-white hover:opacity-75 text-[#5885E9] border border-[#5885E9] font-bold py-2 rounded-full flex justify-center items-center mb-4 gap-2 w-full">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.327 16.8285 15.1115 18.5 12.5 18.5C9.1865 18.5 6.5 15.8135 6.5 12.5C6.5 9.1865 9.1865 6.5 12.5 6.5C14.0295 6.5 15.421 7.077 16.4805 8.0195L19.309 5.191C17.523 3.5265 15.134 2.5 12.5 2.5C6.9775 2.5 2.5 6.9775 2.5 12.5C2.5 18.0225 6.9775 22.5 12.5 22.5C18.0225 22.5 22.5 18.0225 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z" fill="#FFC107"/>
                <path d="M3.65308 7.8455L6.93858 10.255C7.82758 8.054 9.98058 6.5 12.5001 6.5C14.0296 6.5 15.4211 7.077 16.4806 8.0195L19.3091 5.191C17.5231 3.5265 15.1341 2.5 12.5001 2.5C8.65908 2.5 5.32808 4.6685 3.65308 7.8455Z" fill="#FF3D00"/>
                <path d="M12.4999 22.5001C15.0829 22.5001 17.4299 21.5116 19.2044 19.9041L16.1094 17.2851C15.1054 18.0456 13.8574 18.5001 12.4999 18.5001C9.89891 18.5001 7.69041 16.8416 6.85841 14.5271L3.59741 17.0396C5.25241 20.2781 8.61341 22.5001 12.4999 22.5001Z" fill="#4CAF50"/>
                <path d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.7555 15.6185 17.036 16.583 16.108 17.2855L16.1095 17.2845L19.2045 19.9035C18.9855 20.1025 22.5 17.5 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z" fill="#1976D2"/>
                </svg>
              Masuk dengan Google
            </button>

            <hr className="border-gray-300 mb-4" />

            <Link href="/signup" className="flex justify-center text-center text-[#5885E9] text-base underline cursor-pointer">
              Belum punya akun?
            </Link>
          </div>  
        </div>
        <Image src={heroImage} className="hidden md:flex sm:max-w-md lg:max-w-xl xl:max-w-3xl object-cover object-right" alt="Hero Image" />
      </div>
    </div>
  );
}
