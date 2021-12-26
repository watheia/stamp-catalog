import React, { ReactNode } from "react";
import Head from "next/head";
import Navigator from "@/components/Navigator";
import Footer from "@/components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Watheia Labs" }: Props) => (
  <div className="min-h-full">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigator />
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
      </div>
    </header>
    <div className="py-10">
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;
