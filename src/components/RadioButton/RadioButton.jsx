import { useEffect, useRef } from "react";
import "./RadioButton.scss";

const RadioButton = () => {
  const checkboxCheckedStatus = useRef(false);

  const handleCheckboxChange = () => {
    console.log("checkboxCheckedStatus", checkboxCheckedStatus.current.checked);
    let ballContainerEle = document.querySelector(".ball--container");
    if (checkboxCheckedStatus.current.checked) {
      ballContainerEle.setAttribute("style", "transform:translateX(100%);");
    }
    if (!checkboxCheckedStatus.current.checked) {
      ballContainerEle.setAttribute("style", "transform:translateX(0%);");
    }
  };

  return (
    <section className="radio-button--container">
      <label htmlFor="toggle-checkbox">
        <div className="box--container">
          <div
            id="rb-ball--container"
            className="ball--container"
          ></div>
          <input
            type="checkbox"
            name="toggle-checkbox"
            className="toggle-checkbox"
            ref={checkboxCheckedStatus}
            onChange={handleCheckboxChange}
          />
        </div>
      </label>
    </section>
  );
};

export default RadioButton;
