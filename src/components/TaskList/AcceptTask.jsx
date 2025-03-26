import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
        <h4 className="text-sm font-medium">24 March 2025</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque
        architecto deserunt perferendis laudantium vero!
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
