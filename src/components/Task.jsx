//hooks

export const Task = ({ task }) => {
  /*
    individual bingo task
  */
  return (
    <div
      className={`h-32 w-32 border-4 hover:bg-slate-100 hover:cursor-pointer ${
        task.isComplete ? "bg-sky-400" : ""
      }`}
    >
      <p className="text-center">{task.name}</p>
    </div>
  );
};
