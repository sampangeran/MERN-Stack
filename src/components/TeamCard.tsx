import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, ArrowRight } from "react-bootstrap-icons";

export interface TeamCardProps {
  name: string;
  description: string;
  teaching: string;
  avatar: StaticImageData;
  social: {
    twitter: {
      url: string;
      username: string;
    };
    instagram: {
      url: string;
      username: string;
    };
    linkedin: {
      url: string;
      username: string;
    };
  };
}

export default function TeamCard({ team }: { team: TeamCardProps }) {
  return (
    <div className="w-full md:w-80 relative mt-40 mx-auto flex-none">
      <div className="absolute -top-28 z-10 left-0 right-0 rounded-full w-48 h-48 mx-auto overflow-hidden">
        <Image className="object-cover" width={200} height={200} src={team.avatar} alt="team tutors" />
      </div>
      <div className="bg-white w-full shadow-lg rounded-2xl text-center text-black overflow-hidden">
        <div className="px-6 pt-24">
          <p className="font-bold text-2xl font-rajdhani">{team.name}</p>
          <p className="font-cairo text-sm text-[#494949] my-3">{team.description}</p>
          <div className="mx-auto">
            <p className="font-bold font-cairo text-sm">Mengajarkan:</p>
            <p className="text-xs font-bold text-[#5885E9] my-2">{team.teaching}</p>
            <div className="flex gap-3 justify-center my-4">
              <a href={team.social.twitter.url} className="border border-[#5885E9] rounded-full p-2" aria-label={team.social.twitter.username} target="_blank" rel="noreferrer">
                <Twitter size={15} className="text-[#5885E9]" />
              </a>
              <a href={team.social.linkedin.url} className="border border-[#5885E9] rounded-full p-2" aria-label={team.social.linkedin.username} target="_blank" rel="noreferrer">
                <Linkedin size={15} className="text-[#5885E9]" />
              </a>
              <a href={team.social.instagram.url} className="border border-[#5885E9] rounded-full p-2" aria-label={team.social.instagram.username} target="_blank" rel="noreferrer">
                <Instagram size={15} className="text-[#5885E9]" />
              </a>
            </div>
          </div>
        </div>
        <button className="bg-[#5885E9] w-full font-bold text-white text-center py-4">
          <Link href="/tutors/1">
            Buka Keterangan{" "}
            <span>
              <ArrowRight className="inline ml-3" />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}
