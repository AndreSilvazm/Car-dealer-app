import { Suspense } from "react";
import { notFound } from "next/navigation";
import { VehicleModel } from "@/app/data/utils/VehicleModel";

import Header from "@/app/components/UI/Header/Header";
import getModels from "@/app/data/services/GetModels";
import VehicleCard from "@/app/components/UI/Cards/VehicleCard";

interface ResultProps {
  params: Promise<{
    makeId: string;
    year: string;
  }>;
}

export default async function Result({ params }:ResultProps) {
  
  const { makeId, year } =  await params;

  let modelsData: VehicleModel[];
  try {
    modelsData = await getModels(makeId, year);
  } catch (error) {
    console.error("Error fetching vehicle models:", error);
    return notFound();
  }

  return (
    <>
      <Header />

      <main className="min-h-[80vh] md:min-h-screen bg-[#edeef2] p-6">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-Primary mb-8">
          Available Models - {year}
        </h1>

        <Suspense
          fallback={
            <p className="text-center text-lg font-medium text-gray-600">
              Loading models...
            </p>
          }
        >
          <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
            {modelsData.length > 0 ? (
              <ul className="space-y-4">
                {modelsData.map((model) => (
                  <VehicleCard key={model.Model_ID} model={model} />
                ))}
              </ul>
            ) : (
              <p className="text-center text-lg font-medium text-gray-500">
                No models found.
              </p>
            )}
          </div>
        </Suspense>
      </main>
    </>
  );
}
