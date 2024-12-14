function TopicsCard({ car }: { car: any }) {
  return (
    <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-2xl">
      {/* Image */}
      <img
        src={car.imgUrl.src}
        alt={car.Title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Filter */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Title*/}
      <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
        {car.Title}
      </h3>
    </div>
  );
}

export default TopicsCard;
