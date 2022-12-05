import { useParams } from "react-router-dom";

export const TaskDetails = ({ handleComplete, tasks }) => {
  const { id, name } = useParams();

  return (
    <div className="h-full w-64 border-2">
      <h1 className="text-center text-xl underline underline-offset-1">
        {name}
      </h1>
      <div className="flex flex-wrap justify-center my-2">
        <img
          src="https://via.placeholder.com/150"
          className="p-1 bg-white border rounded"
          alt="..."
        />
      </div>
      <div className="flex space-x-2 justify-center my-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-50 line-through"
          disabled
        >
          Upload
        </button>
      </div>
      <div className="flex space-x-2 justify-center items-end">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => handleComplete(name)}
        >
          {tasks[id].isComplete ? "UNDO" : "DONE!"}
        </button>
      </div>
    </div>
  );
};
