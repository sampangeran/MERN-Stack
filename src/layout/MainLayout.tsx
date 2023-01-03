import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
