import Link from "next/link";
import async from "../page";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

const Header = async () => {
  const { user } = await getUser();
  const signInURL = await getSignInUrl();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container flex items-center justify-between mx-auto px-4">
        <Link
          href="/"
          className="font-bold text-red-600 text-2xl transition-transform transform hover:scale-105 hover:text-red-700"
        >
          Web3 Jobs
        </Link>

        <nav className="flex gap-4">
          {!user && (
            <Link
              href={signInURL}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              Login
            </Link>
          )}

          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            href="/new-listing"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
