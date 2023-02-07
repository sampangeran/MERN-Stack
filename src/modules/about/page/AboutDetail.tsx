import AboutTeamCard from "@/components/card/AboutTeamCard";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { ListTeams } from "../dummy-data";

type ButtonContext = "direksi" | "manager" | "komisaris";

export default function AboutDetail() {
  const [teamPosition, setTeamPosition] = useState<ButtonContext>("direksi");

  return (
    <SectionWrapper variant="primary">
      <Link href="/about" className="font-bold text-[#5885E9]">
        <ArrowLeft className="inline" /> Back
      </Link>

      <div className="flex flex-col divide-y-2 w-[70%] my-6 text-center mx-auto">
        <div>
          <h2 className="text-4xl">Tim Kami</h2>
          <p className="text-sm max-w-xl mx-auto leading-6">Bersama Torche Education, Anda akan bertemu dan belajar bersama Para ahli terbaik dalam mengembangkan skill dan pengetahuan di bidang Teknik kimia untuk persiapan karir Anda</p>
          <div className="flex flex-col lg:flex-row w-fit mx-auto gap-4 justify-center my-4 text text-[#5885E9]">
            <button className={clsx("border border-[#5885E9] px-5 py-2 font-bold rounded-3xl", { "bg-[#5885E9] text-white": teamPosition === "direksi" })} onClick={() => setTeamPosition("direksi")}>
              Jajaran Direksi
            </button>
            <button className={clsx("border border-[#5885E9] px-5 py-2 font-bold rounded-3xl", { "bg-[#5885E9] text-white": teamPosition === "manager" })} onClick={() => setTeamPosition("manager")}>
              Jajaran Manager
            </button>
            <button className={clsx("border border-[#5885E9] px-5 py-2 font-bold rounded-3xl", { "bg-[#5885E9] text-white": teamPosition === "komisaris" })} onClick={() => setTeamPosition("komisaris")}>
              Jajaran Komisaris
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4 py-6">
          {teamPosition === "direksi" && (
            <>
              {ListTeams.map((item, index) => (
                <AboutTeamCard key={index} img={item.img} name={item.name} title={item.title} />
              ))}
            </>
          )}
          {teamPosition === "manager" && (
            <>
              {ListTeams.map((item, index) => (
                <AboutTeamCard key={index} img={item.img} name={item.name} title={item.title} />
              ))}
            </>
          )}
          {teamPosition === "komisaris" && (
            <>
              {ListTeams.map((item, index) => (
                <AboutTeamCard key={index} img={item.img} name={item.name} title={item.title} />
              ))}
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
