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
        <div className="bg-red-100 text-red-700 p-4 rounded-md">
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
    <div className="container mx-auto mt-8 p-4">
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Companies</h2>
        <p className="text-gray-500 text-sm mb-4">
          Select a company to create a job ad for.
        </p>

        <div>
          {Object.keys(organizationsNames).length > 0 ? (
            <div className="border border-gray-300 rounded-md">
              {Object.keys(organizationsNames).map((orgId) => (
                <Link
                  key={orgId}
                  href={"/new-listing/" + orgId}
                  className={
                    "py-2 px-4 flex justify-between items-center border-b " +
                    (Object.keys(organizationsNames)[0] === orgId
                      ? ""
                      : "border-t")
                  }
                >
                  {organizationsNames[orgId]}
                  <FontAwesomeIcon className="h-4" icon={faArrowRight} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
              No companies found assigned to your user.
            </div>
          )}
        </div>

        <Link
          className="inline-flex gap-2 items-center bg-blue-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-600 transition duration-200"
          href={"/new-company"}
        >
          Create a new company
          <FontAwesomeIcon className="h-4" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
