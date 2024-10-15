import Jobs from "@/app/components/Jobs";
import { addOrgAndUserData, JobModel } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import mongoose from "mongoose";

type PageProps = {
  params: {
    orgId: string;
  };
};

export default async function CompanyJobsPage({ params }: PageProps) {
  const workos = new WorkOS(process.env.WORKOS_API_KEY || "");

  // Fetch organization and user
  const org = await workos.organizations.getOrganization(params.orgId);
  const { user } = await getUser();

  // Fetch and process job documents
  let jobsDocs = await JobModel.find({ orgId: org.id }).lean();
  jobsDocs = await addOrgAndUserData(jobsDocs, user);

  return (
    <div className="bg-gray-50 py-8 min-h-screen">
      <div className="container mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          {org.name} Jobs
        </h1>
        <Jobs jobs={jobsDocs} header={`Jobs posted by ${org.name}`} />
      </div>
    </div>
  );
}
