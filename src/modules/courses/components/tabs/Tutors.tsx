import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { ListTutors } from "../../dummy-data";

export default function Tutors() {
  const [showDetail, setShowDetail] = useState(0);

  const handleShowDetail = (idx: number) => {
    if (showDetail === idx) {
      setShowDetail(-1);
    } else {
      setShowDetail(idx);
    }
  };
  return (
    <>
      <p className="font-bold text-sm mb-3">Total 2 Pengajar</p>
      <div className="overflow-y-auto max-h-80 lg:max-h-44 flex flex-col gap-3">
        {ListTutors.map((tutor, index) => (
          <div className="bg-[#F5F7FF] p-3" key={index}>
            <div className="flex justify-between gap-2">
              <div className="flex gap-2 items-start">
                <div className="rounded-full overflow-hidden flex-none w-9 h-9 relative">
                  <Image className="object-cover" fill src={tutor.avatar} alt={tutor.name} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm flex items-center gap-2 flex-wrap">
                    {tutor.name}
                    <span>
                      <div className="rounded-2xl bg-[#F3F3F3] font-normal px-1 py-0.5 flex items-center">
                        <p className="text-xs">
                          <span className="inline">
                            <svg className="inline" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.0718 5.48261L10.5751 4.79826L8.56497 0.53081C8.51007 0.41397 8.41974 0.319385 8.30817 0.261892C8.02834 0.117233 7.6883 0.237783 7.54838 0.53081L5.53824 4.79826L1.04153 5.48261C0.917554 5.50116 0.804206 5.56236 0.717425 5.65509C0.61251 5.76801 0.554698 5.91993 0.55669 6.07746C0.558683 6.23499 0.620318 6.38525 0.728051 6.49523L3.98148 9.81682L3.21284 14.5071C3.19482 14.6162 3.20635 14.7284 3.24612 14.831C3.2859 14.9336 3.35233 15.0225 3.43789 15.0876C3.52344 15.1526 3.62469 15.1913 3.73017 15.1992C3.83564 15.2071 3.9411 15.1838 4.03461 15.1321L8.05668 12.9177L12.0787 15.1321C12.1885 15.1933 12.3161 15.2137 12.4383 15.1915C12.7464 15.1358 12.9536 14.8298 12.9005 14.5071L12.1319 9.81682L15.3853 6.49523C15.4739 6.40435 15.5323 6.28565 15.55 6.15583C15.5978 5.83128 15.3818 5.53083 15.0718 5.48261Z"
                                fill="#FFAE5F"
                              />
                            </svg>
                          </span>{" "}
                          9,6/10 <span className="text-slate-500">(50)</span>
                        </p>
                      </div>
                    </span>
                  </p>
                  <p className="text-xs mt-1">{tutor.bio}</p>
                </div>
              </div>
              <div>{showDetail === index ? <ChevronDown size={15} color="#494949" /> : <ChevronUp size={15} color="#494949" />}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
