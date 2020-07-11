import React from "react";
import "./input.scss";

export default function Input({
  value,
  placeholder,
  name,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="form__group field">
      <input
        type="text"
        className="form__field"
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
    </div>
  );
}
