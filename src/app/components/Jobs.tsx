import JobRow from "./JobRow";

const Jobs = () => {
  return (
    <div className="bg-slate-100 py-10 px-6 rounded-3xl shadow-lg">
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl mb-6 text-gray-800 text-center">
          Recent Jobs
        </h2>

        <div className="flex flex-col gap-6">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
