import React from "react";
import { notFound } from "next/navigation";
import { PAGES } from "@/components/pages/usluge";
import { USLUGE } from "@/data/usluge";

const page = async ({
  params,
}: {
  params: Promise<{ slug: keyof typeof USLUGE }>;
}) => {
  const { slug } = await params;

  const PageComponent = PAGES[slug];

  if (!PageComponent) notFound();

  return <PageComponent />;
};

export default page;

export function generateStaticParams() {
  return Object.keys(USLUGE).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: keyof typeof USLUGE }>;
}) {
  const { slug } = await params;

  const data = USLUGE[slug];

  return {
    title: data.seoTitle,
    description: data.description,
    openGraph: {
      images: data.openGraph.images,
      title: data.openGraph.seoTitle,
      description: data.description,
    },
  };
}
