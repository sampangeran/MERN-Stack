export interface FeatureCardProps {
  Icon: any;
  title: string;
  desc: string;
}
export default function FeatureCard({ desc, Icon, title }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-[#F5F7FF] p-10 flex flex-col gap-4 justify-center items-center text-center flex-1">
      <div className="p-3 rounded-full border border-[#5885E9]">{<Icon size={25} color="#5885E9" />}</div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
