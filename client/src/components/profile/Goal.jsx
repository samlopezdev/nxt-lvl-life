import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Goal({ id, description, isComplete, onDelete }) {
  const [clicked, setClicked] = useState(isComplete);

  const markComplete = async () => {
    setClicked(!clicked);

    await fetch(`http://localhost:8000/profile/markGoalComplete/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const markIncomplete = async () => {
    setClicked(!clicked);

    await fetch(`http://localhost:8000/profile/markGoalIncomplete/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleDeleteGoal = async (e) => {
    e.stopPropagation();

    const panelid = sessionStorage.getItem("panelId");

    const response = await fetch(
      `http://localhost:8000/profile/deleteGoal/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ panel: panelid }),
      },
    );

    const data = await response.json();
    console.log(data);
    onDelete(data);
  };

  return (
    <li
      onClick={clicked ? markIncomplete : markComplete}
      className={`${clicked ? "bg-accent" : "bg-white"} relative flex w-full cursor-pointer items-center gap-4 text-pretty rounded-xl border-4 border-solid border-accent py-4 pl-1 pr-4 text-base leading-5 text-dark-green shadow-lg drop-shadow-sm transition-all ease-in-out hover:scale-105 md:w-[70%] md:text-lg lg:w-[45%] xl:w-[30%]`}
    >
      <div className="flex flex-col items-center">
        <i
          className={`${clicked ? "text-white" : "text-gray-400"} bx bx-check-circle mb-1 text-4xl font-semibold md:text-5xl`}
        ></i>
        <i
          onClick={handleDeleteGoal}
          className="bx bxs-trash rounded-full bg-red-600 px-1 text-xl text-white hover:bg-red-700 md:px-2 md:py-1"
        ></i>
      </div>
      <p
        className={`${clicked ? "text-white" : "text-dark-green"} cursor-pointer font-semibold`}
      >
        {description}
      </p>
    </li>
  );
}
