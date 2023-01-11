// import required modules
import Image from "next/image";

interface Testimony {
  name: string;
  job: string;
  desc: string;
}
function TestCard({ data }: { data: Testimony }) {
  return (
    <div className="p-5 text-left bg-white w-full max-w-sm rounded-2xl shadow-xl flex gap-3 flex-none items-start justify-start">
      <div className="rounded-full w-14 h-14 overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNDcwMDM3&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt="Profile testimony"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="font-bold text-lg font-cairo text-[#5885E9]">{data.name}</p>
        <p className="text-sm font-bold font-cairo">{data.job}</p>
        <p className="text-sm font-cairo">{data.desc}</p>
      </div>
    </div>
  );
}

const testi = [
  {
    name: "Dhanira",
    job: "Mahasiswa Pascasarjana Universitas Diponegoro",
    desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
  },
  {
    name: "Dhanira",
    job: "Mahasiswa Pascasarjana Universitas Diponegoro",
    desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
  },
  {
    name: "Dhanira",
    job: "Mahasiswa Pascasarjana Universitas Diponegoro",
    desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
  },
  {
    name: "Dhanira",
    job: "Mahasiswa Pascasarjana Universitas Diponegoro",
    desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
  },
];
export default function Testimony() {
  return (
    <section className="py-7 px-4 lg:px-10 xl:px-20 bg-white mx-auto my-10">
      <h2 className="font-bold text-3xl px-6 text-center">Apa Kata Mereka tentang TORCHE?</h2>
      <div className="flex gap-6 overflow-x-auto py-6">
        {testi.map((item, index) => (
          <TestCard data={item} />
        ))}
      </div>
    </section>
  );
}
