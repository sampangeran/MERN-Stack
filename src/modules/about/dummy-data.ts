import { FeatureCardProps } from "./components/FeatureCard";
import { CardChecklist, Laptop, HandThumbsUp } from "react-bootstrap-icons";
import afob from "@/assets/about/clients/afob.png";
import aiche from "@/assets/about/clients/aiche.png";
import bcg from "@/assets/about/clients/bcg.png";
import bkkmtki from "@/assets/about/clients/bkkmtki.png";
import bukit_asam from "@/assets/about/clients/bukit_asam.png";
import chandra_asri from "@/assets/about/clients/chandra-asri.png";
import chengchi from "@/assets/about/clients/chengchi.png";
import exxon_mobil from "@/assets/about/clients/exxon_mobil.png";
import ftui from "@/assets/about/clients/ftui.png";
import imtk from "@/assets/about/clients/imtk.png";
import itb from "@/assets/about/clients/itb.png";
import itera from "@/assets/about/clients/itera.png";
import itn from "@/assets/about/clients/itn.png";
import its from "@/assets/about/clients/its.png";
import ntust from "@/assets/about/clients/ntust.png";
import pertamina from "@/assets/about/clients/pertamina.png";
import rcbe from "@/assets/about/clients/rcbe.png";
import reknind from "@/assets/about/clients/reknind.png";
import sbe from "@/assets/about/clients/sbe.png";
import sharjah from "@/assets/about/clients/sharjah.png";
import synthetic_rubber from "@/assets/about/clients/synthetic_rubber.png";
import tppi from "@/assets/about/clients/tppi.png";
import ub from "@/assets/about/clients/ub.png";
import ucl from "@/assets/about/clients/ucl.png";
import ugm from "@/assets/about/clients/ugm.png";
import ui from "@/assets/about/clients/ui.png";
import um from "@/assets/about/clients/um.png";
import ums from "@/assets/about/clients/ums.png";
import undip from "@/assets/about/clients/undip.png";
import unioleo from "@/assets/about/clients/unioleo.png";
import univ_unknown from "@/assets/about/clients/univ_unknown.png";
import unri from "@/assets/about/clients/unri.png";
import unsri from "@/assets/about/clients/unsri.png";
import untan from "@/assets/about/clients/untan.png";
import upn from "@/assets/about/clients/upn.png";
import usu from "@/assets/about/clients/usu.png";
import wilmar from "@/assets/about/clients/wilmar.png";

import team1 from "@/assets/tutors/team-1.webp";
import team2 from "@/assets/tutors/team-2.webp";
import team6 from "@/assets/tutors/tutors-6.webp";
import team3 from "@/assets/tutors/team-3.webp";

import asia_forward from "@/assets/about/affiliators/asia_forward.png";
import aws from "@/assets/about/affiliators/aws.png";
import EduSpaze from "@/assets/about/affiliators/EduSpaze.png";
import google_startups from "@/assets/about/affiliators/google_startups.png";
import kemendikbud from "@/assets/about/affiliators/kemendikbud.png";
import startup_school from "@/assets/about/affiliators/startup_school.png";
import startup_studio from "@/assets/about/affiliators/startup_studio.png";
import wsgh from "@/assets/about/affiliators/wsgh.png";
import xendit from "@/assets/about/affiliators/xendit.png";

import alibaba from "@/assets/about/alibaba_cloud.png";
import krasia from "@/assets/about/krasia.png";

import { TeamCardProps } from "./components/TeamCard";

export const ListFeature = [
  {
    title: "01. Standar Kurikulum Internasional",
    desc: "Torche menyediakan kurikulum teknik kimia terbaik dari 5 universitas terbaik di Indonesia yang digabungkan dengan 5 universitas terbaik di dunia.",
    Icon: CardChecklist,
  },
  {
    title: "02. Kelas Online",
    desc: "Torche mengadakan kelas sesuai permintaan dengan platform rapat premium (Google Meet dan Zoom Meetings) dan materi materi yang terintegrasi ke akun Google Workspace Anda.",
    Icon: Laptop,
  },
  {
    title: "03. Dapat Dipercaya",
    desc: "Torche menyediakan kurikulum teknik kimia terbaik dari 5 universitas terbaik di Indonesia yang digabungkan dengan 5 universitas terbaik di dunia.",
    Icon: HandThumbsUp,
  },
];

export const ListClients = [
  afob,
  aiche,
  bcg,
  bkkmtki,
  bukit_asam,
  chandra_asri,
  chengchi,
  exxon_mobil,
  ftui,
  imtk,
  itb,
  itera,
  itn,
  its,
  ntust,
  pertamina,
  rcbe,
  reknind,
  sbe,
  sharjah,
  synthetic_rubber,
  tppi,
  ub,
  ucl,
  ugm,
  ui,
  um,
  ums,
  undip,
  unioleo,
  univ_unknown,
  unri,
  unsri,
  untan,
  upn,
  usu,
  wilmar,
];

export const ListTeams: TeamCardProps[] = [
  {
    img: team1,
    name: "Muhammad Yusuf Arya Ramadhan, S.T., M.T.",
    title: "Co-Founder & Direktur Utama",
  },
  {
    img: team2,
    name: "Felix Pratama, S.T., M.BA. (Cand)",
    title: "Co-Founder & Direktur Operasional",
  },
  {
    img: team6,
    name: "Samuel Pangeran Aletheia, S.T., M.T.",
    title: "Co-Founder & Direktur Teknologi & Rekayasa",
  },
  {
    img: team3,
    name: "Leon Lukhas Santoso, S.T., M.Sc (Cand)",
    title: "Co-Founder & Direktur Keuangan",
  },
];

export const ListAffiliators = [asia_forward, aws, EduSpaze, google_startups, kemendikbud, startup_school, startup_studio, wsgh, xendit];

export const ListMedia = [alibaba, krasia];
