import React from "react";
import "./arrow.scss";
const classNames = require("classnames/bind");

export default function Arrow({ isDescending }) {
  return (
    <div
      className={classNames({
        arrow: true,
        arrow__up: !isDescending,
        arrow__down: isDescending,
      })}
    />
  );
}
