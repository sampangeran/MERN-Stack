import Image, { StaticImageData } from "next/image";
import { Icon, Twitter, Linkedin, Instagram, ArrowRight } from "react-bootstrap-icons";
import { ListTeams } from "../dummy-data";
import team1 from "@/assets/home/team-1.webp";

type SociaProps = {
  Icon: Icon;
  url: string;
};
interface TeamCardProps {
  name: string;
  position: string;
  role: string;
  profilePic: StaticImageData;
  social: SociaProps[];
}

function TeamCard() {
  return (
    <div className="w-full md:w-80 relative top-0 flex-none">
      <div className="absolute -top-28 z-10 left-0 right-0 rounded-full w-48 h-48 mx-auto overflow-hidden">
        <Image className="object-cover" width={200} height={200} src={team1} alt="team tutors" />
      </div>
      <div className="bg-white w-full shadow-lg rounded-2xl text-center text-black overflow-hidden">
        <div className="px-6 pt-24">
          <p className="font-bold text-2xl font-rajdhani">Muhammad Yusuf A.</p>
          <p className="font-cairo text-sm text-[#494949] my-3">Masters of Science in Chemical Engineering @ National Taiwan University of Science and Technology</p>
          <div className="mx-auto">
            <p className="font-bold font-cairo text-sm">Mengajarkan:</p>
            <p className="text-xs font-bold text-[#5885E9] my-2">Bioprocess Engineering, Engineering Economy</p>
            <div className="flex gap-3 justify-center my-4">
              <a href="#" className="border border-[#5885E9] rounded-full p-2" aria-label="twitter" target="_blank" rel="noreferrer">
                <Twitter size={15} className="text-[#5885E9]" />
              </a>
              <a href="#" className="border border-[#5885E9] rounded-full p-2" aria-label="twitter" target="_blank" rel="noreferrer">
                <Linkedin size={15} className="text-[#5885E9]" />
              </a>
              <a href="#" className="border border-[#5885E9] rounded-full p-2" aria-label="twitter" target="_blank" rel="noreferrer">
                <Instagram size={15} className="text-[#5885E9]" />
              </a>
            </div>
          </div>
        </div>
        <button className="bg-[#5885E9] w-full font-bold text-white text-center py-4">
          Buka Keterangan{" "}
          <span>
            <ArrowRight className="inline ml-3" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Teams() {
  return (
    <section className="py-10 lg:py-16 w-full">
      <div className="mx-auto">
        <h2 className="font-bold text-center text-2xl lg:text-4xl">Tutor TORCHE</h2>
        <p className="text-center font-cairo text-sm lg:text-base my-3 px-6">Torche menyediakan berbagai layanan edukasi yang mendukung kamu untuk menjadi seorang insinyur teknik kimia yang berkualitas tinggi.</p>
        <p className="text-center font-cairo text-[#5885E9] underline underline-offset-2 text-sm lg:text-base">Lihat Selengkapnya</p>
      </div>
      <div className="px-6 lg:px-20">
        <div className="flex gap-11 overflow-x-auto pt-40 pb-10">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
}
