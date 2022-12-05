import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import { BingoBoard } from "../components/BingoBoard";

export const HomePage = () => {
  // const [tasks,setTasks] = useState(['Big Shark','Jar||Pet from Sarachni','3 Zenytes'])
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <p className="text-2xl text-center py-5">{"{USER_RSN}"}'s Bingo Board</p>

      {/* Bingo Board */}
      <BingoBoard />
    </>
  );
};
