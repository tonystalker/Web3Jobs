import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container items-center flex justify-between py-4 px-6 mx-auto">
        <Link href="/" className="font-bold text-red-600 text-xl">
          Web3 Jobs
        </Link>
        <nav className="flex gap-2  *:rounded-md *:py-2 *:px-4">
          <Link className="bg-gray-200" href={"/login"}>
            Login
          </Link>
          <Link className="bg-blue-600" href={"/new-listing"}>
            Post a Job
          </Link>
        </nav>{" "}
      </div>
    </header>
  );
};

export default Header;
