import "./Board.css";
import { TBoardState, TPieceSizeHolder } from './Board.d';

export const Board = (props: TBoardState) => {
  const {items, indexes} = props;
  console.log("================\n", "items: ", items, "\n================");
  console.log("================\n", "indexes: ", indexes, "\n================");
  let sizes: TPieceSizeHolder[] = [];
  for (let y = 0; y < indexes.length; y++){
    for (let x = 0; x < indexes[0].length; x++){
      const index = indexes[y][x];
      if (sizes[index] === undefined){
        sizes[index] = {
          x,
          y,
          width: 1,
          height: 1,
        };
      }
    }
  }
  return (
    <>
      board
    </>
  )
}
