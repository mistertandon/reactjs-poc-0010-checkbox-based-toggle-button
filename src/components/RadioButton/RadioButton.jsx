import { useMemo, useRef, useState } from "react";
import "./RadioButton.scss";
import { TOGGLE_STATUS_ON, TOGGLE_STATUS_OFF } from "./../../utils/constants";

const RadioButton = () => {
  const checkboxCheckedRef = useRef(false);

  const handleCheckboxChange = () => {
    setCheckboxCheckedStatus(checkboxCheckedRef.current.checked);

    let ballContainerEle = document.querySelector(".ball--container");
    if (checkboxCheckedRef.current.checked) {
      ballContainerEle.setAttribute("style", "transform:translateX(100%);");
    }
    if (!checkboxCheckedRef.current.checked) {
      ballContainerEle.setAttribute("style", "transform:translateX(0%);");
    }
  };

  const [checkboxCheckedStatus, setCheckboxCheckedStatus] = useState(false);

  const toggleStatus = useMemo(() => {
    return checkboxCheckedRef.current.checked === true
      ? TOGGLE_STATUS_ON
      : TOGGLE_STATUS_OFF;
  }, [checkboxCheckedStatus]);

  return (
    <section className="radio-button--container">
      <div className="box--container">
        <div
          id="rb-ball--container"
          className="ball--container"
        ></div>
        <input
          type="checkbox"
          name="toggle-checkbox"
          className="toggle-checkbox"
          ref={checkboxCheckedRef}
          onChange={handleCheckboxChange}
        />
      </div>
      <section className="status-checkbox">
        <div className="status-checkbox--title">Toggle Status:</div>
        <div className="status-checkbox--toggle">{toggleStatus}</div>
      </section>
    </section>
  );
};

export default RadioButton;
