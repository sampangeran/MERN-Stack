import { useState } from "react";
import { ChevronDown, ChevronUp, Funnel } from 'react-bootstrap-icons';

const Filter: React.FC = () => {
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
        <div className="relative">
          <button
            className="flex items-center justify-between bg-white border border-blue-500 rounded-lg px-2 py-1 gap-2"
            onClick={handleSortByToggle}
          >
            <span>Urutkan berdasarkan</span>
            {sortByOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          {sortByOpen && (
            <div className="absolute z-10 top-10 left-0 bg-white border border-blue-500 rounded-lg p-2">
              {/* Dropdown content goes here */}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center justify-between bg-white border border-blue-500 rounded-lg px-2 py-1 gap-2"
            onClick={handleEventTypeToggle}
          >
            <span>Jenis event</span>
            {eventTypeOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          {eventTypeOpen && (
            <div className="absolute z-10 top-10 left-0 bg-white border border-blue-500 rounded-lg p-2">
              {/* Dropdown content goes here */}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center justify-between bg-white border border-blue-500 rounded-lg px-2 py-1 gap-2"
            onClick={handleMonthToggle}
            >
              <span>Bulan</span>
              {monthOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {monthOpen && (
              <div className="absolute z-10 top-10 left-0 bg-white border border-blue-500 rounded-lg p-2">
                {/* Dropdown content goes here */}
              </div>
            )}
        </div>
      </div>
      <div className="flex md:hidden justify-center font-bold text-[14px] text-[#5885E9]">
        <button
            className="flex items-center justify-between bg-white border border-blue-500 rounded-lg px-12 py-1 gap-2"
            onClick={handleSortByToggle}
          >
            <Funnel />
            <span>Filter Pencarian</span>
          </button>
          {sortByOpen && (
            <div className="absolute z-10 top-10 left-0 bg-white border border-blue-500 rounded-lg p-2">
              {/* Dropdown content goes here */}
            </div>
          )}
      </div>
    </>
  );
};

export default Filter;



      