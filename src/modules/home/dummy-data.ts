import { Easel2, People, PersonVideo3, Mortarboard, Pen, Book, Calendar4Week, CameraReels, ChatSquareText, Twitter, JournalAlbum, Linkedin, Instagram, Facebook } from "react-bootstrap-icons";

import team1 from "@/assets/tutors/team-1.webp";
import team2 from "@/assets/tutors/team-2.webp";
import team3 from "@/assets/tutors/team-3.webp";
import team4 from "@/assets/tutors/team-4.webp";

// import client1 from "@/assets/home/client-1.webp";
// import client2 from "@/assets/home/client-2.webp";
// import client3 from "@/assets/home/client-3.webp";
// import client4 from "@/assets/home/client-4.webp";
// import client5 from "@/assets/home/client-5.webp";
// import client6 from "@/assets/home/client-6.webp";
// import client7 from "@/assets/home/client-7.webp";
// import client8 from "@/assets/home/client-8.webp";
import { ListServicesProps } from "./components/Services";

export const ListClasses = [
  {
    banner: "",
    ratings: 9.0,
    rating_users: 50,
    lecturers: 2,
    title: "Dasar-dasar Fisika - Magnet, Listrik, & Gelombang, Optik",
    category: "Basic Engineering",
  },
  {
    banner: "",
    ratings: 9.0,
    rating_users: 50,
    lecturers: 2,
    title: "",
    category: "",
  },
  {
    banner: "",
    ratings: 9.0,
    rating_users: 50,
    lecturers: 2,
    title: "",
    category: "",
  },
  {
    banner: "",
    ratings: 9.0,
    rating_users: 50,
    lecturers: 2,
    title: "",
    category: "",
  },
  {
    banner: "",
    ratings: 9.0,
    rating_users: 50,
    lecturers: 2,
    title: "",
    category: "",
  },
  {
    banner: "",
    ratings: 9.0,
    rating_users: 50,
    lecturers: 2,
    title: "",
    category: "",
  },
];

export const ListServices: ListServicesProps[] = [
  {
    Icon: Easel2,
    title: "Lecturing Class",
    description: "Kelas tutor terdiri dari penjelasan materi dari tutor kami disertai contoh pemecahan masalahnya khususnya di bidang teknik kimia.",
    color: "#FF6442",
  },
  {
    Icon: People,
    title: "Consultation Class",
    description: "Siswa dapat bertanya tentang materi, pekerjaan rumah, tugas, dan proyek yang berkaitan dengan topik yang dipilih.",
    color: "#FFAE5F",
  },
  {
    Icon: PersonVideo3,
    title: "Exam Preparation Class",
    description: "Kelas persiapan ujian difokuskan bagi siswa yang ingin mengikuti ujian dengan materi yang tersedia.",
    color: "#51C1CB",
  },
  {
    Icon: Mortarboard,
    title: "Kelas Khusus (Advanced)",
    description: "Torche menyediakan kelas custom yang materi pembelajarannya bisa mengikuti kebutuhan siswa.",
    color: "#41cf2e",
  },
  {
    Icon: Pen,
    title: "Kelas Penulisan Karya Ilmiah",
    description: "Kelas yang disediakan bagi siswa yang membutuhkan bimbingan untuk skripsi, thesis, atau penulisan karya ilmiah lainnya.",
    color: "#5885E9",
  },
  {
    Icon: Book,
    title: "Kelas Sekolah Menengah Pertama dan Atas",
    description: "Kelas yang disediakan bagi siswa sekolah menengah (SMP, SMA, dan SMK), termasuk persiapan SBMPTN dan A-Level Test.",
    color: "#0B122A",
  },
];

export const ListBenefits = [
  {
    icon: Calendar4Week,
    title: "Flexible Time",
    description: "Waktu bisa diatur berdasarkan kesepakatan antara siswa dan tutor.",
  },
  {
    icon: CameraReels,
    title: "Free Class Recordings",
    description: "Gratis tanpa dipungut biaya apapun.",
  },
  {
    icon: ChatSquareText,
    title: "After-class Consultation",
    description: "Berlaku selama 7 hari setelah kelas dengan bergabung ke server Discord kami.",
  },
];
