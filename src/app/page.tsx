import Image from "next/image";
import GetMakesForVehicle from "./data/services/GetMakesForVehicle";
import VehicleFilter from "./components/VehicleFilter";
import HeroBg from "@/app/Midias/HeroBg.jpg";
import CarTopics from "./components/CarsTopics";

async function page() {
  /*Gettig the Makes for Vehicle */
  const Makesdata = await GetMakesForVehicle();

  return (
    <>
      <main>

        {/*Hero Section */}
        <section className="bg-[#ff003c] flex md:flex-row w-full h-[500px] justify-center md:justify-between md:items-center md:px-8 px-2 py-8">
          <VehicleFilter Results={Makesdata} />
          <Image src={HeroBg} alt="Hero BG" className="hidden md:block lg:block" />
        </section>

        {/*Car topics section */}
        <section className="w-full flex flex-col gap-4 mt-8 text-center">
          <article>
            <h1 className="text-2xl md:text-5xl text-Primary font-extrabold">Choose A Category!</h1>
            <p className="text-lg md:text-3xl text-black font-semibold">Take a Look at your future car!</p>
          </article>
          <CarTopics />
        </section>
        
      </main>

    </>
  );
}

export default page;
