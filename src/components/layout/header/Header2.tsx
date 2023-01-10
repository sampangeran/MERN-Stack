import Image from "next/image";
import logoTorche from "@/assets/navbar/Torche_Logo-01_White.png";
import logoIndo from "@/assets/img/navbar/Indo.png";
import bar from "@/assets/navbar/bar.svg";

import { ChevronDown } from "react-bootstrap-icons";
import Link from "next/link";

export default function Header2() {
  return (
    <div className="sticky top-0 z-50 flex xl:px-20 lg:px-10 px-5 w-full justify-between items-center bg-[#0B122A] text-white">
      <div>
        <Image src={logoTorche} alt="Logo torche education" height={70} />
      </div>

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
          <Link href="/about-us">Tentang Kami</Link>
        </li>
      </ul>
      <div className="lg:hidden">
        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_310_16936)">
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
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <div className="bg-[#5885E9] px-3 py-2 rounded-3xl">Daftar Kelas</div>
        <div className="flex items-center gap-1">
          <Image src={logoIndo} alt="Language" height={15} />
          <p>ID</p>
        </div>
      </div>
    </div>
  );
}
