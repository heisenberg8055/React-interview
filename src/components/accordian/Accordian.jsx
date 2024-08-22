import { useState } from "react";
import data from "./data";
import styles from './Accordian.module.css'

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId == selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let arr = multi.slice();
    if (arr.indexOf(currentId) === -1) {
      arr.push(currentId);
    } else {
      arr.splice(arr.indexOf(currentId), 1);
    }
    setMulti(arr);
  }

  return (
    <div className={styles.wrapper}>
      <button id="btn"
        onClick={() => {
          setMultiSelect(!multiSelect);
          setSelected(null);
          setMulti([]);
          document.getElementById('btn').innerText = multiSelect ? "Enable Mutli Select" : "Enable Single Select";
        }}
      >
        Enable Multi Selection
      </button>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className={styles.item} key={dataItem.id}>
              <div
                className={styles.title}
                onClick={
                  multiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3 className={styles.question}>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {(selected === dataItem.id && multiSelect == false) ||
              (multi.indexOf(dataItem.id) !== -1 && multiSelect) ? (
                <div className={styles.content}>{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
