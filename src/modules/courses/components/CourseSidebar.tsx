import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "react-bootstrap-icons";
import { ListCategories } from "../dummy-data";

export default function CourseSidebar() {
  const searchCourse = () => {};
  const [showCategories, setShowCategories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleCategories = (idx: number) => {
    setSelectedCategory(idx);
  };
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
            {ListCategories.map((category, index) => (
              <p key={index} className={`p-2 ${selectedCategory === index ? "bg-[#5885E9] font-bold" : "text-[#5A5A5A]"}  rounded-md text-sm cursor-pointer`} onClick={() => handleCategories(index)}>
                {category}
              </p>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
