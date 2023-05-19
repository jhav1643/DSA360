import React, { useEffect, useState } from "react";
import Question from "./Question";
import './style.css';

function QuestionItem() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/questions`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const groupBy = (array, key) => {
    return array.reduce((result, obj) => {
      const type = obj[key];
      const question = { Questions: obj.Questions, Links: obj.Links };
      (result[type] = result[type] || []).push(question);
      return result;
    }, {});
  };

  const groupedQuestions = groupBy(questions, "Type");

  return (
    <div className="containerall">
      <div className="fix">
        <h1 className="title">Important Coding Questions</h1>

        <div className="questions-container">
          {Object.entries(groupedQuestions).map(([type, questions]) => (
            <div key={type}>
              <Question title={type} questions={questions} />
            </div>
          ))}
        </div>
        <br /><br />
      </div>
    </div>
  );
}

export default QuestionItem;

