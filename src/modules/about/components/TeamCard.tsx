import Image, { StaticImageData } from "next/image";

export interface TeamCardProps {
  img: StaticImageData;
  name: string;
  title: string;
}

export default function TeamCard({ img, name, title }: TeamCardProps) {
  return (
    <div className="w-64 flex flex-col mx-auto gap-2 items-center">
      <div className="rounded-xl overflow-hidden relative w-full h-72">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>

      <h3 className="text-xl text-center">{name}</h3>
      <p className="text-sm text-center">{title}</p>
    </div>
  );
}
