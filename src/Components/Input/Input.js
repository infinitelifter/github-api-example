import React from "react";
import "./input.scss";

export default function Input({ placeholder, name, handleChange, handleBlur }) {
  return (
    <div className="form__group field">
      <input
        type="text"
        className="form__field"
        placeholder={placeholder}
        name={name}
        id={name}
        required
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
    </div>
  );
}
