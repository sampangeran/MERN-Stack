import Footer from "@/components/layout/footer/Footer";
import Header2 from "@/components/layout/header/Header2";

import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header2 />
      {children}
      <Footer />
    </>
  );
}
