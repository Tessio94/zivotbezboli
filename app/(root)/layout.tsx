import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default layout;
