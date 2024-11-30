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
  const [selectPiece, setSelectPiece] = useState(null); //Dùng để kiểm tra ô đã được chọn chưa
  const [valiMoves, setValiMoves] = useState([]); //Kiểm tra ô hợp lệ không

  const handleClick = (row, col) => {
    // console.log(`click on piece: ${row}, ${col}`);
    // console.log(`click on piece: ${selectPiece}`);
    if (selectPiece) {
      //Xử lý di chuyển
      const valiMove = valiMoves.find(
        (move) => move.row === row && move.col === col
      );

      if (valiMove) {
        const newBoard = [...board];
        //Di chuyển quân cờ qua ô đã được chọn
        const previousBoard = { symbol: " ", color: "" };
        console.log(newBoard[valiMove.row][valiMove.col]);
        newBoard[valiMove.row][valiMove.col] =
          newBoard[selectPiece.row][selectPiece.col];
        //Xóa quân cờ trong ô đã di chuyển
        newBoard[selectPiece.row][selectPiece.col] = previousBoard;

        setBoard(newBoard);
        setSelectPiece(null);
        setValiMoves([]); //hủy ô hợp lệ
      }
    } else {
      // Nếu chưa chọn quân cờ, chọn quân cờ tại ô (row, col)
      const piece = board[row][col];
      console.log(`click on piece ${piece.symbol}`);
      if (piece.symbol !== " ") {
        console.log(`click on piece: click set ${piece.symbol}`);
        setSelectPiece({ row, col, piece });
        // Tính toán các ô hợp lệ cho quân cờ đã chọn
        const moves =
          piece.symbol === "車"
            ? getValidMovesForRook(piece, board, row, col)
            : []; // Cập nhật các quân khác tùy vào loại quân
        setValiMoves(moves);
      }
    }
  };

  // Hàm tính các ô mà Xe có thể di chuyển (theo hàng và cột)
  const getValidMovesForRook = (piece, board, row, col) => {
    const moves = [];

    // Di chuyển theo chiều dọc (trên và dưới)
    for (let i = row - 1; i >= 0; i--) {
      console.log("ô hợp lệ", board[i][col]);
      if (board[i][col].symbol === " ") {
        moves.push({ row: i, col });
      } else if (piece.color !== board[i][col].color) {
        moves.push({ row: i, col });
        break;
      } else {
        break; // Dừng lại nếu gặp quân cờ khác
      }
    }
    for (let i = row + 1; i < 10; i++) {
      console.log("ô hợp lệ", board[i][col]);
      if (board[i][col].symbol === " ") {
        moves.push({ row: i, col });
      } else if (piece.color !== board[i][col].color) {
        moves.push({ row: i, col });
        break;
      } else {
        break; // Dừng lại nếu gặp quân cờ khác
      }
    }

    // Di chuyển theo chiều ngang (trái và phải)
    for (let i = col - 1; i >= 0; i--) {
      if (board[row][i].symbol === " ") {
        moves.push({ row, col: i });
      } else if (piece.color !== board[row][i].color) {
        moves.push({ row, col: i });
        break;
      } else {
        break; // Dừng lại nếu gặp quân cờ khác
      }
    }
    for (let i = col + 1; i < 9; i++) {
      if (board[row][i].symbol === " ") {
        moves.push({ row, col: i });
      } else if (piece.color !== board[row][i].color) {
        moves.push({ row, col: i });
        break;
      } else {
        break; // Dừng lại nếu gặp quân cờ khác
      }
    }

    return moves;
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
              isValidMove={valiMoves.some(
                (move) => move.row === rowIndex && move.col === colIndex
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
