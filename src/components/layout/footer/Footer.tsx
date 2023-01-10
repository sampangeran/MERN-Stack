import * as Icon from "react-bootstrap-icons";
import styles from "@/styles/Footer.module.css";
import Logo from "../../../assets/navbar/Torche_Logo-01_White.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="xl:px-20 py-10 lg:px-10 px-5 bg-[#151515]">
      <div className="flex flex-col justify-between gap-3 xl:flex-row">
        <div className="xl:w-[40%]">
          <Image src={Logo} alt="Logo" height={80}></Image>
          <p className="font-cairo font-normal text-white">
            Torche Education adalah perusahaan startup teknologi pendidikan yang berbasis di Indonesia, dengan fokus pada teknik kimia, teknik bioproses, dan mata pelajaran teknik proses lainnya.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-between xl:flex-1">
          <div className="vsm:mt-5">
            <p className="font-bold font-radjani text-white text-xl">Link</p>
            <ul className="flex flex-col font-cairo text-white font-normal space-y-3 mt-3">
              <Link href="/">Beranda</Link>
              <Link href="/about-us">Tentang Kami</Link>
              <Link href="/services">Layanan</Link>
              <Link href="/courses">Kursus</Link>
              <Link href="/careers">Karir</Link>
            </ul>
          </div>
          <div className="text-white mt-5">
            <p className="font-bold mb-3 text-xl">Kontak Kami</p>
            <p className="mb-3 font-cairo font-semibold">PT. Obor Pengetahuan Indonesia untuk Masyarakat</p>
            <p className="font-normal mb-3">Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27 Kab. Tangerang, Banten 15810 Indonesia</p>
            <p className="mb-3 font-cairo font-semibold">
              Whatsapp Business: <span className="font-normal">+62 851 5521 6117</span>
            </p>
            <p className="mb-3 font-cairo font-semibold">
              Email: <span className="font-normal">admin@torche.app</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:justify-between lg:flex-row flex-col-reverse mt-8 gap-5 text-white">
        <div>
          <p className="font-cairo font-semibold">Copyright Torche 2022</p>
        </div>
        <div className="flex gap-8 items-center flex-wrap w-[70%] sm:w-[60%] xl:w-auto">
          <a target="blank" href="https://twitter.com/TorcheEdu">
            <Icon.Twitter size={20} />
          </a>
          <a target="blank" href="https://www.facebook.com/torche.edu">
            <Icon.Facebook size={20} />
          </a>
          <a target="blank" href="https://www.instagram.com/torche.app/">
            <Icon.Instagram size={20} />
          </a>
          <a target="blank" href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw">
            <Icon.Youtube size={20} />
          </a>
          <a target="blank" href="https://www.linkedin.com/company/torche-education/">
            <Icon.Linkedin size={20} />
          </a>
          <a target="blank" href="https://vt.tiktok.com/ZSeu2n4ca/">
            <Icon.Tiktok size={20} />
          </a>
          <a target="blank" href="https://discord.com/invite/2fYBrcK785">
            <Icon.Discord size={20} />
          </a>
          <a target="blank" href="https://wa.me/+6285155216117">
            <Icon.Whatsapp size={20} />
          </a>
          <a target="blank" href="https://page.line.me/229wiguf">
            <Icon.Line size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
