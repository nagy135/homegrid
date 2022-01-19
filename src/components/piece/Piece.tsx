import { CSSProperties } from "react";
import "./Piece.css";
import { TPieceState } from './Piece.d';

export const Piece = ({ x, y, x2, y2, item }: TPieceState) => {
  const top = y * 10;
  const left = x * 10;
  const width = (x2 - x + 1) * 10;
  const height = (y2 - y + 1) * 10;

  const styles: CSSProperties = {
    top: `${top}vh`,
    left: `${left}vw`,
    width: `${width}vw`,
    height: `${height}vh`,
    lineHeight: `${height}vh`,
    backgroundColor: item.color,
  };

  const imageStyles: CSSProperties = {
    top: `${(height) / 2}vh`,
    left: `${(width) / 2}vw`,
  };

  return (
    <div
      className="piece"
      style={styles}
      onClick={() => {
        window.location.href = item.url
      }}>
      {item.icon
        ? <img
          src={item.icon}
          style={imageStyles}
          alt="image" />
        : item.name}
    </div>
  );
}
