import React, { useState } from "react";

function Question(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="questions">
      <button onClick={toggle} className="btn" style={{ border: 'none !important' }}>
        <div className="propTitle">{props.title}</div>
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"} d-arrow`}></i>
      </button>
      {isOpen && (
        <div className="answers">
          <ul>
            {props.questions.map((q) => (
              <li key={q.Questions}>
                ➣ <a href={q.Links} target="_blank" rel="noopener noreferrer"  className="write" >{q.Questions}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Question;

