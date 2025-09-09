import "./imageList.css";
import backlogo from "../../assets/back.png";
import editlogo from "../../assets/edit.png";
import searchlogo from "../../assets/search.png";
import trashlogo from "../../assets/trash.png";
import clearlogo from "../../assets/clear.png";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "react-spinner-material";

// components
import { ImageForm } from "../imageForm/imageForm.jsx";
import { Carousel } from "../carousel/Carousel.jsx";

// api
import {
  fetchImagesApi,
  addImageApi,
  updateImageApi,
  deleteImageApi,
} from "../../api/imageApi.js";

export const ImageList = ({ albumId, albumName, onBack }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [mode, setMode] = useState(null); // "add" | "update"
  const [currentImage, setCurrentImage] = useState(null);

  // fetch images
  const fetchImages = async () => {
    setLoading(true);
    const data = await fetchImagesApi(albumId);
    setImages(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [albumId]);

  // add image
  const handleAdd = async ({ title, url }) => {
    const newImage = await addImageApi(albumId, { title, url });
    setImages([newImage, ...images]);
    toast.success("Image added.");
    setMode(null);
  };

  // update image
  const handleUpdate = async ({ title, url }) => {
    const updated = await updateImageApi(albumId, currentImage.id, {
      title,
      url,
    });
    setImages(images.map((i) => (i.id === updated.id ? updated : i)));
    toast.success("Image updated.");
    setMode(null);
    setCurrentImage(null);
  };

  // delete image
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    await deleteImageApi(albumId, id);
    setImages(images.filter((i) => i.id !== id));
    toast.success("Image deleted.");
  };

  // filter
  const filtered = images.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  // loading
  if (loading) {
    return (
      <div className="loader">
        <Spinner color="#0077ff" />
      </div>
    );
  }

  // carousel view
  if (selectedImageIndex !== null) {
    const img = filtered[selectedImageIndex];
    return (
      <Carousel
        title={img.title}
        url={img.url}
        onNext={() =>
          setSelectedImageIndex(
            selectedImageIndex === filtered.length - 1 ? 0 : selectedImageIndex + 1
          )
        }
        onPrev={() =>
          setSelectedImageIndex(
            selectedImageIndex === 0 ? filtered.length - 1 : selectedImageIndex - 1
          )
        }
        onCancel={() => setSelectedImageIndex(null)}
      />
    );
  }

  return (
    <>
      {/* form */}
      {mode === "add" && (
        <ImageForm albumName={albumName} onAdd={handleAdd} />
      )}
      {mode === "update" && (
        <ImageForm
          albumName={albumName}
          onUpdate={handleUpdate}
          updateIntent={currentImage}
        />
      )}

      {/* top bar */}
      <div className="top">
        <span onClick={onBack}>
          <img src={backlogo} alt="back" />
        </span>
        <h3>Images in {albumName}</h3>

        {/* search */}
        <div className="search">
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <img
              src={clearlogo}
              alt="clear"
              onClick={() => setSearch("")}
              style={{ cursor: "pointer" }}
            />
          )}
          {!search && <img src={searchlogo} alt="search" />}
        </div>

        {/* action buttons */}
        {mode && (
          <button className="active" onClick={() => setMode(null)}>
            Cancel
          </button>
        )}
        {!mode && (
          <button
            className={`${mode === "add" && "active"}`}
            onClick={() => setMode("add")}
          >
            Add image
          </button>
        )}
      </div>

      {/* list */}
      {filtered.length === 0 ? (
        <h4 style={{ textAlign: "center" }}>No images found.</h4>
      ) : (
        <div className="imageList">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="image"
              onClick={() => setSelectedImageIndex(i)}
            >
              <div
                className="update"
                onClick={(e) => {
                  e.stopPropagation();
                  setMode("update");
                  setCurrentImage(img);
                }}
              >
                <img src={editlogo} alt="edit" />
              </div>
              <div className="delete" onClick={(e) => handleDelete(e, img.id)}>
                <img src={trashlogo} alt="delete" />
              </div>
              <img
                src={img.url}
                alt={img.title}
                onError={(e) => (e.currentTarget.src = "/assets/warning.png")}
              />
              <span>{img.title.substring(0, 20)}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
