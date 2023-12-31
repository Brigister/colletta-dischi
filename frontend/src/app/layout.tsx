import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "La colletta dischi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="it">
			<body className={`${inter.className} p-4`}>{children}</body>
		</html>
	);
}
