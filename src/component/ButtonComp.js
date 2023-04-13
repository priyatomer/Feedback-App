import React from "react";
import { Button } from "react-bootstrap";

const ButtonComp = ({ className, variant, title, onClick, style }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={className}
      style={style}
    >
      {title}
    </Button>
  );
};

export default ButtonComp;
