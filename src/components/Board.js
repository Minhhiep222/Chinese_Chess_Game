import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const initialBoard = [
  [
    { symbol: "車", color: "red" },
    { symbol: "馬", color: "red" },
    { symbol: "象", color: "red" },
    { symbol: "士", color: "red" },
    { symbol: "將", color: "red" },
    { symbol: "士", color: "red" },
    { symbol: "象", color: "red" },
    { symbol: "馬", color: "red" },
    { symbol: "車", color: "red" },
  ],
  [
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
  ],
  [
    { symbol: " ", color: "" },
    { symbol: "砲", color: "red" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: "砲", color: "red" },
    { symbol: " ", color: "" },
  ],
  [
    { symbol: "兵", color: "red" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "red" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "red" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "red" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "red" },
  ],
  [
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
  ],
  [
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
  ],
  [
    { symbol: "兵", color: "black" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "black" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "black" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "black" },
    { symbol: " ", color: "" },
    { symbol: "兵", color: "black" },
  ],
  [
    { symbol: " ", color: "" },
    { symbol: "砲", color: "black" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: "砲", color: "black" },
    { symbol: " ", color: "" },
  ],
  [
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
    { symbol: " ", color: "" },
  ],
  [
    { symbol: "車", color: "black" },
    { symbol: "馬", color: "black" },
    { symbol: "象", color: "black" },
    { symbol: "士", color: "black" },
    { symbol: "將", color: "black" },
    { symbol: "士", color: "black" },
    { symbol: "象", color: "black" },
    { symbol: "馬", color: "black" },
    { symbol: "車", color: "black" },
  ],
];

const Board = () => {
  const [board, setBoard] = useState(initialBoard);

  const handleClick = (row, col) => {
    console.log(`click on piece: ${row}, ${col}`);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((piece, colIndex) => (
            <Square
              key={colIndex}
              piece={piece}
              onClick={handleClick}
              row={rowIndex}
              col={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
