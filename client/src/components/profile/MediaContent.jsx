import { useEffect, useState } from "react";
import PanelMedia from "./Media";

export default function MediaContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  const handleAddImage = async (e) => {
    try {
      const image = e.target.files[0];
      if (image.size > 10 * 1024 * 1024) {
        setError("File size exceeds 10MB. Please choose a smaller file.");
        return;
      }

      const formData = new FormData();
      formData.append("image", image);
      const panelId = sessionStorage.getItem("panelId");

      setIsLoading(true);
      const response = await fetch(
        `http://localhost:8000/profile/addImage/${panelId}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (response.ok) {
        setError(null);
        setImages((prevImages) => [...prevImages, data.newImage].reverse());
      } else {
        setError(data.message || "Failed to add image.");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred while uploading the image.");
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteImage = async (info) => {
    console.log(info);
    setImages(info.reverse());
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const panelId = sessionStorage.getItem("panelId");

        const response = await fetch(
          `http://localhost:8000/profile/mediaData/${panelId}`,
        );
        const data = await response.json();
        setImages(data.images.reverse());
      } catch (err) {
        console.error("Traced to fetchMedia...", err);
      }
    };

    fetchMedia();
  }, []);

  return (
    <section className="m-auto w-11/12">
      <div
        className={images.length ? "columns-2 md:columns-4 lg:columns-5" : ""}
      >
        <label
          htmlFor="file"
          className="mb-4 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-5 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
        >
          <div className="flex flex-col items-center">
            <i className="bx bxs-image text-5xl text-accent"></i>
            <span className="text-xs text-gray-600">Images &lt; 10MB</span>
            <input
              onChange={handleAddImage}
              id="file"
              type="file"
              name="image"
              accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp, video/mp4,video/x-m4v"
              className="hidden"
              required
              aria-label="Select image file to upload"
            />
          </div>
          {error ? (
            <h3 className="w-full text-center text-sm font-semibold text-red-500">
              {error}
            </h3>
          ) : isLoading ? (
            <div className="mx-auto size-8 animate-spin rounded-full border-4 border-t-accent"></div>
          ) : (
            <span className="rounded-lg bg-accent px-2 py-2 text-sm font-semibold text-light-green transition-colors [transition:.3s_ease] hover:bg-accent-hover md:px-3">
              Add Image
            </span>
          )}
        </label>

        {images.length ? (
          images.map((img) => {
            return (
              <PanelMedia
                key={img._id}
                id={img._id}
                cloudUrl={img.imageUrl}
                onDelete={onDeleteImage}
              />
            );
          })
        ) : (
          <h3 className="text-center text-2xl font-semibold">
            Add an image to your panel.
          </h3>
        )}
      </div>
    </section>
  );
}
