import React from "react";
import { useState } from "react";

export default function AddModal({ movies, setMovies }) {
  const [show, setShow] = useState(false);

  const [addedMovie, setAddedMovie] = useState({
    title: "",
    description: "",
    image: "",
    rate: 0,
    releaseDate: "",
  });

  const handleAdd = () => {
    setMovies([addedMovie, ...movies]);
    setShow(false);
  };
  return (
    <>
      <button className="btn-prim" onClick={() => setShow(true)}>
        Add movie
      </button>
      {show && (
        <div className="modal-bg">
          <div className="modal">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setAddedMovie({ ...addedMovie, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              onChange={(e) =>
                setAddedMovie({ ...addedMovie, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Rating"
              onChange={(e) =>
                setAddedMovie({ ...addedMovie, rate: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="image"
              onChange={(e) =>
                setAddedMovie({ ...addedMovie, image: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="release date"
              onChange={(e) =>
                setAddedMovie({ ...addedMovie, releaseDate: e.target.value })
              }
            />
            <button className="btn-prim" onClick={handleAdd}>
              CLick to add
            </button>
            <button className="btn-prim" onClick={() => setShow(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
