import JobRow from "@/app/components/JobRow";
import type { Job } from "@/models/Job";

export default function Jobs({
  header,
  jobs,
}: {
  header: string;
  jobs: Job[];
}) {
  return (
    <div className="bg-slate-200 py-8 rounded-3xl shadow-md">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="font-bold text-xl mb-4 text-gray-700">
          {header || "Recent Jobs"}
        </h2>

        <div className="flex flex-col gap-6">
          {!jobs?.length && (
            <div className="text-center text-gray-500">No jobs found</div>
          )}
          {jobs && jobs.map((job) => <JobRow key={job._id} jobDoc={job} />)}
        </div>
      </div>
    </div>
  );
}
