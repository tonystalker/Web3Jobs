"use client"; // This ensures it's a Client Component

import { useState } from "react";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; // Regular heart (unfilled)
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // Solid heart (filled)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobRow = () => {
  const [isLiked, setIsLiked] = useState(false);

  // Toggle liked state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white relative p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-200">
      {/* Heart Icon */}
      <div className="absolute top-4 right-4">
        <FontAwesomeIcon
          className={`cursor-pointer transition-colors duration-200 ${
            isLiked ? "text-red-600" : "text-gray-400 hover:text-red-500"
          }`}
          icon={isLiked ? solidHeart : regularHeart}
          onClick={toggleLike}
        />
      </div>
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://imgs.search.brave.com/1EY6Oo4ENVKGuwmEWl17wgXJCYpxWkrLI3prmug6aTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXN1/YWxoaWVyYXJjaHku/Y28vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDQvYW1hem9u/LmpwZw"
          alt="Amazon Logo"
        />
      </div>
      {/* Job Information */}
      <div className="flex-grow">
        <div className="text-gray-500 text-sm">Amazon</div>
        <div className="font-bold text-lg mb-1">Software Developer</div>
        <div className="text-gray-400 text-sm">Remote &middot; Fulltime</div>
      </div>
      {/* Posting Time */}
      <div className="text-gray-500 text-sm whitespace-nowrap">2 weeks ago</div>
    </div>
  );
};

export default JobRow;
