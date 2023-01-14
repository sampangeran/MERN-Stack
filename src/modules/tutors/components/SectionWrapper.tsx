import { ReactNode } from "react";

interface SectionWrapperProps {
  cls?: string;
  title?: string;
  children: ReactNode;
  sideTitle?: ReactNode;
}

export default function SectionWrapper({ cls, title, children, sideTitle }: SectionWrapperProps) {
  return (
    <section className={`bg-white rounded-2xl p-10`}>
      <div className="flex items-center gap-3 mb-3">
        <h2 className="font-rajdhani text-4xl font-bold">{title}</h2>
        {sideTitle}
      </div>
      <div className={`mt-3 ${cls}`}>{children}</div>
    </section>
  );
}
