interface TextHeroWrapperProps {
  title: string;
  description: string;
  smallLabel?: string;
}

export default function TextHeroWrapper({ title, description, smallLabel }: TextHeroWrapperProps) {
  return (
    <div className="flex flex-col text-white justify-center items-center p-20 text-center bg-[#0B122A]">
      {smallLabel && <p className="font-rajdhani text-xl font-bold text-[#5885E9] mb-2">{smallLabel}</p>}
      <h1 className="font-rajdhani text-5xl font-bold">{title}</h1>
      <p className="mt-2">{description}</p>
    </div>
  );
}
