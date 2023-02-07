import TeamCard from "@/components/card/TeamCard";
import TextHeroWrapper from "@/components/wrapper/TextHeroWrapper";
import { ListTutors } from "../dummy-data";

export default function TutorsPage() {
  return (
    <div className="mx-auto w-full">
      <TextHeroWrapper title="Meet Our Tutors" description="Together with us, let's study from of the top experts to advance and prepare in your career in chemical engineering." />

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center items-center my-10 mx-auto w-full px-10 ">
        {ListTutors.map((item, index) => (
          <TeamCard team={item} key={index} />
        ))}
      </div>
    </div>
  );
}
