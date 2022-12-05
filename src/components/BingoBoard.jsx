// hooks
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// componets
import { Task } from "../components/Task";
import { TaskDetails } from "./TaskDetails";

export const BingoBoard = () => {
  /**
   * 5x5 Bingoboard
   */

  //! Line 13-43 - TEMPT Fix
  const list = [
    "Big Shark",
    "Jar or Pet from Sarachni",
    "3 Zenytes",
    "Complete Ahrims Set",
    "5 Armor OR 1 Enhanced from CG",
    "Obsidian Armor Piece",
    "Masori helm",
    "Dragon Hunter CB",
    "corp shield from scratch",
    "any Nex Unique",
    "Dragonbone necklace",
    "Any wilderness ward",
    "FREE",
    "Curved Bone from Shamans",
    "Godsword from Scratch",
    "dragon sword",
    "eternal gem or imbued heart",
    "2x Blood shard",
    "Basilisk Jaw",
    "bottomless bucket",
    "any slayer head",
    "all 4 dk Rings",
    "Tome Of Water",
    "2x Dragon pickaxe",
    "Free",
  ];
  const newTask = list.map((task) => {
    return { name: task, isComplete: false };
  });

  //TODO: 24 Task(1 Free) are randomly generated from backend, implement fetch for Task
  const [tasks, setTasks] = useState(newTask);

  const handleComplete = (taskName) => {
    const updateTask = tasks.map((task) => {
      return task.name === taskName
        ? { ...task, isComplete: !task.isComplete }
        : task;
    });

    setTasks(updateTask);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="grid grid-cols-5 gap-2 max-w-2xl min-w-max">
        {tasks.map((task, i) => {
          return (
            <div key={i}>
              <Link to={`usr/detail/${i}/${task.name}`}>
                {<Task task={task} />}
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <Routes>
          <Route
            path="usr/detail/:id/:name"
            element={
              <TaskDetails handleComplete={handleComplete} tasks={tasks} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
