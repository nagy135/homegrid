import { useMemo, useState } from "react";
import Piece from "../piece";
import { TPieceState } from "../piece/Piece.d";
import "./Board.css";
import { TBoardState } from './Board.d';

const calculateSizes = (boardState: TBoardState): TPieceState[] => {
  const { indexes, items } = boardState;
  const sizes: TPieceState[] = [];
  const visited: Set<string> = new Set();
  for (let y = 0; y < indexes.length; y++) {
    for (let x = 0; x < indexes[0].length; x++) {
      if (visited.has(`${y},${x}`)) continue;
      const index = indexes[y][x];
      // move DOWN as far a possible
      let xSearch = x;
      while (xSearch < indexes[0].length && indexes[y][xSearch] == index) {
        xSearch++;
      };
      // move DOWN as far a possible
      let ySearch = y;
      while (ySearch < indexes.length && indexes[ySearch][xSearch-1] == index) {
        ySearch++;
      };
      // add all points to visited, validating if its rectangle
      for (let yy = y; yy < ySearch; yy++) {
        for (let xx = x; xx < xSearch; xx++) {
          if (indexes[yy][xx] == index)
            visited.add(`${yy},${xx}`);
          else
            throw "Shape is not rectangle!";
        }
      }
      sizes.push({
        x,
        y,
        x2: xSearch - 1,
        y2: ySearch - 1,
        item: items[index],
      });
    }
  }
  return sizes;
};

export const Board = (props: TBoardState) => {
  const sizes = useMemo(() => calculateSizes(props), []);
  console.log("================\n", "sizes: ", sizes, "\n================");
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
