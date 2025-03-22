import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

export default function PanelTitle({ title }) {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentTitle(title);
  }, [title]);

  const handleEditTitle = () => {
    setIsEditing(true);
    console.log("Editing...");
  };

  const handleUpdateTitle = async () => {
    try {
      setIsEditing(false);
      console.log(`Saved .... ${currentTitle}`);

      const panel = sessionStorage.getItem("panelId");
      const response = await fetch(
        `http://localhost:8000/profile/updateTitle/${panel}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currentTitle }),
        },
      );

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(`Error with fetch... ${err}`);
    }
  };

  const handleDeletePanel = async () => {
    console.log("Clicked Delete Panel Btn");
    const panel = sessionStorage.getItem("panelId");

    try {
      await fetch(
        `http://localhost:8000/profile/deleteAll/${panel}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      navigate('/profile')
    } catch (err) {
      console.error("Didnt work", err);
    }
  };

  let titleContent;

  if (isEditing) {
    titleContent = (
      <div className="mt-9 flex items-center justify-center gap-4">
        <input
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          className="block w-3/5 text-balance text-2xl font-semibold text-black [transition:.3s_ease] md:text-4xl"
        />
        <button
          onClick={handleUpdateTitle}
          className="rounded-lg bg-accent px-2 py-2 font-semibold transition-all hover:bg-accent-hover"
        >
          Save
        </button>
      </div>
    );
  } else {
    titleContent = (
      <div className="mt-9 flex justify-center gap-4">
        <h2 className="text-balance text-3xl font-semibold [transition:.3s_ease] md:text-5xl">
          {currentTitle}
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={handleEditTitle}
            className="text-md rounded-lg bg-accent px-1 py-1 transition-all hover:bg-accent-hover md:px-2 lg:text-2xl"
          >
            <i className="bx bx-edit flex py-1"></i>
          </button>
          <button
            onClick={() => setOpen(true)}
            className="text-md rounded-lg bg-red-600 px-1 py-1 transition-all hover:bg-red-700 md:px-2 lg:text-xl"
          >
            <i className="bx bxs-trash"></i>
          </button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center">
            <i className="bx bx-error mb-5 rounded-full bg-yellow-200 px-2 pb-2 pt-1 text-5xl"></i>
            <h3 className="mb-2 text-xl font-semibold">Confirm Delete</h3>
            <p className="text-gray-500">
              Are sure you want to delete this panel?
            </p>
            <p className="text-balance text-gray-500">
              Deleting will remove all of its images and goals. This action
              cannot be undone.
            </p>
            <div className="space-x-20">
              <button
                onClick={() => setOpen(false)}
                className="text-md rounded-lg bg-accent px-1 py-1 text-white transition-all hover:bg-accent-hover md:px-4"
              >
                Back
              </button>
              <button
                onClick={handleDeletePanel}
                className="mt-5 rounded-lg bg-red-600 px-1 py-1 text-white transition-all hover:bg-red-700 md:px-3"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  return titleContent;
}
