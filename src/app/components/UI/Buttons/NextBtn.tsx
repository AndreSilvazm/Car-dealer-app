import CarWheel from "@/app/Midias/carWheel.png";

interface NextBtnProps {
  isDisabled: boolean; 
  isLoading: boolean; 
}

function NextBtn({ isDisabled, isLoading }: NextBtnProps) {
  return (
    <button
      type="submit"
      disabled={isDisabled} 
      className={`bg-Primary text-white uppercase text-xl py-4 rounded-lg 
        hover:bg-opacity-90 transition-all duration-300 flex justify-center items-center
        ${isDisabled ? "bg-opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {isLoading ? ( 
        <img
          src={CarWheel.src}
          alt="Loading"
          className="w-6 h-6 animate-spin" 
        />
      ) : (
        "Next"
      )}
    </button>
  );
}

export default NextBtn;
