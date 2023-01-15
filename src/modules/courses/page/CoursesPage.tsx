import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import CourseContent from "../components/CourseContent";
import CourseSidebar from "../components/CourseSidebar";
import { ListRegisterSteps } from "../dummy-data";
import imgIllus from "@/assets/courses/img-illus.png";
import Image from "next/image";

export default function CoursesPage() {
  const [itemDropdown, setItemDropdown] = useState(0);

  const handleMultiDropdown = (idx: number) => {
    if (idx === itemDropdown) {
      setItemDropdown(-1);
    } else {
      setItemDropdown(idx);
    }
  };
  return (
    <div>
      <div className="text-center bg-white py-5 px-5">
        <h1 className="font-bold text-4xl">Kursus</h1>
        <p className="text-xs lg:text-base">Cari pelajaran yang ingin kamu pahami dalam halaman ini</p>
      </div>
      <div className="mx-auto w-full py-8 lg:py-14 xl:py-20 px-5 lg:px-10 xl:px-28 bg-[#F5F7FF]">
        <div className="flex flex-col xl:flex-row justify-between gap-10">
          <CourseSidebar />
          <CourseContent />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="p-5 lg:px-32 xl:px-20 py-20 bg-gradient-to-br from-gray-800 via-blue-700 to-purple-600 text-white flex-1">
          <h2 className="text-3xl lg:text-4xl text-center xl:text-left">Cara Mendaftar Kelas</h2>
          <p className="text-base lg:text-sm text-center xl:text-left">Lorem ipsum dolor sit amet consectetur. Laoreet volutpat mauris aecenas maecenas. dolor sit</p>

          <div className="flex flex-col gap-3 mt-6">
            {ListRegisterSteps.map((item, index) => (
              <div key={index} className="py-3 border-b border-[#D8D8D8]">
                <div className="flex justify-between cursor-pointer items-center" onClick={() => handleMultiDropdown(index)}>
                  <h3 className="text-lg lg:text-xl font-cairo">{item.step}</h3>
                  {itemDropdown === index ? <ChevronUp color="#fff" /> : <ChevronDown color="#fff" />}
                </div>
                {itemDropdown === index && <p className="p-3 pr-5 text-sm lg:text-base">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <Image className="hidden xl:block overflow-hidden object-cover" width={500} src={imgIllus} alt="Illustration" />
      </div>
    </div>
  );
}
