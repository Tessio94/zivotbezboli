import React from "react";
import { notFound } from "next/navigation";
import { PAGES } from "@/components/pages/sto-lijecimo";
import { STO_LIJECIMO } from "@/data/sto-lijecimo";

const page = async ({
  params,
}: {
  params: Promise<{ slug: keyof typeof STO_LIJECIMO }>;
}) => {
  const { slug } = await params;

  const PageComponent = PAGES[slug];

  if (!PageComponent) notFound();

  return <PageComponent />;
};

export default page;

export function generateStaticParams() {
  return Object.keys(STO_LIJECIMO).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: keyof typeof STO_LIJECIMO }>;
}) {
  const { slug } = await params;

  const data = STO_LIJECIMO[slug];

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
