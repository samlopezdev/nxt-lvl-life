import { useEffect, useState } from 'react';
import Goal from './Goal'

export default function GoalContent() {
    const [newGoal, setnewGoal] = useState('')
    const [goalData, setGoalData] = useState([])

    const handleAddGoal = async (e) => {
        e.preventDefault()
        console.log('Adding Goal', newGoal)
        const panel = sessionStorage.getItem("panelId");

        const response = await fetch("http://localhost:8000/profile/addGoal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ panel, newGoal }),
        })

        const data = await response.json()
        console.log(data.allGoals)
        setGoalData(data.allGoals.reverse())
        console.log(goalData)
        setnewGoal("")
    }

    const handleDeleteGoal = (info) => {
        console.log("DELETE GOAL", info);
        setGoalData(info.goals)
    }

    useEffect( () => {
        const fetchGoalData = async () => {
            const panelId = sessionStorage.getItem('panelId')

            const response = await fetch(
              `http://localhost:8000/profile/goalData/${panelId}`,
            );
            const data = await response.json()
            // console.log(data.goals.reverse())
            setGoalData(data.goals.reverse())
        }
        fetchGoalData()
    },[])

    return (
      <section className="m-auto w-11/12">
        <div>
          <h3 className="mb-4 text-center text-xl font-semibold">
            Add A New Goal!
          </h3>
          <form
            onSubmit={handleAddGoal}
            className="mb-10 flex items-center justify-center gap-3"
          >
            <input
              type="text"
              name="newGoal"
              value={newGoal}
              onChange={(e) => setnewGoal(e.target.value)}
              placeholder="Write a book, Go to the Gym, Track Finances"
              className="w-full md:w-3/5 xl:w-2/5 rounded-md outline-none border-b-2 border-b-transparent px-2 py-2 placeholder:italic focus:border-black transition-all ease-in-out shadow-xl"
              required
            />
            <button className="flex items-center justify-center rounded-lg bg-accent px-3 py-3 text-sm font-semibold text-white transition-colors [transition:.3s_ease] hover:bg-accent-hover">
              <i className="bx bx-plus-medical"></i>
            </button>
          </form>
        </div>

        <ul className="flex flex-wrap justify-center gap-10">
          {goalData.map((goal) => (
            <Goal
              key={goal._id}
              id={goal._id}
              description={goal.goal}
              isComplete={goal.completed}
              onDelete={handleDeleteGoal}
            />
          ))}

          {/* <li className="relative flex w-1/4 cursor-pointer items-center gap-4 text-pretty rounded-xl border-4 border-solid border-accent bg-accent py-4 pl-1 pr-4 text-lg leading-5 text-dark-green shadow-lg drop-shadow-sm hover:scale-105 transition-all ease-in-out">
              <div className="flex flex-col items-center">
                <i className="bx bx-check-circle mb-1 text-5xl font-semibold text-light-green"></i>
                <i className="bx bxs-trash rounded-full bg-red-600 px-1 text-xl text-white hover:bg-red-700 md:px-2 md:py-1"></i>
              </div>
              <p className="cursor-pointer font-semibold text-light-green">
                Listen to 25 audiobooks this year. Listen to 25 audiobooks this
                year. Another kewl new goal yiippeeeee kayayyyy
              </p>
            </li> */}
        </ul>
      </section>
    );
}