import TeamCard from "@/components/TeamCard";
import { ListTutors } from "../dummy-data";

export default function TutorsPage() {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col text-white justify-center items-center p-20 text-center bg-[#0B122A]">
        <h1 className="font-rajdhani text-5xl font-bold">Meet Our Tutors</h1>
        <p className="mt-2">Together with us, let's study from of the top experts to advance and prepare in your career in chemical engineering.</p>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center items-center my-10 mx-auto w-full px-10 ">
        {ListTutors.map((item, index) => (
          <TeamCard team={item} key={index} />
        ))}
      </div>
    </div>
  );
}
