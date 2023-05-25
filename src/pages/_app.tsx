import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
	const excludeLayout = Component.name === "LoginPage" || Component.name === "SignupPage"  ||Component.name === "FirstLoginPage";

	return (
		<>
			{excludeLayout ? (
				<Component {...pageProps} />
			) : 
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
}
		</>
	);
}
