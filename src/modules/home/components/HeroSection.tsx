import Image from "next/image";
import heroImage from "@/assets/home/heroImg.png";

export default function HeroSection() {
  return (
    <div className="bg-[#0B122A] text-white pb-10 lg:py-16 font-rajdhani">
      <div className="flex w-full mx-auto flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">
        <div className="text-center lg:text-left flex-1 xl:p-20 p-10">
          <h1 className="font-bold text-4xl lg:text-5xl">Membantu Karirmu dalam Bidang Teknik</h1>
          <p className="font-light text-lg lg:text-xl mt-2">Program berkualitas hanya untukmu</p>
          <div className="flex flex-col items-center lg:flex-row gap-4 text-lg justify-center lg:justify-start my-6">
            <button className="py-2.5 px-8 bg-blue-500 rounded-full font-semibold  w-fit">Daftar Kelas</button>
            <button className="py-2.5 px-8 bg-white rounded-full font-semibold text-[#5885E9] w-fit">Layanan Kami</button>
          </div>
        </div>
        <Image src={heroImage} className="w-full lg:w-[50%] xl:w-[55%]" alt="Hero Image" />
      </div>
    </div>
  );
}
