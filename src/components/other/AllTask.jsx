import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h2 className="text-lg font-medium w-1/5">New Task</h2>
        <h2 className="text-lg font-medium w-1/5">Active Task</h2>
        <h2 className="text-lg font-medium w-1/5">Complete Task</h2>
        <h2 className="text-lg font-medium w-1/5">Failed Task</h2>
      </div>
      <div className="">
        {authData.employees.map(function (item) {
          return (
            <div className="border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="w-1/5 text-lg font-medium ">{item.firstname}</h2>
              <h2 className="w-1/5 text-lg font-medium text-blue-600">{item.taskCounts.newTask}</h2>
              <h2 className="w-1/5 text-lg font-medium text-yellow-300">{item.taskCounts.active}</h2>
              <h2 className="w-1/5 text-lg font-medium text-green-600">{item.taskCounts.completed}</h2>
              <h2 className="w-1/5 text-lg font-medium text-red-600">{item.taskCounts.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
