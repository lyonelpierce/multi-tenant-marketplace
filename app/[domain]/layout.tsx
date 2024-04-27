import { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getSiteData } from "@/lib/fetchers";

export async function generateMetadata({
  params,
}: {
  params: { domain: string };
}): Promise<Metadata | null> {
  const domain = decodeURIComponent(params.domain);
  const data = await getSiteData(domain);

  if (!data) {
    return null;
  }

  return {
    title: data.name,
    description: data.description,
  };
}

const DomainLayout = async ({
  params,
  children,
}: {
  params: { domain: string };
  children: ReactNode;
}) => {
  const domain = decodeURIComponent(params.domain);
  const data = await getSiteData(domain);

  if (!data) {
    notFound();
  }

  return <div>{children}</div>;
};

export default DomainLayout;
