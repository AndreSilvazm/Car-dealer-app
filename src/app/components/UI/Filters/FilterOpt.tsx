import { MakeDto } from "@/app/data/utils/MakesForVehicleDto";
import { RiArrowDropDownLine } from "react-icons/ri";

interface FilterOptProps {
  data?: MakeDto[]; 
  Years?: number[]; 
  HandleSelectedMake: (make: string) => void;
  HandleSelectedYear: (year: number) => void;
}

function FilterOpt({
  data,
  Years,
  HandleSelectedMake,
  HandleSelectedYear,
}: FilterOptProps) {

  if (data) {
    return (
      <select onChange={(e) => HandleSelectedMake(e.target.value)} className="FilterStyle">
        <option value="">Select a vehicle make</option>
        {data.map((e) => (
          <option key={e.MakeId} value={e.MakeId}>
            {e.MakeName}
          </option>
        ))}
      </select>
    );
  }

  else if (Years) {
    return (
      <select onChange={(e) => HandleSelectedYear(Number(e.target.value))} className="FilterStyle">
        <option value="">Select a model year</option>
        {Years.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    );
  }

  return null;
}

export default FilterOpt;
