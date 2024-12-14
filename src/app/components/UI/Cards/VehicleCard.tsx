import { VehicleModel } from "@/app/data/utils/VehicleModel";

interface VehicleCardProps {
  model: VehicleModel;
}

export default function VehicleCard({ model }: VehicleCardProps) {
  return (
    <li
      className="p-4 bg-[#f4f5f7] rounded-lg shadow-md text-gray-700 font-semibold hover:bg-Primary hover:text-white transition-all duration-300 cursor-pointer"
    >
      {model.Make_Name} - {model.Model_Name}
    </li>
  );
}
