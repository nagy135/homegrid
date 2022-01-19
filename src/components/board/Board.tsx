import { useMemo, useState } from "react";
import Piece from "../piece";
import { TPieceState } from "../piece/Piece.d";
import "./Board.css";
import { TBoardState } from './Board.d';

const calculateSizes = (boardState: TBoardState): TPieceState[] => {
  const { indexes, items } = boardState;
  const sizes: TPieceState[] = [];
  for (let y = 0; y < indexes.length; y++) {
    for (let x = 0; x < indexes[0].length; x++) {
      const index = indexes[y][x];
      if (sizes[index] === undefined) {
        sizes[index] = {
          x,
          y,
          x2: x,
          y2: y,
          item: items[index],
        };
      } else {
        sizes[index].x2 = x;
        sizes[index].y2 = y;
      }
    }
  }
  return sizes;
};

export const Board = (props: TBoardState) => {
  const sizes = useMemo(() => calculateSizes(props), []);
  const [pieceStates, _setPieceStates] = useState<TPieceState[]>(sizes);

  return (
    <>
      {pieceStates.map((pieceState, i) =>
        <Piece
          key={i}
          x={pieceState.x}
          y={pieceState.y}
          x2={pieceState.x2}
          y2={pieceState.y2}
          item={pieceState.item}
        />
      )}
    </>
  )
}
