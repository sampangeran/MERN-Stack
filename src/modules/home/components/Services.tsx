import Image from "next/image";
import { ListServices } from "../dummy-data";
import womanImg from "@/assets/home/Woman1.png";

export interface ListServicesProps {
  Icon: any;
  title: string;
  description: string;
  color: string;
}
function ServiceCard({ data }: { data: ListServicesProps }) {
  return (
    <div className="bg-white rounded-xl font-cairo w-full lg:w-64 xl:w-72 max-w-sm shadow-xl flex-none overflow-hidden">
      <div className="p-4">
        <div className="p-3 rounded-full border w-fit" style={{ borderColor: data.color }}>
          <data.Icon color={data.color} size={35} />
        </div>
        <div className="border-b border-[#A7A7A7] border-opacity-50">
          <p className="xl:text-lg font-bold my-3">{data.title}</p>
          <p className="text-sm font-light my-2">{data.description}</p>
        </div>

        <button className="py-2 mt-3 px-4 text-white font-bold bg-[#5885E9] rounded-3xl">Baca Detail</button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-[#F5F7FF] text-[#151515] py-10 lg:py-16 font-rajdhani">
      <div className="mx-auto">
        <h2 className="font-bold text-center text-2xl lg:text-4xl">Layanan Kami</h2>
        <p className="text-center font-cairo text-sm lg:text-base my-3 px-6">Torche menyediakan berbagai layanan edukasi yang mendukung kamu untuk menjadi seorang insinyur teknik kimia yang berkualitas tinggi</p>
        <p className="text-center font-cairo text-[#5885E9] underline underline-offset-2 text-sm lg:text-base">Pelajar lebih lanjut</p>
      </div>
      <div className="flex w-full mx-auto flex-col lg:flex-row items-center justify-between overflow-hidden">
        <div className="hidden md:block flex-1 relative p-4 xl:p-20 lg:p-10">
          <Image src={womanImg} height={400} alt="Layanan kami" />
        </div>

        <div className="flex gap-2 w-full lg:w-[60%] xl:w-[55%] overflow-x-auto py-8 px-10 lg:px-4">
          {ListServices.map((service, index) => (
            <ServiceCard data={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
