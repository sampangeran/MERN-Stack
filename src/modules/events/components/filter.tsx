import { useState } from "react";
import { ChevronDown, ChevronUp, Funnel } from 'react-bootstrap-icons';

type FilterProps = {
  handleSortBy: React.MouseEventHandler<HTMLElement>;
  handleEventType: () => void;
  sortBy: string;
  eventType: string;
};

const Filter: React.FC<FilterProps> = ({sortBy, handleSortBy, eventType, handleEventType}) => {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [eventTypeOpen, setEventTypeOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);

  const handleSortByToggle = () => {
    setSortByOpen(!sortByOpen);
  };

  const handleEventTypeToggle = () => {
    setEventTypeOpen(!eventTypeOpen);
  };

  const handleMonthToggle = () => {
    setMonthOpen(!monthOpen);
  };

  return (
    <>
      <div className="hidden md:flex space-x-4 text-[14px] justify-center items-center text-[#5885E9] font-cairo font-bold">
        <p className="capitalize">Filter pencarian:</p>
        <select className=" bg-white border border-blue-500 rounded-lg p-2 text-sm w-[176px]" onChange={handleSortBy} value={sortBy}>
          <option className="cursor-pointer hover:bg-blue-100" value="">Urutkan Berdasarkan</option>
          <option className="cursor-pointer hover:bg-blue-100" value="date-desc">Terlama</option>
          <option className="cursor-pointer hover:bg-blue-100" value="date-asc">Terbaru</option>
          <option className="cursor-pointer hover:bg-blue-100" value="name-asc">Ascending (A-Z)</option>
          <option className="cursor-pointer hover:bg-blue-100" value="name-desc">Descending (Z-A)</option>
        </select>
        <select className=" bg-white border border-blue-500 rounded-lg p-2 text-sm w-[115px]" onChange={handleEventType} value={eventType}>
          <option className="cursor-pointer hover:bg-blue-100" value="">Jenis Event</option>
          <option className="cursor-pointer hover:bg-blue-100" value="webinar">Webinar</option>
          <option className="cursor-pointer hover:bg-blue-100" value="bootcamp">Bootcamp</option>
        </select>
        <select className=" bg-white border border-blue-500 rounded-lg p-2 text-sm w-[82px]">
          <option className="cursor-pointer hover:bg-blue-100">Bulan</option>
          <option className="cursor-pointer hover:bg-blue-100">Januari</option>
          <option className="cursor-pointer hover:bg-blue-100">Februari</option>
          <option className="cursor-pointer hover:bg-blue-100">Maret</option>
          <option className="cursor-pointer hover:bg-blue-100">April</option>
          <option className="cursor-pointer hover:bg-blue-100">Mei</option>
          <option className="cursor-pointer hover:bg-blue-100">Juni</option>
          <option className="cursor-pointer hover:bg-blue-100">Juli</option>
          <option className="cursor-pointer hover:bg-blue-100">Agustus</option>
          <option className="cursor-pointer hover:bg-blue-100">September</option>
          <option className="cursor-pointer hover:bg-blue-100">Oktober</option>
          <option className="cursor-pointer hover:bg-blue-100">November</option>
          <option className="cursor-pointer hover:bg-blue-100">Desember</option>
        </select>
      </div>
      <div className="flex flex-col md:hidden items-center font-bold text-[14px] text-[#5885E9]">
        <button
            className="flex items-center justify-between bg-white border border-blue-500 rounded-lg px-12 py-1 gap-2"
            onClick={handleSortByToggle}
          >
            <Funnel />
            <span>Filter Pencarian</span>
          </button>
          {sortByOpen && (
            <div className="flex flex-col items-center mt-2 gap-2">
              <select className=" bg-white border border-blue-500 rounded-lg p-2 text-sm w-[176px]" onChange={handleSortBy} value={sortBy}>
                <option className="cursor-pointer hover:bg-blue-100" value="">Urutkan Berdasarkan</option>
                <option className="cursor-pointer hover:bg-blue-100" value="date-desc">Terlama</option>
                <option className="cursor-pointer hover:bg-blue-100" value="date-asc">Terbaru</option>
                <option className="cursor-pointer hover:bg-blue-100" value="name-asc">Ascending (A-Z)</option>
                <option className="cursor-pointer hover:bg-blue-100" value="name-desc">Descending (Z-A)</option>
              </select>
              <select className=" bg-white border border-blue-500 rounded-lg p-2 text-sm w-[115px]" onChange={handleEventType} value={eventType}>
                <option className="cursor-pointer hover:bg-blue-100" value="">Jenis Event</option>
                <option className="cursor-pointer hover:bg-blue-100" value="webinar">Webinar</option>
                <option className="cursor-pointer hover:bg-blue-100" value="bootcamp">Bootcamp</option>
              </select>
              <select className=" bg-white border border-blue-500 rounded-lg p-2 text-sm w-[82px]">
                <option className="cursor-pointer hover:bg-blue-100">Bulan</option>
                <option className="cursor-pointer hover:bg-blue-100">Januari</option>
                <option className="cursor-pointer hover:bg-blue-100">Februari</option>
                <option className="cursor-pointer hover:bg-blue-100">Maret</option>
                <option className="cursor-pointer hover:bg-blue-100">April</option>
                <option className="cursor-pointer hover:bg-blue-100">Mei</option>
                <option className="cursor-pointer hover:bg-blue-100">Juni</option>
                <option className="cursor-pointer hover:bg-blue-100">Juli</option>
                <option className="cursor-pointer hover:bg-blue-100">Agustus</option>
                <option className="cursor-pointer hover:bg-blue-100">September</option>
                <option className="cursor-pointer hover:bg-blue-100">Oktober</option>
                <option className="cursor-pointer hover:bg-blue-100">November</option>
                <option className="cursor-pointer hover:bg-blue-100">Desember</option>
              </select>
            </div>
          )}
      </div>
    </>
  );
};

export default Filter;



      