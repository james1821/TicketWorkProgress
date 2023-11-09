import React from "react";

function ProgressDisplay({ progress }) {
  return (
    <div className="bg-gray-600 w-full rounded-md h-3">
      <div className={`bg-green-600 h-3 w-[${progress}%]`}></div>
    </div>
  );
}

export default ProgressDisplay;
