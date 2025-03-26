import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm font-medium">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm">{data.description}</p>
      <div className="mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm w-full">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
