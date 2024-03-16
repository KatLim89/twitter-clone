import { Button } from "react-bootstrap";

export default function IconButton({ isTop, className, onClick, text }) {
  let margin = "";

  if (isTop) {
    margin = `light rounded my-3`;
  } else {
    margin = `light rounded`;
  }

  const iconMargin = text ? " me-3" : " ";

  return (
    <Button variant={margin} onClick={onClick}>
      <i
        className={className + iconMargin}
        style={{ fontSize: "24px", color: isTop ? "dodgerblue" : "black" }}
      />
      {text}
    </Button>
  );
}
