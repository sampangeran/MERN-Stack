import * as Icon from "react-bootstrap-icons";
import styles from "@/styles/Footer.module.css";
import Logo from "../../../assets/navbar/Torche_Logo-01_White.png";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="px-[70px] pt-[70px] pb-[30px] bg-[#151515]">
			<div className="flex lg:flex-col lg:justify-around xl:flex-row flex-wrap">
				<div className="flex flex-col">
					<Image src={Logo} alt="Logo" className="xl-[142px] lg:w-[128px] vsm:w-[121px] -mt-[20px]"></Image>
					<h1 className="xl:w-[500px] vsm:w-[300px] lg:w-[924px] mt-7 font-cairo text-[14px] vsm:mb-[20px] lg:mb-[50px] text-white font-normal">Torche Education adalah perusahaan startup teknologi pendidikan yang berbasis di Indonesia, dengan fokus pada teknik kimia, teknik bioproses, dan mata pelajaran teknik proses lainnya.</h1>
				</div>

				<div className="flex lg:flex-row vsm:flex-col justify-between">
				<div className="vsm:mt-5">
					<h1 className="font-bold font-radjani text-white text-[19px]">Link</h1>
					<ul className="flex flex-col font-cairo text-white font-normal text-[14px]">
						<a href="/" className="my-3">Beranda</a>
						<a href="/about" className="mb-3">Tentang Kami</a>
						<a href="/#service" className="mb-3">Layanan</a>
						<a href="/courses" className="mb-3">Kursus</a>
						<a href="/career" className="mb-3">Karir</a>
					</ul>
				</div>
				<div className="text-white w-[400px] vsm:mt-5 xl:ml-[120px]">
					<h1 className="font-bold mb-3 text-[19px]">Kontak Kami</h1>
					<h1 className="text-[14px] mb-3 font-cairo font-semibold">PT. Obor Pengetahuan Indonesia untuk Masyarakat</h1>
					<h3 className="font-normal mb-3 text-[14px]">Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27 Kab. Tangerang, Banten 15810 Indonesia</h3>
					<h1 className="text-[14px] mb-3 font-cairo font-semibold">Whatsapp Business: <span className="font-normal">+62 851 5521 6117</span></h1>
					<h1 className="text-[14px] mb-3 font-cairo font-semibold">Email: <span className="font-normal">admin@torche.app</span></h1>
				</div>
				</div>
			</div>

			<div className="flex lg:justify-between lg:flex-row flex-col-reverse sm:flex-col lg:-mr-[45px] xl:mx-[60px] mt-[50px] text-white">
				<h1 className="text-[14px] font-cairo font-semibold">Copyright Torche 2022</h1>
				<div className="flex flex-row lg:mr-[80px]">
					<a target="blank" href="https://twitter.com/TorcheEdu" className="mr-5"><Icon.Twitter/></a>
					<a target="blank" href="https://www.facebook.com/torche.edu" className="mr-5"><Icon.Facebook/></a>
					<a target="blank" href="https://www.instagram.com/torche.app/" className="mr-5"><Icon.Instagram/></a>
					<a target="blank" href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw" className="mr-5"><Icon.Youtube/></a>
					<a target="blank" href="https://www.linkedin.com/company/torche-education/" className="mr-5"><Icon.Linkedin/></a>
					<a target="blank" href="https://vt.tiktok.com/ZSeu2n4ca/" className="mr-5"><Icon.Tiktok/></a>
					<a target="blank" href="https://discord.com/invite/2fYBrcK785" className="mr-5"><Icon.Discord/></a>
					<a target="blank" href="https://wa.me/+6285155216117" className="mr-5"><Icon.Whatsapp/></a>
					<a target="blank" href="https://page.line.me/229wiguf" className="mr-5"><Icon.Line/></a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
