import React from "react";
import "./Square.css";

const Square = ({ piece, onClick, row, col }) => {
  return (
    <div className="square" onClick={() => onClick(row, col)}>
      {piece.symbol != " " ? (
        <div
          className="piece"
          style={{ color: piece.color, border: `3px solid ${piece.color}` }}
        >
          {piece.symbol}
        </div>
      ) : null}
    </div>
  );
};

export default Square;
