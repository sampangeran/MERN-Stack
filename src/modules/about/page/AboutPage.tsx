import TextHeroWrapper from "@/components/wrapper/TextHeroWrapper";
import Image from "next/image";
import image_grid from "@/assets/about/image_grid.png";
import LabScientist from "../components/svg/LabScientist";
import FeatureCard from "../components/FeatureCard";
import { ListFeature } from "../dummy-data";
import undraw_science from "@/assets/about/undraw_science.png";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full">
      <TextHeroWrapper title="Ahlinya di Bidang Teknik Kimia" description="Torche Education adalah Start-Up Teknologi Pendidikan pertama yang membantu anda belajar dalam bidang teknik khususnya" smallLabel="Tentang Kami" />

      <Image src={image_grid} alt="Engineering Industrial Illustration" />
      <section className="px-10 lg:px-16 mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between px-0 xl:px-24 gap-10 lg:gap-20 xl:gap-32">
          <Image className="w-64" src={undraw_science} alt="" />

          <div className="flex flex-col gap-3 flex-1 text-center lg:text-left">
            <h2 className="font-bold text-3xl lg:text-4xl">Ahlinya di Bidang Teknik Kimia</h2>
            <p className="text-sm">
              Torche memiliki lebih dari 30 mata pelajaran teknik kimia, dengan 800 siswa unik yang tersebar di lebih dari 8 universitas. Kami berkomitmen untuk menyediakan pendidikan tinggi yang cepat, komprehensif, dan berstandar
              internasional di bidang teknik kimia, teknik bioproses, dan pada akhirnya semua siswa engineering di seluruh dunia.
            </p>
          </div>
        </div>

        <div className="py-10" />
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          {ListFeature.map((item, index) => (
            <FeatureCard Icon={item.Icon} desc={item.desc} title={item.title} key={index} />
          ))}
        </div>
      </section>

      <section className="">
        <h2 className="text-4xl">Bagian dari Ekosistem Kami</h2>
      </section>
    </div>
  );
}
