import React from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

export const NextArrow = (props) => {
  const {
    className,
    style,
    onClick
  } = props;
  return (
    <ChevronRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        fontSize: "3em",
        right: "9px",
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const {
    className,
    style,
    onClick
  } = props;
  return (
    <ChevronLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        fontSize: "3em",
        left: "9px",
        zIndex: 1
      }}
      onClick={onClick}
    />
  );
};

export const styles = theme => ({
  media: {
    height: 200,
    objectFit: "cover",
    borderRadius: 5,
    opacity: 0.9,
    "&:hover": {
      opacity: "1"
    }
  },
  dotsCustomClass: {
    color: "white"
  }
});
