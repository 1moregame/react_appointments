import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ itemList, handleDelete }) => {
  return (
    <div className="tileList">
      {itemList.length ? (
        itemList.map((item, index) => (
          <Tile
            key={index}
            index={index}
            data={item}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p>{`No Items`}</p>
      )}
    </div>
  );
};
