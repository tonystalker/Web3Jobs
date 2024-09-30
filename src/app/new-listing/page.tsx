"use server";
import { createCompany } from "@/app/actions/workosActions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import Link from "next/link";

export default async function NewListingPage() {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  const { user } = await getUser();

  if (!user) {
    return (
      <div className="container mx-auto mt-8 p-4">
        <div className="bg-red-100 text-red-700 p-4 rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300">
          You need to be logged in to post a job.
        </div>
      </div>
    );
  }

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  const activeOrganizationMemberships = organizationMemberships.data.filter(
    (om) => om.status === "active"
  );

  const organizationsNames: { [key: string]: string } = {};
  for (const activeMembership of activeOrganizationMemberships) {
    const organization = await workos.organizations.getOrganization(
      activeMembership.organizationId
    );
    organizationsNames[organization.id] = organization.name;
  }

  return (
    <div className="container mx-auto mt-8 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all hover:shadow-2xl duration-500">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in-up">
          Your Companies
        </h2>
        <p className="text-gray-600 text-base mb-6 animate-fade-in-up delay-150">
          Select a company to create a job ad for.
        </p>

        <div>
          {Object.keys(organizationsNames).length > 0 ? (
            <div className="border border-gray-300 rounded-lg overflow-hidden animate-fade-in-up delay-300">
              {Object.keys(organizationsNames).map((orgId) => (
                <Link
                  key={orgId}
                  href={"/new-listing/" + orgId}
                  className="py-3 px-6 flex justify-between items-center border-b bg-white hover:bg-blue-50 transition duration-300 transform hover:translate-x-2"
                >
                  <span className="text-gray-800 font-medium">
                    {organizationsNames[orgId]}
                  </span>
                  <FontAwesomeIcon
                    className="h-4 text-gray-500 transition-transform duration-300 hover:scale-125"
                    icon={faArrowRight}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg shadow-md animate-fade-in-up delay-300">
              No companies found assigned to your user.
            </div>
          )}
        </div>

        <Link
          className="inline-flex gap-2 items-center bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600 "
          href={"/new-company"}
        >
          Create a new company
          <FontAwesomeIcon
            className="h-4 text-white transition-transform duration-300 hover:scale-125"
            icon={faArrowRight}
          />
        </Link>
      </div>
    </div>
  );
}
