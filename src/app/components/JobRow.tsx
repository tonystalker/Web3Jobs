"use client";
import TimeAgo from "./TimeAgo";
import { Job } from "@/models/Job";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";

export default function JobRow({ jobDoc }: { jobDoc: Job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <div className="absolute cursor-pointer top-4 right-4 text-gray-300 hover:text-red-500">
        <FontAwesomeIcon className="h-5 w-5" icon={faHeart} />
      </div>
      <div className="flex gap-6">
        {/* Job Icon */}
        <div className="flex items-center w-16 h-16 rounded-full bg-gray-100 overflow-hidden shadow-inner">
          <img
            className="object-cover w-full h-full"
            src={jobDoc?.jobIcon || "/placeholder-icon.png"}
            alt={`${jobDoc.title} icon`}
          />
        </div>

        {/* Job Details */}
        <div className="flex-grow space-y-2">
          {/* Organization Name */}
          <Link href={`/jobs/${jobDoc.orgId}`}>
            <p className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-150">
              {jobDoc.orgName || "Unknown Organization"}
            </p>
          </Link>

          {/* Job Title */}
          <h3 className="text-xl font-semibold text-gray-900">
            <Link
              href={`/show/${jobDoc._id}`}
              className="hover:text-blue-500 transition-colors duration-150"
            >
              {jobDoc.title}
            </Link>
          </h3>

          {/* Job Location & Type */}
          <p className="text-gray-500 text-sm">
            {jobDoc.remote ? "Remote" : `${jobDoc.city}, ${jobDoc.country}`}
            <span className="mx-2">&middot;</span>
            {jobDoc.type}-time
          </p>

          {/* Admin Actions */}
          {jobDoc.isAdmin && (
            <div className="text-sm text-gray-400">
              <Link
                href={`/jobs/edit/${jobDoc._id}`}
                className="hover:underline"
              >
                Edit
              </Link>
              <span className="mx-2">&middot;</span>
              <button
                type="button"
                className="text-red-500 hover:underline"
                onClick={async () => {
                  await axios.delete(`/api/jobs?id=${jobDoc._id}`);
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Timestamp */}
        {jobDoc.createdAt && (
          <div className="flex items-center text-gray-400 text-xs">
            <TimeAgo createdAt={jobDoc.createdAt} />
          </div>
        )}
      </div>
    </div>
  );
}
