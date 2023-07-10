import React from "react";

export default function General() {
  return (
    <div className="general section">
      <label htmlFor="general">General</label>
      <input type="text" placeholder="First name" className="form__input" />
      <input type="text" placeholder="Last name" className="form__input" />
      <input type="text" placeholder="Title" className="form__input" />
      <input type="text" placeholder="Address" className="form__input" />
      <input type="text" placeholder="Phone number" className="form__input" />
      <input type="text" placeholder="Email" className="form__input" />
      <textarea name="description" id="" cols="30" rows="10">
        Description
      </textarea>
    </div>
  );
}
