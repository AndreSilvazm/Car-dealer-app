import Hatches from '@/app/Midias/Hatches.jpg';
import Sedan from '@/app/Midias/Sedans.jpg';
import Picapes from '@/app/Midias/PicapeImg.jpg';
import SUV from '@/app/Midias/SUVs.jpg';
import Eletro from '@/app/Midias/EletroImg.jpg';
import TopicsCard from '@/app/components/UI/Cards/TopicsCard';

function CarTopics() {
const CarsDetails = [
  {
    imgUrl: Eletro,
    Title: "Electric Cars",
  },
  {
    imgUrl: SUV,
    Title: "SUV's",
  },
  {
    imgUrl: Picapes,
    Title: "Pickups",
  },
  {
    imgUrl: Sedan,
    Title: "Sedans",
  },
  {
    imgUrl: Hatches,
    Title: "Hatches",
  },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-4 px-2">
      {CarsDetails.map((car, index) => (
        <TopicsCard key={index} car={car} />
      ))}
    </div>
  );
}

export default CarTopics;