// src/components/FeedbackComponent/FeedbackComponent.tsx
import React, { useState } from "react";
import { useFeedback } from "../../context/FeedbackContext";
import "./Feedback.css";

const FeedbackComponent: React.FC = () => {
  const [input, setInput] = useState("");
  const { feedback, addFeedback } = useFeedback();

  const handleSubmit = () => {
    if (input.trim()) {
      addFeedback(input.trim());
      setInput("");
    }
  };

  return (
    <div className="feedback-component">
      <div className="feedback-header">
        <h3>Feedback</h3>
      </div>
      <div className="feedback-list">
        {feedback.map((item, index) => (
          <div key={index} className="feedback-item">
            {item}
          </div>
        ))}
      </div>
      <div className="feedback-form">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Leave your feedback here..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FeedbackComponent;
