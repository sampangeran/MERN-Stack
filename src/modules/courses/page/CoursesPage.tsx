import CourseContent from "../components/CourseContent";
import CourseSidebar from "../components/CourseSidebar";

export default function CoursesPage() {
  return (
    <div>
      <div className="text-center bg-white py-5">
        <h1 className="font-bold text-4xl">Kursus</h1>
        <p>Cari pelajaran yang ingin kamu pahami dalam halaman ini</p>
      </div>
      <div className="mx-auto w-full py-8 lg:py-14 xl:py-20 px-5 lg:px-10 xl:px-28 bg-[#F5F7FF]">
        <div className="flex flex-col xl:flex-row justify-between gap-10">
          <CourseSidebar />
          <CourseContent />
        </div>
      </div>
    </div>
  );
}
