import { ArrowLeft, ChevronLeft, ChevronRight, ChevronDown, CaretLeftFill, CaretRightFill, Funnel } from "react-bootstrap-icons";
import profPic from "@/assets/tutors/tutors-6.webp";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import { ListEducations, ListExperience } from "../dummy-data";
import ClassCard from "@/components/ClassCard";

function Rating() {
  return (
    <div className="rounded-2xl bg-[#F3F3F3] text-sm font-cairo px-2 py-1 flex items-center flex-none">
      <p className="text-sm">
        <span>
          <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.0718 5.48261L10.5751 4.79826L8.56497 0.53081C8.51007 0.41397 8.41974 0.319385 8.30817 0.261892C8.02834 0.117233 7.6883 0.237783 7.54838 0.53081L5.53824 4.79826L1.04153 5.48261C0.917554 5.50116 0.804206 5.56236 0.717425 5.65509C0.61251 5.76801 0.554698 5.91993 0.55669 6.07746C0.558683 6.23499 0.620318 6.38525 0.728051 6.49523L3.98148 9.81682L3.21284 14.5071C3.19482 14.6162 3.20635 14.7284 3.24612 14.831C3.2859 14.9336 3.35233 15.0225 3.43789 15.0876C3.52344 15.1526 3.62469 15.1913 3.73017 15.1992C3.83564 15.2071 3.9411 15.1838 4.03461 15.1321L8.05668 12.9177L12.0787 15.1321C12.1885 15.1933 12.3161 15.2137 12.4383 15.1915C12.7464 15.1358 12.9536 14.8298 12.9005 14.5071L12.1319 9.81682L15.3853 6.49523C15.4739 6.40435 15.5323 6.28565 15.55 6.15583C15.5978 5.83128 15.3818 5.53083 15.0718 5.48261Z"
              fill="#FFAE5F"
            />
          </svg>
        </span>{" "}
        9,6/10 <span className="text-slate-500">(50)</span>
      </p>
    </div>
  );
}

export default function TutorDetail() {
  return (
    <div className="mx-auto w-full py-8 lg:py-14 xl:py-20 px-5 lg:px-10 xl:px-28 bg-[#F5F7FF]">
      <div className="flex justify-between">
        <p className="font-bold text-[#5885E9]">
          <ArrowLeft className="inline" /> Back
        </p>
        <div className="flex justify-center items-center gap-2">
          <div className="rounded-full p-2 border border-[#5885E9]">
            <ChevronLeft size={15} color="#5885E9" />
          </div>
          <p>5/36</p>
          <div className="rounded-full p-2 border border-[#5885E9]">
            <ChevronRight size={15} color="#5885E9" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-4">
        <SectionWrapper cls="flex flex-col text-center lg:text-left lg:flex-row gap-6 items-center">
          <Image className="rounded-full overflow-hidden object-cover" src={profPic} alt="Tutor Profile Picture" width={200} height={200} />
          <div className="flex-1 flex flex-col gap-3">
            <div>
              <p className="text-white w-fit mx-auto lg:mx-0 py-2 text-sm lg:text-base px-4 font-bold rounded-3xl bg-[#3E5294]">
                <span className="mr-2">
                  <svg className="inline" width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.6677 11.2032L10.666 16.204C10.666 16.3185 10.6345 16.4308 10.5751 16.5286C10.5156 16.6264 10.4304 16.706 10.3288 16.7588C10.2271 16.8115 10.113 16.8352 9.99874 16.8275C9.88451 16.8198 9.7746 16.7808 9.68102 16.7148L6.49935 14.4757L3.31852 16.7148C3.22493 16.7806 3.11511 16.8193 3.00101 16.827C2.88691 16.8346 2.77291 16.8108 2.67142 16.7581C2.56992 16.7054 2.48483 16.6259 2.42539 16.5282C2.36596 16.4305 2.33447 16.3184 2.33435 16.204L2.33268 11.204C3.51398 12.1527 4.98426 12.6688 6.49935 12.6665C8.01511 12.6689 9.48605 12.1525 10.6677 11.2032ZM6.49935 0.166504C8.04645 0.166504 9.53018 0.781085 10.6241 1.87505C11.7181 2.96901 12.3327 4.45274 12.3327 5.99984C12.3327 7.54693 11.7181 9.03066 10.6241 10.1246C9.53018 11.2186 8.04645 11.8332 6.49935 11.8332C4.95225 11.8332 3.46852 11.2186 2.37456 10.1246C1.2806 9.03066 0.666016 7.54693 0.666016 5.99984C0.666016 4.45274 1.2806 2.96901 2.37456 1.87505C3.46852 0.781085 4.95225 0.166504 6.49935 0.166504Z"
                      fill="#FFAE5F"
                    />
                  </svg>
                </span>{" "}
                # Tutor Terbaik Bulan Desember
              </p>
            </div>
            <h1 className="font-rajdhani text-xl lg:text-5xl font-normal lg:font-bold text-[#151515]">Samuel Pangeran Aletheia</h1>
            <p className="text-sm lg:text-lg">M.Sc Chemical Engineering | Institut Teknologi Bandung</p>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="flex flex-none w-full lg:w-auto items-center">
                <p className="text-sm rounded-2xl bg-[#F3F3F3] px-2 py-1 mx-auto lg:mx-0">
                  <span>
                    <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.0718 5.48261L10.5751 4.79826L8.56497 0.53081C8.51007 0.41397 8.41974 0.319385 8.30817 0.261892C8.02834 0.117233 7.6883 0.237783 7.54838 0.53081L5.53824 4.79826L1.04153 5.48261C0.917554 5.50116 0.804206 5.56236 0.717425 5.65509C0.61251 5.76801 0.554698 5.91993 0.55669 6.07746C0.558683 6.23499 0.620318 6.38525 0.728051 6.49523L3.98148 9.81682L3.21284 14.5071C3.19482 14.6162 3.20635 14.7284 3.24612 14.831C3.2859 14.9336 3.35233 15.0225 3.43789 15.0876C3.52344 15.1526 3.62469 15.1913 3.73017 15.1992C3.83564 15.2071 3.9411 15.1838 4.03461 15.1321L8.05668 12.9177L12.0787 15.1321C12.1885 15.1933 12.3161 15.2137 12.4383 15.1915C12.7464 15.1358 12.9536 14.8298 12.9005 14.5071L12.1319 9.81682L15.3853 6.49523C15.4739 6.40435 15.5323 6.28565 15.55 6.15583C15.5978 5.83128 15.3818 5.53083 15.0718 5.48261Z"
                        fill="#FFAE5F"
                      />
                    </svg>
                  </span>{" "}
                  4,6/5 <span className="text-slate-500">(156 reviews)</span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm">
                  <span>
                    <svg className="inline" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  3 Kelas
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm">
                  <span>
                    <svg className="inline" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 1.75C5.7875 1.75 5.6095 1.678 5.466 1.534C5.322 1.3905 5.25 1.2125 5.25 1C5.25 0.7875 5.322 0.60925 5.466 0.46525C5.6095 0.32175 5.7875 0.25 6 0.25H9C9.2125 0.25 9.39075 0.32175 9.53475 0.46525C9.67825 0.60925 9.75 0.7875 9.75 1C9.75 1.2125 9.67825 1.3905 9.53475 1.534C9.39075 1.678 9.2125 1.75 9 1.75H6ZM7.5 10C7.7125 10 7.89075 9.928 8.03475 9.784C8.17825 9.6405 8.25 9.4625 8.25 9.25V6.25C8.25 6.0375 8.17825 5.85925 8.03475 5.71525C7.89075 5.57175 7.7125 5.5 7.5 5.5C7.2875 5.5 7.1095 5.57175 6.966 5.71525C6.822 5.85925 6.75 6.0375 6.75 6.25V9.25C6.75 9.4625 6.822 9.6405 6.966 9.784C7.1095 9.928 7.2875 10 7.5 10ZM7.5 16C6.575 16 5.703 15.822 4.884 15.466C4.0655 15.1095 3.35 14.625 2.7375 14.0125C2.125 13.4 1.6405 12.6845 1.284 11.866C0.928 11.047 0.75 10.175 0.75 9.25C0.75 8.325 0.928 7.453 1.284 6.634C1.6405 5.8155 2.125 5.1 2.7375 4.4875C3.35 3.875 4.0655 3.39075 4.884 3.03475C5.703 2.67825 6.575 2.5 7.5 2.5C8.275 2.5 9.01875 2.625 9.73125 2.875C10.4438 3.125 11.1125 3.4875 11.7375 3.9625L12.2812 3.41875C12.4187 3.28125 12.5875 3.2125 12.7875 3.2125C12.9875 3.2125 13.1625 3.2875 13.3125 3.4375C13.45 3.575 13.5187 3.75 13.5187 3.9625C13.5187 4.175 13.45 4.35 13.3125 4.4875L12.7875 5.0125C13.2625 5.6375 13.625 6.30625 13.875 7.01875C14.125 7.73125 14.25 8.475 14.25 9.25C14.25 10.175 14.072 11.047 13.716 11.866C13.3595 12.6845 12.875 13.4 12.2625 14.0125C11.65 14.625 10.9345 15.1095 10.116 15.466C9.297 15.822 8.425 16 7.5 16Z"
                        fill="#5885E9"
                      />
                    </svg>
                  </span>{" "}
                  240 Jam Mengajar
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper title="Tentang Saya">
          <p className="text-sm">
            Samuel merupakan seorang process engineer dan edukator. Dia lulusan sarjana dari Universitas Indonesia (2019) dan (S2) dari Institut Teknologi Bandung (2022). Beliau telah menangani banyak proyek di industri minyak dan gas serta
            industri petrokimia di seluruh Indonesia. Sebagai pendidik, Samuel mengajar lebih dari 200 mahasiswa teknik kimia. Di Torche Education, Samuel menjadi tutor dan mengajar topik teknik kimia, seperti Chemical Engineering
            Mathematics, Chemical Engineering Thermodynamics, Process Equipment Design.
          </p>
        </SectionWrapper>

        <SectionWrapper title="Edukasi">
          <div className="flex flex-col divide-y w-fit">
            {ListEducations.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-1 lg:gap-10 py-3">
                <p className="text-[#5885E9]">{item.year}</p>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-sm">{item.campus}</p>
                  <p className="text-sm">{item.major}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Pengalaman">
          <div className="flex flex-col divide-y w-fit">
            {ListExperience.map((item, index) => (
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 py-3">
                <p className="text-[#5885E9]">{item.year}</p>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-sm">{item.company}</p>
                  <p className="text-sm">{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper title="Mengajar pada Kelas">
          <div className="flex gap-5 overflow-x-auto py-8">
            <ClassCard border />
            <ClassCard border />
            <ClassCard border />
            <ClassCard border />
            <ClassCard border />
            <ClassCard border />
          </div>
        </SectionWrapper>

        <SectionWrapper sideTitle={<Rating />} title="Ratings">
          <>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="hidden lg:flex gap-2 text-sm text-[#5885E9] font-bold items-center">
                <p className="mr-2">Filter Komentar:</p>
                <div className="py-1 px-3 rounded-xl border border-[#5885E9]">
                  <p>
                    Tingkat Penilaian <ChevronDown className="inline" />
                  </p>
                </div>
                <div className="py-1 px-3 rounded-xl border border-[#5885E9]">
                  <p>
                    Kelas yang Diajar <ChevronDown className="inline" />
                  </p>
                </div>
                <div className="py-1 px-3 rounded-xl border border-[#5885E9]">
                  <p>
                    Urutan Berdasarkan <ChevronDown className="inline" />
                  </p>
                </div>
              </div>

              <p className="lg:hidden border py-1 w-full text-center text-[#5885E9] rounded-lg border-[#5885E9] mb-3">
                <Funnel className="inline mr-2" /> Filter Komentar
              </p>

              <div className="flex gap-2 items-center">
                <CaretLeftFill color="#494949" />
                <p className="flex items-center justify-center h-8 w-8 rounded-full bg-[#5885E9] text-white text-sm">1</p>
                <p className="p-3 rounded-full text-[#5885E9] text-sm">2</p>
                <p className="p-3 rounded-full text-[#5885E9] text-sm">3</p>
                <p className="p-3 rounded-full text-[#5885E9] text-sm">4</p>
                <CaretRightFill color="#494949" />
              </div>
            </div>
            {[...Array(4)].map((_, index) => (
              <div className="flex justify-between items-start my-2">
                <div className="flex gap-4 items-start mr-6">
                  <Image
                    src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzUzNjgzNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                    alt="Elliana"
                    width={50}
                    height={50}
                    className="rounded-full flex-none overflow-hidden object-cover"
                  />
                  <div className="border-b border-[#D8D8D8] py-2">
                    <h3 className="font-rajdhani font-bold text-xl flex gap-3">
                      Elliana{" "}
                      <div className="rounded-2xl bg-[#F3F3F3] text-sm font-cairo px-2 py-1 flex items-center flex-none">
                        <p className="text-sm">
                          <span>
                            <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.0718 5.48261L10.5751 4.79826L8.56497 0.53081C8.51007 0.41397 8.41974 0.319385 8.30817 0.261892C8.02834 0.117233 7.6883 0.237783 7.54838 0.53081L5.53824 4.79826L1.04153 5.48261C0.917554 5.50116 0.804206 5.56236 0.717425 5.65509C0.61251 5.76801 0.554698 5.91993 0.55669 6.07746C0.558683 6.23499 0.620318 6.38525 0.728051 6.49523L3.98148 9.81682L3.21284 14.5071C3.19482 14.6162 3.20635 14.7284 3.24612 14.831C3.2859 14.9336 3.35233 15.0225 3.43789 15.0876C3.52344 15.1526 3.62469 15.1913 3.73017 15.1992C3.83564 15.2071 3.9411 15.1838 4.03461 15.1321L8.05668 12.9177L12.0787 15.1321C12.1885 15.1933 12.3161 15.2137 12.4383 15.1915C12.7464 15.1358 12.9536 14.8298 12.9005 14.5071L12.1319 9.81682L15.3853 6.49523C15.4739 6.40435 15.5323 6.28565 15.55 6.15583C15.5978 5.83128 15.3818 5.53083 15.0718 5.48261Z"
                                fill="#FFAE5F"
                              />
                            </svg>
                          </span>{" "}
                          5/5
                        </p>
                      </div>
                    </h3>
                    <p className="text-sm mt-3">
                      Kak Sampang adalah tutor yang baik, Kak Sampang bisa menjelaskan hal yang complex dengan konsep yang simple. Ia adalah tutor yang sangat baik, hal tersebut dikarenakan ia bisa menjelaskan hal yang kompleks menjadi
                      mudah dipahami.
                    </p>
                  </div>
                </div>
                <div className="hidden rounded-2xl bg-[#F3F3F3] text-sm font-cairo px-2 py-1 lg:flex items-center flex-none">
                  <p className="text-sm">
                    <span>
                      <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15.0718 5.48261L10.5751 4.79826L8.56497 0.53081C8.51007 0.41397 8.41974 0.319385 8.30817 0.261892C8.02834 0.117233 7.6883 0.237783 7.54838 0.53081L5.53824 4.79826L1.04153 5.48261C0.917554 5.50116 0.804206 5.56236 0.717425 5.65509C0.61251 5.76801 0.554698 5.91993 0.55669 6.07746C0.558683 6.23499 0.620318 6.38525 0.728051 6.49523L3.98148 9.81682L3.21284 14.5071C3.19482 14.6162 3.20635 14.7284 3.24612 14.831C3.2859 14.9336 3.35233 15.0225 3.43789 15.0876C3.52344 15.1526 3.62469 15.1913 3.73017 15.1992C3.83564 15.2071 3.9411 15.1838 4.03461 15.1321L8.05668 12.9177L12.0787 15.1321C12.1885 15.1933 12.3161 15.2137 12.4383 15.1915C12.7464 15.1358 12.9536 14.8298 12.9005 14.5071L12.1319 9.81682L15.3853 6.49523C15.4739 6.40435 15.5323 6.28565 15.55 6.15583C15.5978 5.83128 15.3818 5.53083 15.0718 5.48261Z"
                          fill="#FFAE5F"
                        />
                      </svg>
                    </span>{" "}
                    5/5
                  </p>
                </div>
              </div>
            ))}
            <p className="font-bold text-center mt-5 text-[#5885E9] underline underline-offset-4">Lihat Ulasan Lebih Banyak</p>
          </>
        </SectionWrapper>
      </div>
    </div>
  );
}
