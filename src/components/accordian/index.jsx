import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multi, setMulti] = useState([]);
  const [toggleMulti, setToggleMulti] = useState(false);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    const temp = [...multi];
    const indexOfId = temp.indexOf(id);

    if (indexOfId === -1) temp.push(id);
    else temp.splice(indexOfId, 1);

    setMulti(temp);
  };

  return (
    <div className="accordian-app">
      <h1 className="title">Accordian</h1>
      <div className="accordian-container">
        <div className="acc-button-container">
          <button onClick={() => setToggleMulti(!toggleMulti)}>
            Enable Multi Selection
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={toggleMulti ? "acc-icon" : "acc-icon red"}
          >
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={toggleMulti ? "acc-icon green" : "acc-icon"}
          >
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        </div>

        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                className="item"
                onClick={() =>
                  toggleMulti
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
              >
                <div>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {toggleMulti
                  ? multi.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-answer">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-answer">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>Data Not Found!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordian;
