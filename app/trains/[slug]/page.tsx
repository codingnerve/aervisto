import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrainDetailPageContent } from "@/components/trains/TrainDetailPageContent";
import { TRAIN_OPERATORS, findTrainOperator } from "@/lib/mock/trains";

interface TrainOperatorPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TRAIN_OPERATORS.map((operator) => ({ slug: operator.slug }));
}

export async function generateMetadata({
  params,
}: TrainOperatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const operator = findTrainOperator(slug);

  if (!operator) {
    return { title: "Train Operator Not Found" };
  }

  const title = `${operator.name} Train Tickets`;
  const canonical = `/trains/${operator.slug}`;

  return {
    title,
    description: operator.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: operator.summary,
      url: canonical,
    },
  };
}

export default async function TrainOperatorPage({
  params,
}: TrainOperatorPageProps) {
  const { slug } = await params;
  const operator = findTrainOperator(slug);

  if (!operator) {
    notFound();
  }

  return <TrainDetailPageContent operator={operator} />;
}
