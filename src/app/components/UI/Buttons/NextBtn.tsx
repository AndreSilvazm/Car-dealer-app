import CarWheel from "@/app/Midias/carWheel.png";
import Image from "next/image";

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
        <Image
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
