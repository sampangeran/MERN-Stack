import Image from "next/image";
import logoTorche from "@/assets/navbar/Torche_Logo-01_White.png";
import logoIndo from "@/assets/img/navbar/Indo.png";
import bar from "@/assets/navbar/bar.svg";
import logoTorche2 from "@/assets/img/Torche_Logo-01.png";

import { ChevronDown } from "react-bootstrap-icons";
import Link from "next/link";
import { useState } from "react";

export default function Header2() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className={`sticky top-0 z-50  w-full ${nav ? "bg-[#F3F3F3] text-black" : "bg-[#0B122A] text-white"}`}>
        <div className="flex relative xl:px-20 lg:px-10 px-5 justify-between items-center">
          <Link href="/">
            <Image src={nav ? logoTorche2 : logoTorche} priority alt="Logo torche education" height={70} />
          </Link>

          <ul className="hidden lg:flex justify-center gap-6 items-center font-rajdhani">
            <li>
              <Link href="/services">Layanan</Link>
            </li>
            <li>
              Kursus <ChevronDown className="inline" />
            </li>
            <li>
              <Link href="/tutors">Tutor</Link>
            </li>
            <li>
              Web-Apps <ChevronDown className="inline" />
            </li>
            <li>
              <Link href="/careers">Karir</Link>
            </li>
            <li>
              <Link href="/about">Tentang Kami</Link>
            </li>
          </ul>
          <div className="lg:hidden" onClick={() => setNav(!nav)}>
            {nav ? (
              <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9998 21.4L15.0998 26.3C14.9165 26.4834 14.6831 26.575 14.3998 26.575C14.1165 26.575 13.8831 26.4834 13.6998 26.3C13.5165 26.1167 13.4248 25.8834 13.4248 25.6C13.4248 25.3167 13.5165 25.0834 13.6998 24.9L18.5998 20L13.6998 15.1C13.5165 14.9167 13.4248 14.6834 13.4248 14.4C13.4248 14.1167 13.5165 13.8834 13.6998 13.7C13.8831 13.5167 14.1165 13.425 14.3998 13.425C14.6831 13.425 14.9165 13.5167 15.0998 13.7L19.9998 18.6L24.8998 13.7C25.0831 13.5167 25.3165 13.425 25.5998 13.425C25.8831 13.425 26.1165 13.5167 26.2998 13.7C26.4831 13.8834 26.5748 14.1167 26.5748 14.4C26.5748 14.6834 26.4831 14.9167 26.2998 15.1L21.3998 20L26.2998 24.9C26.4831 25.0834 26.5748 25.3167 26.5748 25.6C26.5748 25.8834 26.4831 26.1167 26.2998 26.3C26.1165 26.4834 25.8831 26.575 25.5998 26.575C25.3165 26.575 25.0831 26.4834 24.8998 26.3L19.9998 21.4Z"
                  fill="black"
                />
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#151515" />
              </svg>
            ) : (
              <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_310_16936)">
                  <path
                    d="M12 26H28C28.55 26 29 25.55 29 25C29 24.45 28.55 24 28 24H12C11.45 24 11 24.45 11 25C11 25.55 11.45 26 12 26ZM12 21H28C28.55 21 29 20.55 29 20C29 19.45 28.55 19 28 19H12C11.45 19 11 19.45 11 20C11 20.55 11.45 21 12 21ZM11 15C11 15.55 11.45 16 12 16H28C28.55 16 29 15.55 29 15C29 14.45 28.55 14 28 14H12C11.45 14 11 14.45 11 15Z"
                    fill="white"
                  />
                </g>
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
                <defs>
                  <clipPath id="clip0_310_16936">
                    <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="bg-[#5885E9] px-3 py-2 rounded-3xl">Daftar Kelas</div>
            <div className="flex items-center gap-1">
              <Image src={logoIndo} alt="Language" height={15} />
              <p>ID</p>
            </div>
          </div>
        </div>
        {nav && (
          <div className="h-screen bg-[#F3F3F3] w-full absolute top">
            <div className="flex flex-col h-full px-5 py-3 relative">
              <div className="flex flex-col justify-end items-end gap-4 py-10">
                <Link className="text-2xl font-rajdhani" href="/services">
                  Layanan
                </Link>
                <p className="text-2xl font-rajdhani">
                  Kursus <ChevronDown className="inline" />
                </p>
                <Link className="text-2xl font-rajdhani" href="/tutors">
                  Tutor
                </Link>
                <p className="text-2xl font-rajdhani">
                  Web-Apps <ChevronDown className="inline" />
                </p>
                <Link className="text-2xl font-rajdhani" href="/careers">
                  Karir
                </Link>
                <Link className="text-2xl font-rajdhani" href="/about">
                  Tentang Kami
                </Link>
              </div>
              <div className="border-t absolute bottom-32 border-t-[#A7A7A7] border-opacity-50 pt-4 mx-5 left-0 right-0">
                <p className="flex justify-end text-xs font-bold">Copyright Torche 2022</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
