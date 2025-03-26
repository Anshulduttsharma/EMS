import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="h-[50%] flex overflow-x-auto items-center gap-5 justify-start flex-nowrap w-full mt-10 rounded-xl"
    >
      {data.tasks.map((item,idx) => {
        if (item.active) {
          return <AcceptTask key={idx} data={item} />;
        }
        if (item.completed) {
          return <CompleteTask key={idx} data={item} />;
        }
        if (item.failed) {
          return <FailedTask key={idx} data={item} />;
        }
        if (item.newTask) {
          return <NewTask key={idx} data={item} />;
        }
      })}
    </div>
  );
};

export default TaskList;
