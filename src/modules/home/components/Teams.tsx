import TeamCard from "@/components/card/TeamCard";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { ListTutors } from "@/modules/tutors/dummy-data";

export default function Teams() {
  return (
    <SectionWrapper title="Tutor TORCHE" desc="Torche menyediakan berbagai layanan edukasi yang mendukung kamu untuk menjadi seorang insinyur teknik kimia yang berkualitas tinggi." variant="primary" textLink="Lihat Selengkapnya">
      <div className="flex gap-11 overflow-x-auto pb-10">
        {ListTutors.slice(0, 6).map((item, index) => (
          <TeamCard team={item} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
