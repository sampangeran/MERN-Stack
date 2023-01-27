export interface SectionWrapperProps {
  title: string;
  desc?: string;
  textLink?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export default function SectionWrapper({ desc, textLink, title, variant, children }: SectionWrapperProps) {
  return (
    <section className={`py-10 lg:py-16 w-full ${variant == "primary" ? "bg-white" : "bg-[#F5F7FF]"}`}>
      <div className="mx-auto">
        <h2 className="font-bold text-center text-2xl lg:text-4xl">{title}</h2>
        <p className="text-center font-cairo text-sm lg:text-base my-3 px-6">{desc}</p>
        {textLink && <p className="text-center font-cairo text-[#5885E9] underline underline-offset-2 text-sm lg:text-base">{textLink}</p>}
      </div>
      <div className="px-6 lg:px-20">{children}</div>
    </section>
  );
}
