import { CSSProperties } from "react";
import "./Piece.css";
import { TPieceState } from './Piece.d';

export const Piece = ({ x, y, x2, y2, item }: TPieceState) => {
  const styles: CSSProperties = {
    top: `${y * 10}vh`,
    left: `${x * 10}vw`,
    width: `${(x2 - x + 1) * 10}vw`,
    height: `${(y2 - y + 1) * 10}vh`,
    lineHeight: `${(y2 - y + 1) * 10}vh`,
    backgroundColor: item.color,
  };
  return (
    <div
      className="piece"
      style={styles}
      onClick={() => {
        window.location.href = item.url
      }}>
      {item.name}
    </div>
  );
}
