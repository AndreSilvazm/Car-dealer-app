import Link from "next/link";

function Header() {
  return ( 
    <Link href="/" className="text-black font-semibold h-10 flex flex-col justify-center items-center w-full bg-white">
      Home
    </Link>
  );
}

export default Header;