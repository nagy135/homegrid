import { CSSProperties } from "react";
import "./Piece.css";
import { TPieceState } from './Piece.d';

const GAP = 0.2;

export const Piece = ({ x, y, x2, y2, item }: TPieceState) => {
  const top = y * 10;
  const left = x * 10;
  const width = (x2 - x + 1) * 10;
  const height = (y2 - y + 1) * 10;

  const styles: CSSProperties = {
    top: `${top + GAP}vh`,
    left: `${left + GAP}vw`,
    width: `${width - GAP * 2}vw`,
    height: `${height - GAP * 2}vh`,
    lineHeight: `${height - GAP * 2}vh`,
    backgroundColor: item.color,
  };

  return (
    <div
      className="piece"
      style={styles}
      onClick={() => {
        window.location.href = item.url
      }}>
      {item.icon
        ? <i className={item.icon}></i>
        : <span>item.name</span>}
    </div>
  );
}
