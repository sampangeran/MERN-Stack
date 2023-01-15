import ClassCard from "@/components/ClassCard";
import { ListClasses } from "@/modules/home/dummy-data";
import { CaretLeftFill, CaretRightFill, ChevronDown, Funnel } from "react-bootstrap-icons";

export default function CourseContent() {
  return (
    <main className="p-10 rounded-xl bg-white flex-1">
      <h2 className="text-xl pb-4 border-b border-[#D8D8D8]">Semua Kursus</h2>

      {/* Start filter */}
      <div className="mt-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="hidden lg:flex gap-2 text-sm text-[#5885E9] font-bold items-center">
          <p className="mr-2">Filter:</p>
          <div className="py-1 px-3 rounded-xl border border-[#5885E9]">
            <p>
              Urutkan Berdasarkan <ChevronDown className="inline" />
            </p>
          </div>
          <div className="py-1 px-3 rounded-xl border border-[#5885E9]">
            <p>
              Tingkat Penilaian <ChevronDown className="inline" />
            </p>
          </div>
          <div className="py-1 px-3 rounded-xl border border-[#5885E9]">
            <p>
              Pengajar <ChevronDown className="inline" />
            </p>
          </div>
        </div>

        <p className="lg:hidden border py-1 w-full text-center text-[#5885E9] rounded-lg border-[#5885E9] mb-3">
          <Funnel className="inline mr-2" /> Filter Komentar
        </p>

        <div className="flex gap-1 items-center">
          <CaretLeftFill color="#494949" />
          <p className="flex items-center justify-center h-8 w-8 rounded-full bg-[#5885E9] text-white text-sm">1</p>
          <p className="p-3 rounded-full text-[#5885E9] text-sm">2</p>
          <p className="p-3 rounded-full text-[#5885E9] text-sm">3</p>
          <p className="p-3 rounded-full text-[#5885E9] text-sm">4</p>
          <CaretRightFill color="#494949" />
        </div>
      </div>
      {/* end filter */}

      <div className="w-full py-5">
        <div className="grid lg:grid-cols-3 xl:grid-cols-2 w-fit mx-auto lg:gap-x-10 xl:gap-x-16 gap-y-10">
          {[...Array(8)].map((_, index) => (
            <ClassCard border key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
