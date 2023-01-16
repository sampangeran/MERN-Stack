import ClassCard from "@/components/ClassCard";
import Image from "next/image";
import { Card } from "react-bootstrap";

export default function Classes() {
  return (
    <section className="bg-[#F5F7FF] text-[#151515] py-10 lg:py-16 font-rajdhani">
      <div className="flex w-full mx-auto flex-col lg:flex-row items-center justify-between overflow-hidden">
        <div className="text-center lg:text-left flex-1 p-4 xl:p-20 lg:p-10">
          <h1 className="font-bold text-2xl lg:text-4xl">Kelas Unggulan</h1>
          <p className="font-light mt-2 text-sm lg:text-base font-cairo">Kelas-kelas terbaik untuk menunjang pembelajaranmu!</p>
        </div>

        <div className="flex gap-2 w-full lg:w-[60%] xl:w-[55%] overflow-x-auto py-8 px-10 lg:px-4">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </section>
  );
}
