import { VehicleModel } from "@/app/data/utils/VehicleModel";

export default async function getModels(makeId: string, year: string): Promise<VehicleModel[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!res.ok) {
    throw new Error("Error trying to Fetch Data");
  }

  const data = await res.json();
  return data.Results as VehicleModel[];
}
