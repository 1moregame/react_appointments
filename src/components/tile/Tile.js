import React from "react";

export const Tile = ({ data, index, handleDelete }) => {
  let keys = Object.keys(data);

  return (
    <div className="tile-container" key={data[keys[0]]}>
      <i
        id={index}
        role="button"
        className="fa fa-trash-o"
        onClick={handleDelete}
      ></i>

      {keys.map((key, index) => (
        <p key={index} className={index === 0 ? "tile-title" : "tile"}>
          {data[key]}
        </p>
      ))}
    </div>
  );
};
