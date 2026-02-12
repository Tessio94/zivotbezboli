import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { localBusinessSchema } from "@/lib/schema/localBusiness";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
