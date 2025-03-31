import { Link } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function PanelMedia({ cloudUrl, id, onDelete }) {
    const [isLoading, setIsLoading] = useState(false);

  const handleDeleteImage = async () => {
    try {
      setIsLoading(true)
      const panelid = sessionStorage.getItem("panelId");
      console.log(panelid);

      const response = await fetch(
        `http://localhost:8000/profile/deleteImage/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ panel: panelid }),
        },
      );

      const data = await response.json();

      if  (response.ok) {
        onDelete(data);
      } else {
        console.error("Failed to delete image.");
      }
      
    } catch (err) {
      console.error(`Caught in handleDeleteImage: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group relative mb-4">
      <i
        onClick={handleDeleteImage}
        className={`${isLoading ? "mx-auto size-6 animate-spin rounded-full border-4 border-red-600 border-t-white text-xl" : "bx bxs-trash invisible cursor-pointer rounded-lg bg-red-600 text-lg text-white hover:bg-red-700 group-hover:visible"} absolute right-1 top-1 px-2 py-1 md:py-1 lg:text-xl`}
      ></i>

      <Link to={cloudUrl}>
        <img
          onClick={() => console.log(id)}
          className="w-full rounded-lg object-cover"
          src={cloudUrl}
        />
      </Link>
    </div>
  );
}
