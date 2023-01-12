import TeamCard from "@/components/TeamCard";
import { ListTutors } from "@/modules/tutors/dummy-data";

export default function Teams() {
  return (
    <section className="py-10 lg:py-16 w-full">
      <div className="mx-auto">
        <h2 className="font-bold text-center text-2xl lg:text-4xl">Tutor TORCHE</h2>
        <p className="text-center font-cairo text-sm lg:text-base my-3 px-6">Torche menyediakan berbagai layanan edukasi yang mendukung kamu untuk menjadi seorang insinyur teknik kimia yang berkualitas tinggi.</p>
        <p className="text-center font-cairo text-[#5885E9] underline underline-offset-2 text-sm lg:text-base">Lihat Selengkapnya</p>
      </div>
      <div className="px-6 lg:px-20">
        <div className="flex gap-11 overflow-x-auto pb-10">
          {ListTutors.slice(0, 6).map((item, index) => (
            <TeamCard team={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
