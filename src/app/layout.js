import { Inter } from "next/font/google";

import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "墨綠B.G.",
	description: "墨綠B.G.的個人網站",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<AuthProvider>
						<div className="container">
							<Navbar />
							{children}
							<Footer />
						</div>
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
