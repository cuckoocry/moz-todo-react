import { useState } from "react";

import React from "react";

function Form(props) {

    // name 是一个 state setName 是对应的 setter 函数。
    const [name, setName] = useState("");

    function handleChange(event) {
        // event.target.value 键盘的输入值
        setName(event.target.value);
    }


    function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
