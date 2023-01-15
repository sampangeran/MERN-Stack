import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "react-bootstrap-icons";

export default function CourseSidebar() {
  const searchCourse = () => {};
  const [showCategories, setShowCategories] = useState(true);
  return (
    <aside className="p-5 rounded-xl bg-white divide-y xl:sticky h-fit xl:top-24 ">
      <div className="pb-2">
        <h3 className="font-rajdhani text-xl text-[#151515] font-medium">Cari</h3>
        <div className="flex my-4 justify-between gap-4">
          <input className="form-input px-4 py-1 text-sm rounded-xl" placeholder="Tulis kelas yang ingin dicari" type="text" name="search" />
          <button aria-label="Search" className="p-3 rounded-full bg-[#5885E9]" onClick={searchCourse}>
            <Search color="#fff" />
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="font-rajdhani text-xl font-medium text-[#151515]">Kategori</h3>
          {showCategories ? <ChevronUp onClick={() => setShowCategories(false)} className="cursor-pointer" color="#151515" /> : <ChevronDown onClick={() => setShowCategories(true)} className="cursor-pointer" color="#151515" />}
        </div>
        {showCategories && (
          <div className="flex flex-col gap-2 text-white mt-3">
            <p className="p-2 bg-[#5885E9] rounded-md font-bold text-sm cursor-pointer">All Course (250)</p>
            <p className="p-2 text-[#5A5A5A] rounded-md text-sm cursor-pointer">Basic Engineering (100)</p>
            <p className="p-2 text-[#5A5A5A] rounded-md text-sm cursor-pointer">Basic Process Engineering (50)</p>
            <p className="p-2 text-[#5A5A5A] rounded-md text-sm cursor-pointer">Advanced Process Engineering (80)</p>
            <p className="p-2 text-[#5A5A5A] rounded-md text-sm cursor-pointer">Master Process Engineering (20)</p>
          </div>
        )}
      </div>
    </aside>
  );
}
