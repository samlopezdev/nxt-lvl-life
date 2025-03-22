import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PanelMedia({ cloudUrl, id, onDelete }) {
  const handleDeleteImage = async () => {
    try {
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
    }

    // if (response.ok) {

    //   console.log(data);
    //   console.log("Image Deleted from Backend");
    // } else {
    //   console.error("Failed to delete image");
    // }

    // onDelete()
  };

  return (
    <div className="group relative mb-4">
      <i
        onClick={handleDeleteImage}
        className="bx bxs-trash text-md invisible absolute right-1 top-1 cursor-pointer rounded-lg bg-red-600 text-white hover:bg-red-700 group-hover:visible px-2 py-1 md:py-1 lg:text-xl"
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
