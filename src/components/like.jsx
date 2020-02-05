import React from "react";

/* passa props para a const like dai nao precisa colocar o this */
const Like = (props) => {
  let classes;
  if (!props.liked) {
    classes='far fa-heart'
  } else {
    classes='fas fa-heart'
  }
  return (
    <i
      onClick={props.onClickx}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
