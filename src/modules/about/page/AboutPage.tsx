import TextHeroWrapper from "@/components/wrapper/TextHeroWrapper";
import Image from "next/image";
import image_grid from "@/assets/about/image_grid.png";
import FeatureCard from "../components/FeatureCard";
import { ListAffiliators, ListClients, ListFeature, ListMedia, ListTeams } from "../dummy-data";
import undraw_science from "@/assets/about/undraw_science.png";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import TeamCard from "../components/TeamCard";
import AchievementCard from "../components/AchievementCard";

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

      <SectionWrapper title="Bagian dari Ekosistem Kami" variant="secondary">
        <div className="rounded-2xl shadow-xl shadow-neutral-700/40 p-10 flex overflow-auto lg:flex-wrap gap-10 bg-white justify-center">
          {ListClients.map((img, index) => (
            <Image src={img} alt="" height={60} key={index} className="object-cover" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Tim Kami" desc="Mari berkenalan dengan orang-orang hebat yang menjalankan Torche Education" textLink="Lihat Selengkapnya" variant="primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 my-14">
          {ListTeams.map((team, index) => (
            <TeamCard img={team.img} name={team.name} title={team.title} key={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Affiliators" variant="secondary">
        <div className="rounded-2xl shadow-xl shadow-neutral-700/40 p-10 flex overflow-auto lg:flex-wrap gap-10 bg-white justify-center">
          {ListAffiliators.map((img, index) => (
            <Image src={img} alt="" height={55} key={index} className="object-cover" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Seperti dilihat Di" variant="primary">
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-center overflow-auto my-8">
          {ListMedia.map((img, index) => (
            <Image src={img} alt="" height={55} key={index} className="object-cover" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="success" title="Pencapaian Kami" desc="Berikut adalah pengalaman dan momentum yang sudah kami lalui dan menjadi sebuah sejarah">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-5 my-16 border p-8 border-white/60 rounded-2xl">
          {Array.from({ length: 6 }).map((_, index) => (
            <AchievementCard key={index} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
