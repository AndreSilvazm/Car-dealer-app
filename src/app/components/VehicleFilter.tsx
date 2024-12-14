"use client";

import { ResultsDto } from "../data/utils/MakesForVehicleDto";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

import NextBtn from "./UI/Buttons/NextBtn";
import FilterOpt from "./UI/Filters/FilterOpt";

function VehicleFilter({ Results }: { Results: ResultsDto }) {
  const [MakeId, setMake] = useState(""); 
  const [Year, setYear] = useState(0); 
  const [isLoading, setIsLoading] = useState(false); 

  const router = useRouter();
  const isBtnDisabled = !MakeId || !Year;

  function HandleSelectedMake(make: string) {
    setMake(make);
  }

  function HandleSelectedYear(year: number) {
    setYear(year);
  }

  async function HandleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/result/${MakeId}/${Year}`);
  }

  const years = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, i) => 2015 + i
  );

  return (
    <form
      className="text-black min-h-96 bg-Secondary w-full md:w-2/4 flex flex-col px-6 justify-around rounded-lg shadow-lg"
      onSubmit={HandleSubmit}
    >
      <h1 className="text-3xl font-bold">
        Found Your Brand <br /> New <span className="text-Primary">Car!</span>
      </h1>

      {/*Makes Section */}
      <section className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Make</label>
        <FilterOpt
          data={Results.Results}
          HandleSelectedMake={HandleSelectedMake}
          HandleSelectedYear={HandleSelectedYear}
        />
      </section>

      {/* Year Section*/}
      <section className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Year</label>
        <FilterOpt
          Years={years}
          HandleSelectedMake={HandleSelectedMake}
          HandleSelectedYear={HandleSelectedYear}
        />
      </section>

      <NextBtn isDisabled={isBtnDisabled} isLoading={isLoading} />
    </form>
  );
}

export default VehicleFilter;
