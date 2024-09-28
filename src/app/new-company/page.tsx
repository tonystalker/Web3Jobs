import { getUser } from "@workos-inc/authkit-nextjs";
import { createCompany } from "../actions/workosActions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function NewCompanyPage() {
  const { user } = await getUser();

  async function handleNewCompany(data: FormData) {
    "use server";
    if (user) {
      const companyName = data.get("newCompany") as string;
      await createCompany(companyName, user.id);
    }
  }

  if (!user) {
    return <div className="text-red-500">Login to use this feature</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create a New Company</h2>
      <p className="text-sm text-gray-500 mb-6">
        To create a company, you first need to register.
      </p>
      <form action={handleNewCompany} className="flex flex-row gap-4">
        <input
          type="text"
          name="newCompany"
          placeholder="Company Name"
          className="border border-gray-300 flex-grow py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Create Company
          <FontAwesomeIcon className="h-4" icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
}
