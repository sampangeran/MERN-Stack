import Image from "next/image";
import { useState } from "react";
import { Share, X } from "react-bootstrap-icons";
import CourseMenuDetail from "./CourseMenuDetail";

const ListMenu = ["Deskripsi", "Silabus", "Pengajar", "Detail"];

export default function CourseModal({ closeModal }: { closeModal: () => void }) {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleMenu = (idx: number) => {
    if (idx === selectedMenu) return;
    setSelectedMenu(idx);
  };

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 z-50 bg-[#151515]/40 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full lg:w-[40%] h-full lg:h-auto max-w-lg overflow-hidden relative">
        <div onClick={closeModal} className="bg-white cursor-pointer rounded-full overflow-hidden p-1 absolute z-50 top-0 right-0 m-2">
          <X size={20} color="#000" />
        </div>
        <div className="w-full h-52 overflow-hidden relative">
          <Image alt="Course Image" src="https://images.unsplash.com/photo-1671343703196-005064ab7940" fill className="object-cover" />
        </div>
        <div className="p-6">
          <div className="flex gap-3 items-center">
            <p className="bg-[#5885E9] rounded-full font-bold text-sm text-white px-4 py-2">Daftar Kelas</p>
            <div className="rounded-full p-2 border border-[#5885E9]">
              <Share color="#5885E9" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            {/* Rating elements */}
            <div className="rounded-2xl bg-[#F3F3F3] px-2 py-1 flex items-center">
              <p className="text-xs">
                <span>
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
            {/* Users elements */}
            <div className="flex items-center">
              <p className="text-xs">
                <span>
                  <svg className="inline" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_549_38741)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8365 5.78928C17.8888 5.84153 17.9304 5.9036 17.9588 5.97194C17.9871 6.04028 18.0017 6.11354 18.0017 6.18753C18.0017 6.26152 17.9871 6.33478 17.9588 6.40312C17.9304 6.47145 17.8888 6.53353 17.8365 6.58578L14.4615 9.96078C14.4092 10.0132 14.3471 10.0547 14.2788 10.0831C14.2105 10.1114 14.1372 10.126 14.0632 10.126C13.9892 10.126 13.916 10.1114 13.8476 10.0831C13.7793 10.0547 13.7172 10.0132 13.665 9.96078L11.9775 8.27328C11.8718 8.16766 11.8125 8.0244 11.8125 7.87503C11.8125 7.72566 11.8718 7.5824 11.9775 7.47678C12.0831 7.37116 12.2263 7.31182 12.3757 7.31182C12.5251 7.31182 12.6683 7.37116 12.774 7.47678L14.0632 8.76715L17.04 5.78928C17.0922 5.73689 17.1543 5.69533 17.2226 5.66698C17.291 5.63862 17.3642 5.62402 17.4382 5.62402C17.5122 5.62402 17.5855 5.63862 17.6538 5.66698C17.7221 5.69533 17.7842 5.73689 17.8365 5.78928Z"
                        fill="#5885E9"
                      />
                      <path
                        d="M1.125 15.75C1.125 15.75 0 15.75 0 14.625C0 13.5 1.125 10.125 6.75 10.125C12.375 10.125 13.5 13.5 13.5 14.625C13.5 15.75 12.375 15.75 12.375 15.75H1.125ZM6.75 9C7.64511 9 8.50355 8.64442 9.13649 8.01149C9.76942 7.37855 10.125 6.52011 10.125 5.625C10.125 4.72989 9.76942 3.87145 9.13649 3.23851C8.50355 2.60558 7.64511 2.25 6.75 2.25C5.85489 2.25 4.99645 2.60558 4.36351 3.23851C3.73058 3.87145 3.375 4.72989 3.375 5.625C3.375 6.52011 3.73058 7.37855 4.36351 8.01149C4.99645 8.64442 5.85489 9 6.75 9Z"
                        fill="#5885E9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_549_38741">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>{" "}
                2 Lecturers
              </p>
            </div>
          </div>
          <h2 className="text-lg">Dasar-Dasar Fisika -Magnet, Listrik & Gelombang, Optik</h2>
          <p className="text-sm text-[#5A5A5A]">Basic Engineering</p>
          <div className="flex w-full gap-4 py-2 border-b border-[#A7A7A7] mt-2">
            {ListMenu.map((menu, index) => (
              <p key={index} className={`text-xs cursor-pointer ${index === selectedMenu ? "text-[#5885E9]" : "text-[#494949]"} `} onClick={() => handleMenu(index)}>
                {menu}
              </p>
            ))}
          </div>
          <CourseMenuDetail menu={selectedMenu} />
        </div>
      </div>
    </div>
  );
}
