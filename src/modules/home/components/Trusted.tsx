import Image, { StaticImageData } from "next/image";
import { ListClients } from "../dummy-data";
import aiche from "@/assets/home/kampus/aiche.png";
import itb from "@/assets/home/kampus/itb.png";
import its from "@/assets/home/kampus/its.png";
import itera from "@/assets/home/kampus/itera.png";
import ugm from "@/assets/home/kampus/ugm.png";
import ui from "@/assets/home/kampus/ui.png";
import undip from "@/assets/home/kampus/undip.png";
import unsri from "@/assets/home/kampus/unsri.png";

const ListClientLogos = [ui, itb, its, ugm, undip, unsri, itera, aiche];

export default function Trusted() {
  return (
    <section className="py-10 text-center px-10 xl:px-20">
      <p className="text-xl font-semibold font-rajdhani">Telah Dipercaya oleh Berbagai Akademisi dan Profesional</p>
      <div className="flex items-center gap-6 justify-between my-4 overflow-x-auto">
        {ListClientLogos.map((logo, index) => (
          <Image src={logo} alt="Logo kampus" key={index} />
        ))}
      </div>
      <p className="font-cairo text-[#5885E9]">dan 20+ Perusahaan dan Institusi Lainnya</p>
    </section>
  );
}
